import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import React from 'react'


export const BFStep3 = () => {
    return (
        <div className='space-y-10'>

            <h1 className='text-[24px] font-weight-[500] leading-[52px] text-[#00186B] font-hornbill'>
                Screening Appointment Booking
            </h1>
            <div className='space-y-10 grid grid-cols-12 gap-10'>

                <div className='col-span-6'>
                    <BasicInfo />
                </div>
                <div className='col-span-6'>
                    <ApplicantForm />
                </div>
            </div>
        </div>
    )
}


const ApplicantForm = () => {
    return (
        <div className='space-y-5'>
            <div className='space-y-1'>
                <p className='text-[14px] font-weight-[400] leading-[24px] text-[#757575]'>
                    Appointment Date
                </p>
                <h1 className='text-[20px] font-weight-[500] leading-[24px] text-[#0B0A0B]'>
                    Wednesday July 23, 2025 at 2:00 pm
                </h1>
            </div>

            <div className='space-y-1'>
                <p className='text-[14px] font-weight-[400] leading-[24px] text-[#757575]'>
                    Booking reference number
                </p>
                <h1 className='text-[20px] font-weight-[500] leading-[24px] text-[#0B0A0B]'>
                    UKIMSCR202508-MWNT2O7F
                </h1>
            </div>

            <div className='space-y-1'>
                <p className='text-[14px] font-weight-[400] leading-[24px] text-[#757575]'>
                    Amount Due
                </p>
                <h1 className='text-[20px] font-weight-[500] leading-[24px] text-[#0B0A0B]'>
                    ₦ 130,500
                </h1>
            </div>

            <p className='text-[16px] font-weight-[400] leading-[24px] text-[#0B0A0B]'>
                Your booked slot will only be reserved for 1hr. You are expected to complete the application and make payment within the time frame otherwise the slot will be cancelled.
            </p>


            <div className='space-y-1'>
                <h1 className='text-[14px] font-weight-[500] leading-[24px] text-[#0B0A0B]'>
                    Applicant’s name
                </h1>
                <p className='text-[14px] font-weight-[400] leading-[24px] text-[#757575]'>
                    Applicant’s name as it is written on their international passport/travel document
                </p>
                <Input />
            </div>



            <div className='space-y-1'>
                <h1 className='text-[14px] font-weight-[500] leading-[24px] text-[#0B0A0B]'>
                    Date of Birth
                </h1>
                <Input />
            </div>


            <div className='space-y-6'>
                <p className='text-[14px] font-weight-[500] leading-[24px] text-[#222]'>
                    Sex
                </p>

                <RadioGroup defaultValue="male" className="flex flex-row gap-6">
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="male" id="r1" />
                        <Label htmlFor="r1">Male</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="female" id="r2" />
                        <Label htmlFor="r2">Female</Label>
                    </div>
                </RadioGroup>

            </div>



            <Button
                type="submit"
                className='bg-[#00186B] text-white p-[24px] rounded-[6px] w-full hover:bg-[#00186B]/90'
            >
                Submit Request
            </Button>       

        </div>
    )
}

const BasicInfo = () => {
    return (
        <div className='space-y-10'>
            <div className='space-y-5'>
                <h1 className='text-[20px] font-weight-[500] leading-[52px]'>
                    Booking details
                </h1>

                <div className='flex flex-row gap-1'>
                    <h1 className='text-[16px] font-weight-[500] leading-[24px] text-[#0B0A0B]'>
                        Full name:
                    </h1>
                    <p className='text-[16px] font-weight-[400] leading-[24px] text-[#707070]'>
                        Chioma Okafor
                    </p>
                </div>


                <div className='flex flex-row gap-1'>
                    <h1 className='text-[16px] font-weight-[500] leading-[24px] text-[#0B0A0B]'>
                        Email address:
                    </h1>
                    <p className='text-[16px] font-weight-[400] leading-[24px] text-[#707070]'>
                        Chioma Okafor
                    </p>
                </div>

                <div className='flex flex-row gap-1'>
                    <h1 className='text-[16px] font-weight-[500] leading-[24px] text-[#0B0A0B]'>
                        Current state of residence:
                    </h1>
                    <p className='text-[16px] font-weight-[400] leading-[24px] text-[#707070]'>
                        Chioma Okafor
                    </p>
                </div>

                <div className='flex flex-row gap-1'>
                    <h1 className='text-[16px] font-weight-[500] leading-[24px] text-[#0B0A0B]'>
                        Applicants details:
                    </h1>
                    <p className='text-[16px] font-weight-[400] leading-[24px] text-[#707070]'>
                        Chioma Okafor
                    </p>
                </div>


                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-6'>
                        <ApplicantsInfo />
                    </div>
                    <div className='col-span-6'>
                        <ApplicantsInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}




const ApplicantsInfo = () => {
    return (
        <div className='space-y-4 p-[24px] bg-[#F3F8FE] border border-[#C5E4F6] rounded-none'>
            <h1 className='text-[12px] font-weight-[500] leading-[24px] text-[#707070]'>
                APPLICANT 1
            </h1>
            <div className='space-y-2'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-6'>
                        <h1 className='text-[16px] font-weight-[500] leading-[24px] text-[#0B0A0B]'>
                            Full  Name:
                        </h1>
                    </div>
                    <div className='col-span-6'></div>
                </div>

                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-6'>
                        <h1 className='text-[16px] font-weight-[500] leading-[24px] text-[#0B0A0B]'>
                            Date of birth:
                        </h1>
                    </div>
                    <div className='col-span-6'></div>
                </div>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-6'>
                        <h1 className='text-[16px] font-weight-[500] leading-[24px] text-[#0B0A0B]'>
                            Gender:
                        </h1>
                    </div>
                    <div className='col-span-6'></div>
                </div>
            </div>
        </div>
    )
}