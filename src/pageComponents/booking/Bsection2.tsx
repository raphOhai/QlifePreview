import React from 'react'
import Image from 'next/image'

import Link from 'next/link'

export const BSection2 = () => {
    return (

        <div className='space-y-6 md:space-y-12 lg:space-y-15'>
            <div className='pt-8 md:pt-10 lg:pt-16 pb-12 md:pb-16 lg:pb-[96px] px-4 md:px-8 lg:px-[48px] space-y-6 md:space-y-10 w-full md:w-2/3 lg:w-1/2'>
                <h1 className='text-[#00186B] text-base md:text-lg lg:text-[20px] font-weight-[500] leading-[32px] md:leading-[40px] lg:leading-[56px]'>
                    Guided care with confidence
                </h1>

                <h2 className='text-[#00186B] text-2xl md:text-3xl lg:text-[40px] font-weight-[400] leading-tight md:leading-[44px] lg:leading-[52px]'>
                    Proactive and preventive health services to safeguard your well-being
                </h2>

                <p className='text-[#0B0A0B] text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                    Our health screening services go beyond routine check-ups to give a complete picture of your health. Through personalized assessments, we identify potential health risks early, allowing for timely interventions. This approach helps you maintain optimal wellness and avoid complications before they arise.
                </p>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 px-4 md:px-8 lg:px-[48px]'>
                <div className='hidden md:block md:col-span-3'>

                </div>
                <div className='md:col-span-8 space-y-4 md:space-y-2'>
                <BookingCard link='/booking/canada' image='/booking/maps/1.webp' title='  Canada Visa Medical Examination' description='We offer full medical assessments for Canadian visa applicants. Our staff ensures all requirements are met, giving you confidence in your application.     ' aspectRatio='aspect-23/13' />
                    <BookingCard link='/booking/uk' image='/booking/maps/2.webp' title='UK Visa Medical Examination ' description='We provide thorough medical assessments to meet UK visa requirements. Our team ensures your evaluation is completed efficiently and professionally.' aspectRatio='aspect-23/35' />

                    <div className='mt-0 md:mt-[-200px]'>
                    <BookingCard link='/booking/us' image='/booking/maps/3.webp' title='US Visa Medical Examination' description='Our clinic conducts all necessary examinations for US visa applicants. You can trust us to guide you through the process smoothly and accurately.' aspectRatio='aspect-1/1' />
                    </div>

                </div>

            </div>

        </div>
    )
}




const BookingCard = ({ image, title, description, aspectRatio, link }: { image: string, title: string, description: string, aspectRatio: string, link: string }) => {
        return (
        <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
            <div className='md:col-span-4'>
                <Image src={image} alt={title} width={430} height={504} className={`w-full h-[300px] md:h-[500px] object-contain ${aspectRatio}`} />
            </div>
            <div className='md:col-span-8 space-y-3 md:space-y-4 md:mt-[25%]'>
                <h1 className='text-[#00186B] text-lg md:text-xl lg:text-[20px] font-weight-[500] leading-[32px] md:leading-[40px] lg:leading-[56px]'>
                    {title}
                </h1>
                <p className='text-[#0B0A0B] text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px] w-full md:max-w-[85%] lg:max-w-[80%]'>
                    {description}
                </p>
                <Link href={link}>
                <button className='bg-transparent border border-[#00186B] text-[#00186B] py-3 px-6 md:p-[24px] rounded-full text-sm md:text-base'>
                    Book an appointment
                </button>
                </Link>
            </div>
        </div>
    )
}
