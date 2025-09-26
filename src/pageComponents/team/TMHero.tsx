import React from 'react'

export const TMHero = () => {
    return (
        <div className='py-[96px] px-[48px] space-y-4'>
            <h1>
                People
            </h1>

            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                    <h1 className='text-[48px] font-weight-[400] leading-[56px] text-[#00186B] font-hornbill '>
                        Trusted dedicated teams delivering care with compassion and shaping healthier futures together.
                    </h1>
                </div>
                <div className='col-span-6'>
                    <h1 className='text-[16px] font-weight-[400] leading-[24px]  max-w-[80%] justify-self-end'>
                        Our people are at the heart of everything we do. From experienced doctors to supportive nurses and dedicated administrative staff, every member of our team plays a role in ensuring our patients receive care that is compassionate, professional, and tailored to their needs.
                    </h1>
                </div>
            </div>
        </div>
    )
}
