import { ArrowRight, ArrowRightIcon } from 'lucide-react'
import React from 'react'

export const ClinicCTA = ({withButton = false}: {withButton?: boolean}) => {
    return (
        <div className='grid grid-cols-12 gap-4 py-[120px] px-[48px]'>
            <div className='col-span-6 space-y-10'>
                <h1 className='text-[40px] font-weight-[500] leading-[52px] text-[#00186B] max-w-[80%]'>Stay Protected, Stay Healthy. Prevention is the first step to lasting health</h1>

                {withButton && (
                    <button className='bg-[#00186B] text-white p-[24px] rounded-full'>
                        Book an appointment
                    </button>
                )}
            </div>
            <div className='col-span-6 space-y-5'>
                <p className='text-[16px] font-weight-[400] leading-[24px] text-[#0B0A0B]'>
                    Our comprehensive suite of services ensures that you and your loved ones are protected at every stage of life, whether at home, school, work, or abroad. Take the step today to safeguard your future health, because a healthier tomorrow starts with the right protection today.
                </p>
                <Links />
            </div>
        </div>
    )
}


const Links = () => {

    const Arrow = (<svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
        <path d="M8.53854 10.2115L7.66021 9.30771L10.8429 6.125H0.75V4.875H10.8429L7.66021 1.69229L8.53854 0.788544L13.25 5.5L8.53854 10.2115Z" fill="#0B0A0B" />
    </svg>)
    return (
        <div className='flex flex-row gap-4'>
            <div className='flex flex-row gap-4 items-center'>
                <p className='text-[17px] font-bold leading-[24px] text-[#0B0A0B]'>General Clinic</p>
                {Arrow}
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <p className='text-[16px] font-bold leading-[24px] text-[#0B0A0B]'>Travel Clinic</p>
                {Arrow}
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <p className='text-[16px] font-bold leading-[24px] text-[#0B0A0B]'>Wellness Clinic</p>
                {Arrow}
            </div>
        </div>
    )
}