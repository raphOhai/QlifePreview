    
    'use client'
import React from 'react'
import Image from 'next/image'

export const GCHero = () => {

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
            <div className='flex flex-col gap-3 md:gap-4 w-full md:w-2/3 lg:w-[70%] pb-10 md:pb-20'>
                <h1 className='text-[#0B0A0B] font-weight-[500] '>Services</h1>
                <p className='text-3xl md:text-4xl lg:text-[48px] font-weight-[400] leading-tight md:leading-[48px] lg:leading-[56px] font-hornbill text-[#00186B] ' >
                    QLife General Clinic.
                    Comprehensive care safeguarding your everyday medical needs.
                </p>
            </div>
        </div>

    )
}

const Section2 = () => {
    return (
        <div className='flex flex-col gap-8 md:gap-15'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
           
                <div className='md:col-span-8'>
                    <p className='text-[#222] text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                        We provide accessible, high-quality healthcare for individuals and families. From routine check-ups to specialized consultations, our goal is to keep you healthy and well-informed. Our integrated services ensure your care is continuous, coordinated, and compassionate.
                    </p>
                </div>

                <div className='md:col-span-4'>
                    <button className='bg-[#00186B] text-white py-3 px-6 md:p-[24px] rounded-full text-sm md:text-base'>
                        Book an Appointment
                    </button>

                </div>
            </div>

            <div>
                <Image src='/services/generalclinic/1.webp' alt='General Clinic' width={2000} height={2000} className='w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover border-b-[5px] md:border-b-[10px] border-[#FFF16F]' />
            </div>
        </div>
    )
}

