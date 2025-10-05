'use client'

import React from 'react'
import Image from 'next/image'
import { BFStep1 } from './steps/BFStep1'
import { useBookingStore } from '@/store/bookingStore'
import { BFSteps2 } from './steps/BFSteps2'
import { BFStep3 } from './steps/BFStep3'
    
export const BFHero = () => {
    return (
        <div className='space-y-10'>
            <div className='py-[96px] px-[48px] space-y-15'>
                <div className='space-y-10 max-w-[80%] mx-auto'>
                    <h1 className='text-[20px] font-weight-[500] leading-[52px]  max-w-[80%]'>Services</h1>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-6'>
                            <h2 className='text-[48px] font-weight-[400] leading-[56px] font-hornbill text-[#0B0A0B]'>
                                United Kingdom Immigration Health Screening
                            </h2>
                        </div>
                        <div className='col-span-6 flex items-end'>
                            <p className='text-[16px] font-weight-[400] leading-[24px]'>
                                Ready to book your appointment? Simply choose the desired service from the options below, indicate your preferred booking date, and our team will promptly reach out to confirm your appointment.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <Image src='/booking/1.webp' alt='Booking' width={2000} height={2000} className='w-full h-[800px] object-cover border-b-[10px] border-[#FFF16F]' />
                </div>
            </div>
            <Steps />
        </div>

    )
}


const Steps = () => {
    const { bookingStep } = useBookingStore()
    return (
        <div className='py-[96px] px-[20git px]'>
            <div className='max-w-[1200px] mx-auto'>
                {bookingStep === 1 && <BFStep1 />}
                {bookingStep === 2 && <BFSteps2 />}
                {bookingStep === 3 && <BFStep3 />}
            </div>

        </div>
    )
}
