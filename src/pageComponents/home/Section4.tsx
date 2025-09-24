import React from 'react'
import Image from 'next/image'
import { ArrowBigRight, ArrowRightIcon } from 'lucide-react'


export const Section4 = () => {
    return (
        <div className='px-[48px] py-[96px]'>
            <div className='max-w-[1920px] mx-auto flex flex-col gap-10'>
                <div className='flex flex-col gap-4 w-1/2'>
                    <h1 className='text-[#0B0A0B] text-[20px] font-500'>
                        Our Services
                    </h1>
                    <p className='font-weight-[400] leading-[45px] text-[#00186B] text-[40px]'>
                        Comprehensive Healthcare Services for Every Stage of Life
                    </p>
                </div>

                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-6'>
                        <p className='text-[#0B0A0B] text-[16px] font-weight-[400] leading-[24px]'>
                            At QLife Family Clinic, we provide comprehensive healthcare designed to meet your needs at every stage of life. From everyday medical care to specialized services, our clinics are built on the principles of quality, trust, and a commitment to global standards of excellence.
                        </p>
                    </div>
                    <div className='col-span-6'>
                        <p className='text-[#0B0A0B] text-[16px] font-weight-[400] leading-[24px]'>
                            Whether you&apos;re seeking routine care, preparing for safe international travel, or taking proactive steps toward long-term wellness, QLife offers the expertise, technology, and compassion to support your journey to better health.
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-4  mt-10 ' >
                    <div className='col-span-4'>
                        <Cards image='/home/section4/1.webp' title='QLife General Clinic' description='We provide essential health advice, vaccinations, and preventive treatments tailored for your international travels.' />
                    </div>
                    <div className='col-span-4'>
                        <Cards image='/home/section4/2.webp' title='QLife Travel Clinic' description='We serve as your primary point of contact for all your routine health needs, offering continuous and coordinated care.' />
                    </div>
                    <div className='col-span-4'>
                        <Cards image='/home/section4/3.webp' title='QLife Wellness Clinic' description='We offer dedicated clinics providing expert care and advanced treatment for specific medical conditions.' />
                    </div>
                </div>
            </div>
        </div>
    )
}



const Cards = ({ image, title, description }: { image: string, title: string, description: string }) => {
    return (
        <div className='flex flex-col gap-4 border-b border-[#F0F0F0] pb-10 '>
            <Image src={image} alt='image' width={430} height={504} className='w-full h-[503px] object-cover border-b-[5px] border-[#FFF16F]' />

            <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[#0B0A0B] text-[20px] font-500'>
                        {title}
                    </h1>
                    <ArrowRightIcon className='w-6 h-6 text-[#0B0A0B]' />
                </div>

                <p>
                    {description}
                </p>
            </div>

        </div>
    )
}