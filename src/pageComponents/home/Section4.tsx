import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from 'lucide-react'


export const Section4 = () => {
    return (
        <div className='px-4 md:px-8 lg:px-[48px] py-12 md:py-16 lg:py-[96px]'>
            <div className='max-w-[1920px] mx-auto flex flex-col gap-6 md:gap-8 lg:gap-10'>
                <div className='flex flex-col gap-3 md:gap-4 w-full md:w-2/3 lg:w-1/2'>
                    <h1 className='text-[#0B0A0B] text-base md:text-lg lg:text-[20px] font-500'>
                        Our Services
                    </h1>
                    <p className='font-weight-[400] leading-tight md:leading-relaxed lg:leading-[45px] text-[#00186B] text-2xl md:text-3xl lg:text-[40px]'>
                        Comprehensive Healthcare Services for Every Stage of Life
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4'>
                    <div className='md:col-span-6'>
                        <p className='text-[#0B0A0B] text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                            At QLife Family Clinic, we provide comprehensive healthcare designed to meet your needs at every stage of life. From everyday medical care to specialized services, our clinics are built on the principles of quality, trust, and a commitment to global standards of excellence.
                        </p>
                    </div>
                    <div className='md:col-span-6'>
                        <p className='text-[#0B0A0B] text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                            Whether you&apos;re seeking routine care, preparing for safe international travel, or taking proactive steps toward long-term wellness, QLife offers the expertise, technology, and compassion to support your journey to better health.
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-4 mt-6 md:mt-8 lg:mt-10'>
                    <div className='lg:col-span-4'>
                        <Cards image='/home/section4/1.webp' title='QLife General Clinic' description='We provide essential health advice, vaccinations, and preventive treatments tailored for your international travels.' />
                    </div>
                    <div className='lg:col-span-4'>
                        <Cards image='/home/section4/2.webp' title='QLife Travel Clinic' description='We serve as your primary point of contact for all your routine health needs, offering continuous and coordinated care.' />
                    </div>
                    <div className='lg:col-span-4'>
                        <Cards image='/home/section4/3.webp' title='QLife Wellness Clinic' description='We offer dedicated clinics providing expert care and advanced treatment for specific medical conditions.' />
                    </div>
                </div>
            </div>
        </div>
    )
}



const Cards = ({ image, title, description }: { image: string, title: string, description: string }) => {
    return (
        <div className='flex flex-col gap-3 md:gap-4 border-b border-[#F0F0F0] pb-6 md:pb-8 lg:pb-10'>
            <Image src={image} alt='image' width={430} height={504} className='w-full h-[300px] md:h-[400px] lg:h-[503px] object-cover border-b-[5px] border-[#FFF16F]' />
            <div className='flex flex-col gap-3 md:gap-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[#0B0A0B] text-lg md:text-xl lg:text-[20px] font-500'>
                        {title}
                    </h1>
                    <ArrowRightIcon className='w-5 h-5 md:w-6 md:h-6 text-[#0B0A0B]' />
                </div>
                <p className='text-sm md:text-base leading-relaxed'>
                    {description}
                </p>
            </div>
        </div>
    )
}