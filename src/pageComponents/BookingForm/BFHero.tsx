'use client'

import React from 'react'
import Image from 'next/image'
import { BFStep1 } from './steps/BFStep1'
import { useBookingStore } from '@/store/bookingStore'
import { BFSteps2 } from './steps/BFSteps2'
import { BFStep3 } from './steps/BFStep3'
    
export const BFHero = () => {
    return (
        <div className='space-y-4 md:space-y-4 lg:space-y-4'>
            <div className='py-12 md:py-16 lg:py-[8px] px-4 md:px-8 lg:px-[48px] space-y-8 md:space-y-12 lg:space-y-15'>
                <div className='space-y-6 md:space-y-8 lg:space-y-10 w-full md:max-w-[90%] lg:max-w-[80%] mx-auto'>
                    <h1 className='text-base md:text-lg lg:text-[20px] font-weight-[500] leading-normal md:leading-[52px] w-full md:max-w-[80%]'>Services</h1>
                    <div className='grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4'>
                        <div className='md:col-span-6'>
                            <h2 className='text-2xl md:text-3xl lg:text-[48px] font-weight-[400] leading-tight lg:leading-[56px] font-hornbill text-[#0B0A0B]'>
                                United Kingdom Immigration Health Screening
                            </h2>
                        </div>
                        <div className='md:col-span-6 flex items-start md:items-end'>
                            <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                                Ready to book your appointment? Simply choose the desired service from the options below, indicate your preferred booking date, and our team will promptly reach out to confirm your appointment.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src='/booking/1.webp' alt='Booking' width={2000} height={2000} className='w-full h-[400px] md:h-[600px] lg:h-[800px] object-cover border-b-[5px] md:border-b-[10px] border-[#FFF16F]' />
                </div>
            </div>
            <Steps />
        </div>
    )
}


const Steps = () => {
    const { bookingStep } = useBookingStore()
    return (
        <div className='py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-[48px]'>
            <div className='max-w-[1200px] mx-auto'>
                {bookingStep === 1 && <BFStep1 />}
                {bookingStep === 2 && <BFSteps2 />}
                {bookingStep === 3 && <BFStep3 />}
            </div>
        </div>
    )
}
