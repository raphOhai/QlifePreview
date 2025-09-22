import React from 'react'

export const CTA = ({title, description, buttonText}: {title: string, description: string, buttonText: string}) => {
  return (
    <div className='flex justify-center items-center flex-col gap-4  py-[120px] px-[200px] '>
      <h1 className='text-[#00186B] text-[48px] font-weight-[400] leading-[56px] font-hornbill text-center w-[80%]' data-animation="opacIn"  data-split="false">
        {title}
      </h1>
      <p className='text-[#0B0A0B] text-[16px] font-weight-[400] leading-[24px] text-center max-w-[950px]'>
        {description}
      </p>
      <button className='bg-[#00186B] text-white p-[24px] rounded-full'>
        {buttonText}
      </button>
    </div>
  )
}
