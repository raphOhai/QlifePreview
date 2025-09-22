import React from 'react'
import { Button } from '@/components/ui/button'

export const Section5 = () => {
    return (
        <div className='py-[120px] px-[48px] bg-[#FAFAFA] flex flex-col gap-10'>

            <h1 className='text-[#0B0A0B] text-[20px] font-weight-[400] leading-[56px]'>
                Health Screening
            </h1>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                    <div className='flex flex-col gap-4'  data-fade-group>
                        <h1 className='text-[#00186B] text-[40px] font-weight-[400] leading-[56px]' data-fade-group-item>
                            The first step towards a healthy life is to schedule an appointment.
                        </h1>
                        <div className='flex justify-start' data-fade-group-item>
                            <Button className='p-[25px] rounded-[30px] '>
                                Book an appointment
                            </Button>
                        </div>
                    </div>

                </div>
                <div className='col-span-6'>
                    <Section5Content />

                </div>
            </div>

            
        </div>
    )
}


const Section5Content = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-4'>

                <div className='flex flex-col gap-1'>
                    <h1 className='text-[#00186B] text-[24px] font-weight-[400] leading-[56px]'>
                        Clinic hours
                    </h1>
                    <p>
                        Our clinic is open Monday to Saturday, with flexible hours designed to fit your schedule.
                    </p>

                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-[#0B0A0B] text-[20px] font-weight-[500] leading-[24px]'>
                        Monday - Friday: 8:00am - 7:00pm
                    </p>
                    <p className='text-[#0B0A0B] text-[20px] font-weight-[500] leading-[24px]'>
                        Saturdays & Public Holidays: 8:00am - 4:00pm
                    </p>
                </div>

            </div>

            <div className='flex flex-col gap-4'>

                <div className='flex flex-col gap-1'>
                    <h1 className='text-[#00186B] text-[24px] font-weight-[400] leading-[56px]'>
                        Connect with us
                    </h1>
                    <p>
                        Speak to us directly or send us a message. We’re always happy to assist you.
                    </p>

                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-[#0B0A0B] text-[20px] font-weight-[500] leading-[24px]'>
                        +234 (0) 809 974 2000
                    </p>
                    <p className='text-[#0B0A0B] text-[20px] font-weight-[500] leading-[24px]'>
                        +234 (0) 81139 QLIFE (0811 397 5433)
                    </p>
                </div>


                <h1 className='text-[#0B0A0B] text-[16px] font-weight-[500] leading-[24px]'>
                customercare@qlifefamilyclinic.com
                </h1>

            </div>
        </div>
    )
}
