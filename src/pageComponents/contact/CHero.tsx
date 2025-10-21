import React from 'react'
import Image from 'next/image'

export const CHero = () => {
    return (
        <div className='space-y-8 md:space-y-10 py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-[48px] '>
            <h1 className='text-base md:text-lg'>
                Contact Us
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10'>
                <div className='md:col-span-6'>
                    <h1 className='text-3xl md:text-4xl lg:text-[48px] font-weight-[400] leading-tight md:leading-[48px] lg:leading-[56px] font-hornbill text-[#00186B]'>
                        Connecting you to quality care when you need us most.
                    </h1>
                </div>
                <div className='md:col-span-6'>
                    <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                        Whether you’re booking a visit, asking about services, or arranging an immigration medical exam, our team is here to help.
                    </p>
                </div>
            </div>

            <div className=''>
                <Image src='/contact/1.webp' alt='eQonsult' width={2000} height={2000} className='w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover border-b-[5px] md:border-b-[10px] border-[#FFF16F]' />
            </div>
        </div>
    )
}
