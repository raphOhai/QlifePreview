import React from 'react'
import Image from 'next/image'

export const BHero = () => {
    return (
        <div className='py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-[48px] space-y-8 md:space-y-12 lg:space-y-15 pb-8 md:pb-10 lg:pb-16'>
            <h1 className='text-base md:text-lg lg:text-[20px] font-weight-[500] leading-normal md:leading-[52px]  w-full md:max-w-[80%]'>Booking</h1>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
                <div className='md:col-span-6'>
                    <h2 className='text-3xl md:text-4xl lg:text-[48px] font-weight-[400] leading-tight md:leading-[48px] lg:leading-[56px] font-hornbill text-[#00186B]'>
                        Health Screening.
                        Proactive care for a healthier, longer life and peace of mind always.
                    </h2>
                </div>
                <div className='md:col-span-6 flex items-start md:items-end'>
                    <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                        Our health screenings are designed to evaluate your body thoroughly, helping identify potential risks before they become problems. By understanding your health today, we empower you to make informed decisions for a healthier tomorrow.
                    </p>
                </div>
            </div>

            <div className=''>
                <Image src='/booking/1.webp' alt='Booking' width={2000} height={2000} className='w-full h-[400px] md:h-[600px] lg:h-[800px] object-cover border-b-[5px] md:border-b-[10px] border-[#FFF16F]' />
            </div>
        </div>
    )
}
