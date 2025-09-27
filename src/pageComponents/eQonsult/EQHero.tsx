import React from 'react'
import Image from 'next/image'

export const EQHero = () => {
    return (
        <div className='space-y-10 py-[96px] px-[48px] '>
            <h1>
                Telemedicine
            </h1>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                    <h1 className='text-[48px] font-weight-[400] leading-[56px] font-hornbill text-[#00186B]'>
                        eQonsult.
                        Connect with your doctor anytime, anywhere you are.
                    </h1>
                </div>
                <div className='col-span-6 flex items-end'>
                    <p className='text-[16px] font-weight-[400] leading-[24px]'>
                        eQonsult brings healthcare to you, wherever you are. Access trusted QLife physicians for consultations, prescriptions, and follow-ups without needing to visit the clinic. It’s care designed around your comfort, privacy, and convenience.
                    </p>
                </div>
            </div>

            <div className=''>
                <Image src='/eQonsult/1.webp' alt='eQonsult' width={2000} height={2000} className='w-full h-[550px] object-cover border-b-[10px] border-[#FFF16F]' />
            </div>
        </div>

    )
}
