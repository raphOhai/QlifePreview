import React from 'react'
import Image from 'next/image'

export const CHero = () => {
    return (

        <div className='py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-[48px] space-y-8 md:space-y-10'>
            <div className=' space-y-3 md:space-y-4 w-full md:w-2/3 lg:w-1/2'>
                <h1 className='text-base md:text-lg lg:text-[20px] font-weight-[400] leading-[24px]'>
                    Careers
                </h1>

                <h2 className='text-3xl md:text-4xl lg:text-[48px] font-weight-[400] leading-tight md:leading-[48px] lg:leading-[56px] font-hornbill text-[#00186B] '>
                    Join a dedicated healthcare team shaping lives through compassion and professionalism.
                </h2>

                <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                    At Q-Life Family Clinic, we believe our people are our greatest strength. Every role is valued, and every individual contributes to our mission of delivering global-standard healthcare in a compassionate, patient-centered environment. By investing in training, education, and professional growth, we ensure our staff thrive while making a lasting impact on the lives of our patients.
                </p>
            </div>

            <div className=''>
                <Image src='/careers/1.webp' alt='Careers' width={2000} height={2000} className='w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover border-b-[5px] md:border-b-[10px] border-[#FFF16F]' />
            </div>

        </div>

    )
}
