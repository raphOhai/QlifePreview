import React from 'react'

export const TMHero = () => {
    return (
        <div className='py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-[48px] space-y-4'>
            <h1 className='text-base md:text-lg'>
                People
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10'>
                <div className='md:col-span-6'>
                    <h1 className='text-3xl md:text-4xl lg:text-[48px] font-weight-[400] leading-tight md:leading-[48px] lg:leading-[56px] text-[#00186B] font-hornbill '>
                        Trusted dedicated teams delivering care with compassion and shaping healthier futures together.
                    </h1>
                </div>
                <div className='md:col-span-6 flex items-end '>
                    <h1 className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]  w-full md:max-w-[85%] lg:max-w-[80%] '>
                        Our people are at the heart of everything we do. From experienced doctors to supportive nurses and dedicated administrative staff, every member of our team plays a role in ensuring our patients receive care that is compassionate, professional, and tailored to their needs.
                    </h1>
                </div>
            </div>

            
        </div>
    )
}
