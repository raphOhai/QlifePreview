import React from 'react'
import Image from 'next/image'

export const CHero = () => {
    return (

        <div className='py-[96px] px-[48px] space-y-10'>
            <div className=' space-y-4 w-1/2'>
                <h1 className='text-[20px] font-weight-[400] leading-[24px]'>
                    Careers
                </h1>

                <h2 className='text-[48px] font-weight-[400] leading-[56px] font-hornbill text-[#00186B] '>
                    Join a dedicated healthcare team shaping lives through compassion and professionalism.
                </h2>

                <p className='text-[16px] font-weight-[400] leading-[24px]'>
                    At Q-Life Family Clinic, we believe our people are our greatest strength. Every role is valued, and every individual contributes to our mission of delivering global-standard healthcare in a compassionate, patient-centered environment. By investing in training, education, and professional growth, we ensure our staff thrive while making a lasting impact on the lives of our patients.
                </p>
            </div>

            <div className=''>
                <Image src='/careers/1.webp' alt='Careers' width={2000} height={2000} className='w-full h-[550px] object-cover border-b-[10px] border-[#FFF16F]' />
            </div>

        </div>

    )
}
