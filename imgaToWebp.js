const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Supported image formats to convert
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.tiff', '.tif', '.bmp', '.gif'];

/**
 * Recursively get all image files from a directory
 * @param {string} dir - Directory path
 * @param {string[]} fileList - Array to store file paths
 * @returns {string[]} Array of image file paths
 */
function getImageFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            // Recursively search subdirectories
            getImageFiles(filePath, fileList);
        } else {
            const ext = path.extname(file).toLowerCase();
            // Include supported formats but exclude SVGs and already converted WebP files
            if (SUPPORTED_FORMATS.includes(ext) && ext !== '.svg' && ext !== '.webp') {
                fileList.push(filePath);
            }
        }
    });
    
    return fileList;
}

/**
 * Convert an image to WebP format
 * @param {string} inputPath - Input image path
 * @param {string} outputPath - Output WebP path
 * @param {number} quality - WebP quality (1-100)
 */
async function convertToWebP(inputPath, outputPath, quality = 80) {
    try {
        await sharp(inputPath)
            .webp({ 
                quality: quality,
                effort: 6 // Higher effort for better compression
            })
            .toFile(outputPath);
        
        console.log(`✅ Converted: ${path.relative(process.cwd(), inputPath)} → ${path.relative(process.cwd(), outputPath)}`);
        
        // Get file sizes for comparison
        const originalSize = fs.statSync(inputPath).size;
        const webpSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
        
        console.log(`   📊 Size: ${(originalSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB (${savings}% reduction)`);
        
    } catch (error) {
        console.error(`❌ Failed to convert ${inputPath}:`, error.message);
    }
}

/**
 * Main function to convert all images in public folder to WebP
 * @param {Object} options - Conversion options
 * @param {number} options.quality - WebP quality (1-100)
 * @param {boolean} options.keepOriginals - Whether to keep original files
 * @param {string} options.publicDir - Public directory path
 */
async function convertImagesToWebP(options = {}) {
    const {
        quality = 80,
        keepOriginals = false,
        publicDir = './public'
    } = options;
    
    console.log('🚀 Starting image conversion to WebP...\n');
    
    // Check if public directory exists
    if (!fs.existsSync(publicDir)) {
        console.error(`❌ Public directory not found: ${publicDir}`);
        return;
    }
    
    // Get all image files
    const imageFiles = getImageFiles(publicDir);
    
    if (imageFiles.length === 0) {
        console.log('ℹ️  No images found to convert.');
        return;
    }
    
    console.log(`📁 Found ${imageFiles.length} images to convert:\n`);
    
    let converted = 0;
    let failed = 0;
    
    // Convert each image
    for (const imagePath of imageFiles) {
        const dir = path.dirname(imagePath);
        const name = path.parse(imagePath).name;
        const webpPath = path.join(dir, `${name}.webp`);
        
        // Skip if WebP already exists
        if (fs.existsSync(webpPath)) {
            console.log(`⏭️  Skipped: ${path.relative(process.cwd(), webpPath)} (already exists)`);
            continue;
        }
        
        try {
            await convertToWebP(imagePath, webpPath, quality);
            converted++;
            
            // Optionally delete original file
            if (!keepOriginals) {
                fs.unlinkSync(imagePath);
                console.log(`🗑️  Deleted original: ${path.relative(process.cwd(), imagePath)}`);
            }
            
        } catch (error) {
            console.error(`❌ Error processing ${imagePath}:`, error.message);
            failed++;
        }
        
        console.log(''); // Add spacing between files
    }
    
    // Summary
    console.log('📊 Conversion Summary:');
    console.log(`✅ Successfully converted: ${converted} images`);
    if (failed > 0) {
        console.log(`❌ Failed conversions: ${failed} images`);
    }
    console.log(`📁 Originals ${keepOriginals ? 'kept' : 'deleted'}`);
    console.log('\n🎉 Image conversion completed!');
}

// Run the conversion if this script is executed directly
if (require.main === module) {
    // Parse command line arguments
    const args = process.argv.slice(2);
    const options = {};
    
    // Parse options
    args.forEach((arg, index) => {
        switch (arg) {
            case '--quality':
                options.quality = parseInt(args[index + 1]) || 80;
                break;
            case '--delete-originals':
                options.keepOriginals = false;
                break;
            case '--public-dir':
                options.publicDir = args[index + 1] || './public';
                break;
        }
    });
    
    convertImagesToWebP(options).catch(console.error);
}

module.exports = { convertImagesToWebP, getImageFiles, convertToWebP };

