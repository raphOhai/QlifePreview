import React from 'react'
import Image from 'next/image'

export const ServicesPage = () => {
  return (
    <div className='space-y-6 md:space-y-8 py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-[48px]'>
      <div className='space-y-4 md:px-[48px] lg:px-[96px]'>

      <h1 className=''>
        Root Services
    </h1>

    <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10'>
        <div className='md:col-span-7'>
            <h1 className='text-3xl md:text-4xl lg:text-[48px] font-weight-[400] leading-tight md:leading-[48px] lg:leading-[56px] font-hornbill text-[#00186B] w-full md:w-[80%] ' >
                We prioritise prompt, patient-centred care for you and yours.
            </h1>
        </div>
        <div className='md:col-span-5 '>
            <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
            We recognized an urgent need to elevate healthcare services to globally acceptable standards that our clients truly deserve, while also properly defining and implementing the three-tier healthcare structure recommended by the World Health Organization.
            </p>
        </div>
    </div>

      </div>


    <div>
        <Image src='/services/1.webp' alt='Root Services' width={2000} height={2000} className='w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover border-b-[5px] md:border-b-[10px] border-[#FFF16F]' />
    </div>
</div>
  )
}
