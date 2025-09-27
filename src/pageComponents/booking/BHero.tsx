import React from 'react'
import Image from 'next/image'

export const BHero = () => {
    return (
        <div className='py-[96px] px-[48px] space-y-15'>
            <h1 className='text-[20px] font-weight-[500] leading-[52px]  max-w-[80%]'>Booking</h1>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                    <h2 className='text-[48px] font-weight-[400] leading-[56px] font-hornbill text-[#00186B]'>
                        Health Screening.
                        Proactive care for a healthier, longer life and peace of mind always.
                    </h2>
                </div>
                <div className='col-span-6 flex items-end'>
                    <p className='text-[16px] font-weight-[400] leading-[24px]'>
                        Our health screenings are designed to evaluate your body thoroughly, helping identify potential risks before they become problems. By understanding your health today, we empower you to make informed decisions for a healthier tomorrow.
                    </p>
                </div>
            </div>

            <div className=''>
                <Image src='/booking/1.webp' alt='Booking' width={2000} height={2000} className='w-full h-[800px] object-cover border-b-[10px] border-[#FFF16F]' />
            </div>
        </div>
    )
}
