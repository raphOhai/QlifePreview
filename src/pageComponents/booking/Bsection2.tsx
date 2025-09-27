import React from 'react'
import Image from 'next/image'

export const BSection2 = () => {
    return (

        <div className='space-y-15'>

            <div className='py-[96px] px-[48px] space-y-15 w-1/2'>
                <h1 className='text-[#00186B] text-[20px] font-weight-[500] leading-[56px]'>
                    Guided care with confidence
                </h1>

                <h2 className='text-[#00186B] text-[40px] font-weight-[400] leading-[52px]'>
                    Proactive and preventive health services to safeguard your well-being
                </h2>

                <p className='text-[#0B0A0B] text-[16px] font-weight-[400] leading-[24px]'>
                    Our health screening services go beyond routine check-ups to give a complete picture of your health. Through personalized assessments, we identify potential health risks early, allowing for timely interventions. This approach helps you maintain optimal wellness and avoid complications before they arise.
                </p>
            </div>


            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-3'>

                </div>
                <div className='col-span-8 space-y-2'>
                    <BookingCard image='/booking/maps/1.webp' title='Canada Visa Medical Examination' description='We offer full medical assessments for Canadian visa applicants. Our staff ensures all requirements are met, giving you confidence in your application.' aspectRatio='aspect-23/35' />
                    <BookingCard image='/booking/maps/2.webp' title='UK Visa Medical Examination' description='We provide thorough medical assessments to meet UK visa requirements. Our team ensures your evaluation is completed efficiently and professionally.' aspectRatio='aspect-15/13' />
                    <div className='mt-[-200px]'>
                    <BookingCard image='/booking/maps/3.webp' title='US Visa Medical Examination' description='Our clinic conducts all necessary examinations for US visa applicants. You can trust us to guide you through the process smoothly and accurately.' aspectRatio='aspect-1/1' />
                    </div>

                </div>

            </div>

        </div>
    )
}




const BookingCard = ({ image, title, description, aspectRatio }: { image: string, title: string, description: string, aspectRatio: string }) => {
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-4'>
                <Image src={image} alt={title} width={430} height={504} className={`w-full h-[600px] object-contain ${aspectRatio}`} />
            </div>
            <div className='col-span-8 space-y-4 mt-[25%]'>
                <h1 className='text-[#00186B] text-[20px] font-weight-[500] leading-[56px]'>
                    {title}
                </h1>
                <p className='text-[#0B0A0B] text-[16px] font-weight-[400] leading-[24px] max-w-[80%]'>
                    {description}
                </p>
                <button className='bg-transparent border border-[#00186B] text-[#00186B] p-[24px] rounded-full'>
                    Book an appointment
                </button>
            </div>
        </div>
    )
}
