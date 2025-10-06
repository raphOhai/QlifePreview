'use client'
import React from 'react'
import { RootCopy } from './components/RootCopy'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useBookingStore } from '@/store/bookingStore'

export const BFStep1 = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10'>
            <div className='md:col-span-6'>
                <RootCopy />
            </div>
            <div className='md:col-span-6'>
                <BFStep1Form />
            </div>
        </div>
    )
}


const BFStep1Form = () => {
    return (
        <div className='space-y-6 md:space-y-8 lg:space-y-10'>
            <h1 className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px] text-[#707070] pb-6 md:pb-8 lg:pb-10 border-b-[1px] border-[#707070]'>
                Appointment times will vary based on the requirements of the country you are travelling to, but rest assured that we will dedicate enough time to suit your personal needs.
            </h1>

            <div className='space-y-6 md:space-y-8 lg:space-y-10'>
                <div className='space-y-1 md:space-y-2'>
                    <p className='text-sm md:text-[14px] font-weight-[500] leading-relaxed lg:leading-[24px] text-[#222]'>
                        Patient&apos;s name
                    </p>
                    <p className='text-xs md:text-[14px] font-weight-[400] leading-relaxed lg:leading-[24px] text-[#757575]'>
                        Your name as it is written on your government issued identity document
                    </p>
                    <Input className='mt-2' />
                </div>

                <div className='space-y-1 md:space-y-2'>
                    <p className='text-sm md:text-[14px] font-weight-[500] leading-relaxed lg:leading-[24px] text-[#222]'>
                        Email address
                    </p>
                    <Input className='mt-2' />
                </div>

                <div className='space-y-1 md:space-y-2'>
                    <p className='text-sm md:text-[14px] font-weight-[500] leading-relaxed lg:leading-[24px] text-[#222]'>
                        Phone number
                    </p>
                    <Input className='mt-2' />
                </div>

                <div className='space-y-1 md:space-y-2'>
                    <p className='text-sm md:text-[14px] font-weight-[500] leading-relaxed lg:leading-[24px] text-[#222]'>
                        Current state of residence
                    </p>
                    <Input className='mt-2' />
                </div>

                <div className='space-y-1 md:space-y-2'>
                    <p className='text-sm md:text-[14px] font-weight-[500] leading-relaxed lg:leading-[24px] text-[#222]'>
                        Select number of applicants
                    </p>
                    <Input className='mt-2' />
                </div>

                <Button
                    onClick={() => useBookingStore.getState().setBookingStep(2)}
                    type="submit"
                    className='bg-[#00186B] text-white py-4 md:py-5 lg:p-[24px] rounded-[6px] w-full hover:bg-[#00186B]/90 text-sm md:text-base'
                >
                    Submit
                </Button>
            </div>
        </div>
    )
}