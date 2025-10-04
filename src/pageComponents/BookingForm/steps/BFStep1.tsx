'use client'
import React from 'react'
import { RootCopy } from './components/RootCopy'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useBookingStore } from '@/store/bookingStore'

export const BFStep1 = () => {
    return (
        <div className='space-y-10 grid grid-cols-12 gap-10'>
            <div className='col-span-6'>
                <RootCopy />
            </div>
            <div className='col-span-6'>
                <BFStep1Form />

            </div>
        </div>
    )
}


const BFStep1Form = () => {
    return (
        <div className='space-y-10'>
            <h1 className='text-[16px] font-weight-[400] leading-[24px] text-[#707070] pb-10 border-b-[1px] border-[#707070]'>Appointment times will vary based on the requirements of the country you are travelling to, but rest assured that we will dedicate enough time to suit your personal needs.</h1>


            <div className='space-y-10'>
                <div className='space-y-0'>
                    <p className='text-[14px] font-weight-[500] leading-[24px] text-[#222]'>
                        Patient’s name
                    </p>
                    <p className='text-[14px] font-weight-[400] leading-[24px] text-[#757575]'>
                        Your name as it is written on your government issued identity document
                    </p>
                    <Input />
                </div>


                <div className='space-y-0'>
                    <p className='text-[14px] font-weight-[500] leading-[24px] text-[#222]'>
                        Email address
                    </p>
                    <Input />
                </div>


                <div className='space-y-0'>
                    <p className='text-[14px] font-weight-[500] leading-[24px] text-[#222]'>
                        Phone number
                    </p>

                    <Input />
                </div>
                <div className='space-y-0'>
                    <p className='text-[14px] font-weight-[500] leading-[24px] text-[#222]'>
                        Current state of residence
                    </p>

                    <Input />
                </div>


                <div className='space-y-0'>
                    <p className='text-[14px] font-weight-[500] leading-[24px] text-[#222]'>
                        Select number of applicants
                    </p>
                    <Input />
                </div>


                <Button
                    onClick={() => useBookingStore.getState().setBookingStep(2)}
                    type="submit"
                    className='bg-[#00186B] text-white p-[24px] rounded-[6px] w-full hover:bg-[#00186B]/90'
                >
                    Submit
                </Button>

            </div>
        </div>
    )
}