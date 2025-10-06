import { CalendarRange } from '@/components/customCallenderRange'
import React from 'react'
import { useBookingStore } from '@/store/bookingStore'

export const BFSteps2 = () => {
    const { dateRange, setDateRange } = useBookingStore()

    return (
        <div className='space-y-6 md:space-y-8 lg:space-y-10'>
            <h1 className='text-xl md:text-2xl lg:text-[24px] font-weight-[500] leading-tight md:leading-[52px] text-[#00186B] font-hornbill'>
                Screening Appointment Booking
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10'>
                <div className='lg:col-span-4'>
                    <BasicInfo />
                </div>
                <div className='lg:col-span-5'>
                    <div className='space-y-4 md:space-y-6'>
                        <div className='space-y-2'>
                            <h2 className='text-base md:text-lg lg:text-[18px] font-weight-[500] text-[#0B0A0B]'>
                                Select Date & Time
                            </h2>
                            <div className='flex flex-row gap-1'>
                                <h1 className='text-xs md:text-sm lg:text-[14px] font-weight-[500] text-[#0B0A0B]'>
                                    Time zone:
                                </h1>
                                <p className='text-xs md:text-sm lg:text-[14px] text-[#00186B]'>
                                    Lagos/Nigeria
                                </p>
                            </div>
                        </div>

                        <div className='w-full overflow-x-auto'>
                            <CalendarRange
                                mode="range"
                                defaultMonth={new Date()}
                                numberOfMonths={window.innerWidth < 768 ? 1 : 2}
                                selected={dateRange}
                                onSelect={setDateRange}
                                className="rounded-lg border shadow-sm"
                                disabled={(date) => date < new Date()}
                            />
                        </div>
                    </div>
                </div>

                <div className='lg:col-span-3'>
                    <TimeOfDaySelect />
                </div>
            </div>
        </div>
    )
}



const TimeOfDaySelect = () => {
    const TimeBox = ({ time }: { time: string }) => {
        return (
            <div className='flex flex-row gap-1 border-[1px] border-[#B8B8B8] p-2 md:p-[5px] items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors'>
                <h1 className='text-base md:text-lg lg:text-[20px] font-weight-[500] text-[#0B0A0B]'>
                    {time}
                </h1>
            </div>
        )
    }
    return (
        <div className='space-y-3 md:space-y-4'>
            <h1 className='text-sm md:text-[14px] font-weight-[500] text-[#0B0A0B]'>
                Time of day:
            </h1>

            <div className='grid grid-cols-2 lg:grid-cols-1 gap-2'>
                <TimeBox time='8:00 AM' />
                <TimeBox time='9:00 AM' />
                <TimeBox time='10:00 AM' />
                <TimeBox time='11:00 AM' />
                <TimeBox time='12:00 PM' />
                <TimeBox time='1:00 PM' />
                <TimeBox time='2:00 PM' />
            </div>
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


                <p className='text-[18px] font-weight-[400] leading-[24px] text-[#0B0A0B]'>
                    Note: Remember to bring in all the required documentation for all the screening applicants on your appointment  date.
                </p>

                <p className='text-[18px] font-weight-[400] leading-[24px] text-[#0B0A0B]'>
                    New slots available on Tuesdays and Thursdays at 9am and 3pm respectively.
                </p>

            </div>
        </div>
    )
}
