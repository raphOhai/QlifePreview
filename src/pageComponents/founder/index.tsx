import { ClinicCTA } from '@/components/ClinicCTA'
import Image from 'next/image'
import React from 'react'

export const Founder = () => {
    return (
        <div className='space-y-6 md:space-y-8 lg:space-y-12 py-8 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-[48px] max-w-[1280px] mx-auto w-full'>
            <h1 className='text-[#0B0A0B] text-lg md:text-xl lg:text-[20px] font-weight-[500]'>
                Our Founder
            </h1>

            <div className='space-y-4 md:space-y-6 lg:space-y-8'>
                <h1 className='text-[#00186B] text-2xl md:text-3xl lg:text-[48px] font-weight-[400] leading-tight md:leading-[1.2] lg:leading-[56px] font-hornbill'>
                    Late Dr. Funmi Alakija
                </h1>
                <FounderContent />
            </div>

            <div className='pt-8 md:pt-12 lg:pt-16'>
                <ClinicCTA />
            </div>
        </div>
    )
}



const FounderContent = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10'>
            <div className='lg:col-span-6 order-2 lg:order-1'>
                <Image 
                    src='/home/section6/1.webp' 
                    alt='Late Dr. Funmi Alakija - Founder of Q-Life' 
                    width={500} 
                    height={500} 
                    className='w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover border-b-[5px] md:border-b-[8px] lg:border-b-[10px] border-[#FFF16F] rounded-t-lg' 
                />
            </div>
            <div className='lg:col-span-6 order-1 lg:order-2 space-y-4 md:space-y-5 lg:space-y-6'>
                <p className='text-[#0B0A0B] text-sm md:text-base lg:text-lg leading-relaxed'>
                    Dr. Funmi Alakija, the late founder of Q-Life, was a distinguished Primary Healthcare Physician and Specialist in Travel Medicine, with a diploma from the Royal College of Surgeons & Physicians, Glasgow. She also held certified training in Ultrasonography from Thomas Jefferson University, U.S.A., family planning training from the Planned Parenthood Federation of Nigeria, and was a member of the International Society for Travel Medicine (ISTM).
                </p>

                <div className='space-y-3 md:space-y-4 lg:space-y-5 py-4 md:py-6 lg:py-8'>
                    <p className='text-[#00186B] text-2xl md:text-3xl lg:text-[40px] font-weight-[400] leading-none'>
                        &ldquo;
                    </p>

                    <p className='text-[#00186B] text-lg md:text-xl lg:text-[24px] font-weight-[400] leading-relaxed md:leading-[1.4] lg:leading-[32px]'>
                        Trusted dedicated expert teams delivering care with compassion and shaping healthier futures together.
                    </p>
                </div>

                <p className='text-[#0B0A0B] text-sm md:text-base lg:text-lg leading-relaxed'>
                    An alumna of Lagos Business School, she earned a Master&apos;s Degree in Public Health from the College of Medicine, University of Lagos. Beyond her medical achievements, Dr. Alakija dedicated herself to charitable works, leaving a lasting legacy of compassion and excellence in healthcare.
                </p>
            </div>
        </div>
    )
}

