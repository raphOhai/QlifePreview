import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export const ApointmentRoot = () => {
    return (
        <div className='space-y-10 py-[96px] px-[48px]'>
            <ApointmentCopy />
            <ApointmentFormX />
        </div>
    )
}


const ApointmentCopy = () => {
    return (
        <div className='space-y-10 w-1/2'>
            <h1 className='text-[24px] font-weight-[400] leading-[32px] '>
                Appointments
            </h1>

            <h2 className='text-[40px] font-weight-[400] leading-[52px] text-[#00186B] font-hornbill'>
                Start your appointment booking here
            </h2>
            <div className='space-y-4'>
                <p className='text-[20px] font-weight-[400] leading-[24px] text-[#00186B]'>
                    Schedule your appointment today
                </p>
                <p className='text-[16px] font-weight-[400] leading-[24px] text-[#222]'>
                    To begin your appointment request, please answer a few basic questions. A coordinator will then contact you to discuss your needs. As a private clinic, we accept self-pay patients, individuals with private medical insurance and corporate patients
                </p>

            </div>
        </div>
    )
}



const ApointmentFormX = () => {
    return (
        <div className='grid grid-cols-12 gap-10'>
            <div className='col-span-6'>
                <AppointmentForm />
            </div>
            <div className='col-span-6'>
                <ContactCopy />
            </div>
        </div>
    )
}


const AppointmentForm = () => {


    const SexRadioGroup = () => {
        return (
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

        )
    }

    const Checkbook = ({ label }: { label: string }) => {
        return (
            <div className='space-y-0 border border-[#E0E0E0] bg-[#FAFAFA] p-[16px] flex items-center gap-3 '>
                <Checkbox
                    id="toggle-2"
                    className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                />

                <p className='text-[16px] font-weight-[500] leading-[24px] text-[#757575]'>
                    {label}
                </p>
            </div>
        )

    }
    return (
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
                    Patient’s birthdate
                </p>

                <Input />
            </div>


            <div className='space-y-0'>
                <p className='text-[14px] font-weight-[500] leading-[24px] text-[#222]'>
                    Requester name and relation if not patient
                </p>

                <Input />
            </div>

            <SexRadioGroup />

            <div className='space-y-0'>
                <p className='text-[14px] font-weight-[500] leading-[24px] text-[#222]'>
                    Phone number
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
                    Appointment date
                </p>

                <Input />
            </div>

            <div className='space-y-0'>
                <p className='text-[14px] font-weight-[500] leading-[24px] text-[#222]'>
                    Appointment time
                </p>

                <Input />
            </div>


            <div className='space-y-3'>
                <div className='space-y-0'>
                    <p className='text-[14px] font-weight-[500] leading-[24px] text-[#222]'>
                        What type of appointment are you seeking at QLife Family Clinic
                    </p>
                    <p className='text-[14px] font-weight-[400] leading-[24px] text-[#757575]'>
                        Select all that apply
                    </p>

                </div>

                <Checkbook label='General Clinic' />
                <Checkbook label='Travel Clinic' />
                <Checkbook label='Wellness Clinic' />
            </div>


            {/* 
            <div className='space-y-2'>
                <p className='text-[14px] font-weight-[500] leading-[24px] text-[#222]'>
                Please tell us the reason for your request
                </p>

                <Textarea rows={10} className='rounded-none' />
            </div> */}

            <Button
                type="submit"
                className='bg-[#00186B] text-white p-[24px] rounded-[6px] w-full hover:bg-[#00186B]/90'
            >
                Submit Request
            </Button>
        </div>
    )
}




const ContactCopy = () => {


    return (

        <div className='space-y-10 max-w-[80%]'>
            <div className='space-y-3'>
                <h1 className='text-[24px] font-weight-[400] leading-[32px] text-[#00186B]'>
                    Clinic Hours
                </h1>
                <p className='text-[16px] font-weight-[400] leading-[24px] text-[#222]'>
                    Our clinic is open Monday to Saturday, with flexible hours designed to fit your schedule.
                </p>
                <div className='space-y-0'>

                    <h1 className='text-[20px] font-weight-[400] leading-[24px] text-[#222]'>
                        Monday - Friday: 8:00am - 7:00pm
                    </h1>
                    <h1 className='text-[20px] font-weight-[400] leading-[24px] text-[#222]'>
                        Saturdays & Public Holidays: 8:00am - 4:00pm
                    </h1>

                </div>
            </div>


            <div className='space-y-3'>
                <h1 className='text-[24px] font-weight-[400] leading-[32px] text-[#00186B]'>
                    Our Location
                </h1>
                <p className='text-[16px] font-weight-[400] leading-[24px] text-[#222]'>
                    We are conveniently located and easily accessible for patients across the city.
                </p>
                <div className='space-y-4'>

                    <h1 className='text-[20px] font-weight-[400] leading-[24px] text-[#222] max-w-[70%]'>
                        155A Prince Ade Odedina Street,
                        Off Sinari Daranijo, Victoria Island 101244,
                        Lagos, Nigeria
                    </h1>


                </div>

                <p className='text-[16px] font-weight-[400] leading-[24px] text-[#707070]'>
                    Access Ajose Adeogun from Eko Hotel round about, make a second right turn onto Younis Bashorun (by Haliburton after Zenith Bank HQ) then a second left unto Sinari Daranijo. Prince Ade Odedina is the first street on the right. We are at 155A Prince Ade Odedina Street.
                </p>
            </div>


            <div className='space-y-3'>
                <h1 className='text-[24px] font-weight-[400] leading-[32px] text-[#00186B]'>
                    Email Us
                </h1>
                <p className='text-[16px] font-weight-[400] leading-[24px] text-[#222]'>
                    Send us a message and our team will respond promptly to your inquiry.
                </p>
                <div className='space-y-4'>

                    <h1 className='text-[20px] font-weight-[400] leading-[24px] text-[#222]'>
                        customercare@qlifefamilyclinic.com
                    </h1>
                    {/* <h1 className='text-[20px] font-weight-[400] leading-[24px] text-[#222]'>
                        Saturdays & Public Holidays: 8:00am - 4:00pm
                    </h1> */}

                </div>
            </div>



            <div className='space-y-3'>
                <h1 className='text-[24px] font-weight-[400] leading-[32px] text-[#00186B]'>
                    Call us
                </h1>
                <p className='text-[16px] font-weight-[400] leading-[24px] text-[#222]'>
                    Speak directly with our front desk. We’re always happy to assist you.
                </p>
                <div className='space-y-0'>

                    <h1 className='text-[20px] font-weight-[400] leading-[24px] text-[#222]'>
                        +234 (0) 809 974 2000
                    </h1>
                    <h1 className='text-[20px] font-weight-[400] leading-[24px] text-[#222]'>
                        +234 (0) 81139 QLIFE (0811 397 5433)
                    </h1>

                </div>
            </div>



        </div>

    )
}