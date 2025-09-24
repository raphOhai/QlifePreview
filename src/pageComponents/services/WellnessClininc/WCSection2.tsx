import { WCArt1 } from '@/pageComponents/svgs/WCArt1'
import React from 'react'

export const WCSection2 = () => {
  return (


    <div className='space-y-10'>
      <div className='space-y-10 px-[48px] py-[48px]'>
        <div className='space-y-4 w-1/2'>
          <h1 className='text-[#0B0A0B] text-[20px] font-weight-[500] leading-[54px]'>
            Guided care with confidence
          </h1>
          <h2 className='text-[#00186B] text-[40px] font-weight-[400] leading-[52px]'>
            Specialist support designed to complement and extend primary care.
          </h2>
        </div>

        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-6'>
            <p>
              Our health assessments are designed to provide a complete picture of your well-being. From routine screenings to advanced diagnostics, we evaluate your overall health and identify potential risks before they develop into serious conditions. This proactive approach empowers you to make informed decisions about your lifestyle and care.
            </p>
          </div>
          <div className='col-span-6'>
            <p>
              Beyond screenings, we also guide you with preventive strategies and wellness plans tailored to your unique needs. Whether it’s managing nutrition, monitoring heart health, or keeping track of chronic risk factors, our goal is to help you live healthier, longer, and with peace of mind.
            </p>
          </div>
        </div>

      </div>
      <div className='relative px-[48px] py-[96px]  h-[200px]'>
        <div className='absolute bottom-0 right-0'>
          <WCArt1 />
        </div>
      </div>

    </div>

  )
}
