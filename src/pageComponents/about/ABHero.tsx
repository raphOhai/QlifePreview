import React from 'react'
import Image from 'next/image'

export const ABHero = () => {
    return (
        <div className='space-y-4 py-[96px] px-[48px]'>
            <h1 className=''>
                About Us
            </h1>

            <div className='grid grid-cols-12 gap-10'>
                <div className='col-span-7'>
                    <h1 className='text-[48px] font-weight-[400] leading-[56px] font-hornbill text-[#00186B] w-[80%] ' >
                        We prioritise prompt, patient-centred care for you and yours.
                    </h1>
                </div>
                <div className='col-span-5'>
                    <p className='text-[16px] font-weight-[400] leading-[24px]'>
                    We recognized an urgent need to elevate healthcare services to globally acceptable standards that our clients truly deserve, while also properly defining and implementing the three-tier healthcare structure recommended by the World Health Organization.
                    </p>
                </div>
            </div>

            <div>
                <Image src='/about/1.webp' alt='General Clinic' width={2000} height={2000} className='w-full h-[550px] object-cover border-b-[10px] border-[#FFF16F]' />
            </div>
        </div>
    )
}
