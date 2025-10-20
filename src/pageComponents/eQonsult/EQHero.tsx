import React from 'react'
import Image from 'next/image'

export const EQHero = () => {
    return (
        <div className='space-y-6 md:space-y-8 lg:space-y-10 py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-[48px]'>
            <h1 className='text-sm md:text-base text-[black]'>
                Telemedicine
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8'>
                <div className='md:col-span-6'>
                    <h1 className='text-3xl md:text-4xl lg:text-[48px] font-weight-[400] leading-tight lg:leading-[56px] font-hornbill text-[#00186B]'>
                        eQonsult.
                        Connect with your doctor anytime, anywhere you are.
                    </h1>
                </div>
                <div className='md:col-span-6 flex items-start md:items-end'>
                    <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                        eQonsult brings healthcare to you, wherever you are. Access trusted QLife physicians for consultations, prescriptions, and follow-ups without needing to visit the clinic. It’s care designed around your comfort, privacy, and convenience.
                    </p>
                </div>
            </div>
            <div>
                <Image src='/eQonsult/1.webp' alt='eQonsult' width={2000} height={2000} className='w-full h-[320px] md:h-[480px] lg:h-[550px] object-cover border-b-[6px] md:border-b-[8px] lg:border-b-[10px] border-[#FFF16F]' />
            </div>
        </div>

    )
}
