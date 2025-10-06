import React from 'react'
import Image from 'next/image'

export const WCHero = () => {
  return (
    <div className='py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-[48px] flex flex-col gap-10 md:gap-15'>
        <Section1 />
        <Section2 />
    </div>
  )
}



const Section1 = () => {
    return (

        <div className='border-b-[2px] border-[#FFF16F]'>
            <div className='flex flex-col gap-3 md:gap-4 w-full md:w-2/3 lg:w-1/2 pb-10 md:pb-20'>
                <h1 className='text-[#0B0A0B] font-weight-[500] ' >Services</h1>
                <p className='text-3xl md:text-4xl lg:text-[48px] font-weight-[400] leading-tight md:leading-[48px] lg:leading-[56px] font-hornbill text-[#00186B] ' >
                QLife Wellness Clinic.
                Proactive preventive care for a healthier, longer life and peace of mind.
                </p>
            </div>
        </div>

    )
}

const Section2 = () => {
    return (
        <div className='flex flex-col gap-8 md:gap-15'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
                <div className='md:col-span-4'>
                    <button className='bg-[#00186B] text-white py-3 px-6 md:p-[24px] rounded-full text-sm md:text-base'>
                      Book a Wellness Screening
                    </button>

                </div>
                <div className='md:col-span-8'>
                    <p className='text-[#222] text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                    We believe health is more than treating illness — it’s about preventing it. Our wellness services focus on early detection, risk assessment, and lifestyle guidance. With comprehensive screenings and personalized care, we help you stay ahead of potential health concerns.
                    </p>
                </div>
            </div>
            <div>
                <Image src='/services/wellnessclinic/1.webp' alt='Wellness Clinic' width={2000} height={2000} className='w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover border-b-[5px] md:border-b-[10px] border-[#FFF16F]' />
            </div>
        </div>
    )
}