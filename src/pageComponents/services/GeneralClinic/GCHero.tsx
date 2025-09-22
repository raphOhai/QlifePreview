    
    'use client'
import React from 'react'
import Image from 'next/image'

export const GCHero = () => {

    return (  
        <div className='py-[96px] px-[48px] flex flex-col gap-15'>
            <Section1 />
            <Section2 />
        </div>
    )
}


const Section1 = () => {
    return (

        <div className='border-b-[2px] border-[#FFF16F]'>
            <div className='flex flex-col gap-4 w-1/2 pb-20'>
                <h1 className='text-[#0B0A0B] font-weight-[500] ' data-animation="h">Services</h1>
                <p className='text-[48px] font-weight-[400] leading-[56px] font-hornbill text-[#00186B] ' data-animation="bounce" data-split="false">
                    QLife General Clinic.
                    Comprehensive care safeguarding your everyday medical needs.
                </p>
            </div>
        </div>

    )
}

const Section2 = () => {
    return (
        <div className='flex flex-col gap-15'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-4'>
                    <button className='bg-[#00186B] text-white p-[24px] rounded-full'>
                        Book an Appointment
                    </button>

                </div>
                <div className='col-span-8'>
                    <p className='text-[#222] text-[16px] font-weight-[400] leading-[24px]'>
                        We provide accessible, high-quality healthcare for individuals and families. From routine check-ups to specialized consultations, our goal is to keep you healthy and well-informed. Our integrated services ensure your care is continuous, coordinated, and compassionate.
                    </p>

                </div>

            </div>

            <div>
                <Image src='/services/generalclinic/1.webp' alt='General Clinic' width={2000} height={2000} className='w-full h-[550px] object-cover border-b-[10px] border-[#FFF16F]' />
            </div>
        </div>
    )
}

