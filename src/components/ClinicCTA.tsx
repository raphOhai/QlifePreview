import React from 'react'

export const ClinicCTA = ({withButton = false}: {withButton?: boolean}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 py-12 md:py-16 lg:py-[120px] px-4 md:px-8 lg:px-[48px]'>
            <div className='md:col-span-6 space-y-6 md:space-y-8 lg:space-y-10'>
                <h1 className='text-2xl md:text-3xl lg:text-[40px] font-weight-[500] leading-tight md:leading-[44px] lg:leading-[52px] text-[#00186B] w-full md:max-w-[85%] lg:max-w-[80%]'>Stay Protected, Stay Healthy. Prevention is the first step to lasting health</h1>

                {withButton && (
                    <button className='bg-[#00186B] text-white py-3 px-6 md:p-[24px] rounded-full text-sm md:text-base'>
                        Book an appointment
                    </button>
                )}
            </div>
            <div className='md:col-span-6 space-y-4 md:space-y-5'>
                <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px] text-[#0B0A0B]'>
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
        <div className='flex flex-col sm:flex-row gap-3 md:gap-4'>
            <div className='flex flex-row gap-2 md:gap-4 items-center'>
                <p className='text-sm md:text-[17px] font-bold leading-[24px] text-[#0B0A0B]'>General Clinic</p>
                {Arrow}
            </div>
            <div className='flex flex-row gap-2 md:gap-4 items-center'>
                <p className='text-sm md:text-[16px] font-bold leading-[24px] text-[#0B0A0B]'>Travel Clinic</p>
                {Arrow}
            </div>
            <div className='flex flex-row gap-2 md:gap-4 items-center'>
                <p className='text-sm md:text-[16px] font-bold leading-[24px] text-[#0B0A0B]'>Wellness Clinic</p>
                {Arrow}
            </div>
        </div>
    )
}