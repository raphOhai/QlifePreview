import React from 'react'
import Image from 'next/image'

export const TCHero = () => {
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
                <h1 className='text-[#0B0A0B] font-weight-[500] ' >Services</h1>
                <p className='text-[48px] font-weight-[400] leading-[56px] font-hornbill text-[#00186B] ' >
                    QLife Travel Clinic.
                    Your trusted partner for healthy and safe global travel.
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
                        Book Your Travel Consultation
                    </button>

                </div>
                <div className='col-span-8'>
                    <p className='text-[#222] text-[16px] font-weight-[400] leading-[24px]'>
                        Traveling is exciting, but your health should always come first. At QLife Travel Clinic, we provide expert advice, vaccinations, and preventive care to keep you safe on every journey. Our goal is to ensure you travel confidently, with the right protection tailored to your destination and needs.
                    </p>
                </div>
            </div>
            <div>
                <Image src='/services/travelclinic/1.webp' alt='Travel Clinic' width={2000} height={2000} className='w-full h-[550px] object-cover border-b-[10px] border-[#FFF16F]' />
            </div>
        </div>
    )
}