import React from 'react'

export const CTA = () => {
  return (
    <div className='py-[120px] px-[200px]'>
      <div className='max-w-[1920px] mx-auto flex justify-center items-center flex-col gap-4'>
        <h1 className='text-[#00186B] text-[48px] font-weight-[400] leading-[56px] font-hornbill '>
          Ready to take charge of your health?
        </h1>
        <p className='text-[#0B0A0B] text-[16px] font-weight-[400] leading-[24px] text-center max-w-[950px]'>
          Experience the power of innovation firsthand and discover how out solutions can revolutionize your IT infrastructure. Contact us now for our wide range of IT services to you optimize your operations and achieve your goals.
        </p>
        <button className='bg-[#00186B] text-white p-[24px] rounded-full'>
          View articles
        </button>
      </div>
    </div>
  )
}
