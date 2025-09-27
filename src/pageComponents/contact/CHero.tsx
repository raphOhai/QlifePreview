import React from 'react'
import Image from 'next/image'

export const CHero = () => {
  return (
    <div className='space-y-10 py-[96px] px-[48px] '>
    <h1>
        Contact Us
    </h1>
    <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-6'>
            <h1 className='text-[48px] font-weight-[400] leading-[56px] font-hornbill text-[#00186B]'>
            Connecting you to quality care when you need us most.
            </h1>
        </div>
        <div className='col-span-6'>
            <p className='text-[16px] font-weight-[400] leading-[24px]'>
            Whether you’re booking a visit, asking about services, or arranging an immigration medical exam, our team is here to help. Reach us by phone, email, or in person—whatever’s easiest for you. We respond promptly and will guide you to the right care and next steps.
            </p>
        </div>
    </div>

    <div className=''>
        <Image src='/contact/1.webp' alt='eQonsult' width={2000} height={2000} className='w-full h-[550px] object-cover border-b-[10px] border-[#FFF16F]' />
    </div>
</div>
  )
}
