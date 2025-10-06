import React from 'react'

export const CTA = ({title, description, buttonText}: {title: string, description: string, buttonText: string}) => {
  return (
    <div className='flex justify-center items-center flex-col gap-4 py-12 md:py-16 lg:py-[120px] px-4 md:px-12 lg:px-[200px]'>
      <h1 className='text-[#00186B] text-2xl md:text-4xl lg:text-[48px] font-weight-[400] leading-tight md:leading-[44px] lg:leading-[56px] font-hornbill text-center w-full md:w-[85%] lg:w-[80%]' >
        {title}
      </h1>
      <p className='text-[#0B0A0B] text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px] text-center max-w-[950px] px-2 md:px-0'>
        {description}
      </p>
      <button className='bg-[#00186B] text-white py-3 px-6 md:p-[24px] rounded-full text-sm md:text-base'>
        {buttonText}
      </button>
    </div>
  )
}
