import React from 'react'
import { Button } from '@/components/ui/button'

export const Section5 = () => {
    return (
        <div className='py-12 md:py-16 lg:py-[120px] px-4 md:px-8 lg:px-[48px] bg-[#FAFAFA]'>
            <div className='max-w-[1920px] mx-auto flex flex-col gap-8 md:gap-10'>
                <h1 className='text-[#0B0A0B] text-base md:text-lg lg:text-[20px] font-weight-[400] leading-tight md:leading-[40px] lg:leading-[56px]'>
                    Health Screening
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4'>
                    <div className='md:col-span-6'>
                        <div className='flex flex-col gap-3 md:gap-4'  data-fade-group>
                            <h1 className='text-[#00186B] text-2xl md:text-3xl lg:text-[40px] font-weight-[400] leading-tight md:leading-[44px] lg:leading-[56px]' data-fade-group-item>
                                The first step towards a healthy life is to schedule an appointment.
                            </h1>
                            <div className='flex justify-start' data-fade-group-item>
                                <Button className='py-3 px-6 md:p-[25px] rounded-[30px] '>
                                    Book an appointment
                                </Button>
                            </div>
                        </div>

                    </div>
                    <div className='md:col-span-6'>
                        <Section5Content />

                    </div>
                </div>
            </div>
        </div>
    )
}


const Section5Content = () => {
    return (
        <div className='flex flex-col gap-6 md:gap-8'>
            <div className='flex flex-col gap-3 md:gap-4'>

                <div className='flex flex-col gap-1'>
                    <h1 className='text-[#00186B] text-lg md:text-xl lg:text-[24px] font-weight-[400] leading-tight md:leading-[32px] lg:leading-[40px]'>
                        Clinic hours
                    </h1>
                    <p className='text-sm md:text-base'>
                        Our clinic is open Monday to Saturday, with flexible hours designed to fit your schedule.
                    </p>

                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-[#0B0A0B] text-base md:text-lg lg:text-[20px] font-weight-[500] leading-[24px]'>
                        Monday - Friday: 8:00am - 7:00pm
                    </p>
                    <p className='text-[#0B0A0B] text-base md:text-lg lg:text-[20px] font-weight-[500] leading-[24px]'>
                        Saturdays & Public Holidays: 8:00am - 4:00pm
                    </p>
                </div>

            </div>

            <div className='flex flex-col gap-3 md:gap-4'>

                <div className='flex flex-col gap-1'>
                    <h1 className='text-[#00186B] text-lg md:text-xl lg:text-[24px] font-weight-[400] leading-tight md:leading-[32px] lg:leading-[40px]'>
                        Connect with us
                    </h1>
                    <p className='text-sm md:text-base'>
                        Speak to us directly or send us a message. We’re always happy to assist you.
                    </p>

                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-[#0B0A0B] text-base md:text-lg lg:text-[20px] font-weight-[500] leading-[24px]'>
                        +234 (0) 809 974 2000
                    </p>
                    <p className='text-[#0B0A0B] text-base md:text-lg lg:text-[20px] font-weight-[500] leading-[24px]'>
                        +234 (0) 81139 QLIFE (0811 397 5433)
                    </p>
                </div>


                <h1 className='text-[#0B0A0B] text-sm md:text-base lg:text-[16px] font-weight-[500] leading-[24px]'>
                customercare@qlifefamilyclinic.com
                </h1>

            </div>
        </div>
    )
}
