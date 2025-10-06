import { WCArt1 } from '@/pageComponents/svgs/WCArt1'
import React from 'react'

export const WCSection2 = () => {
  return (


    <div className='space-y-8 md:space-y-10'>
      <div className='space-y-6 md:space-y-10 px-4 md:px-8 lg:px-[48px] py-10 md:py-[48px]'>
        <div className='space-y-3 md:space-y-4 w-full md:w-2/3 lg:w-1/2'>
          <h1 className='text-[#0B0A0B] text-base md:text-lg lg:text-[20px] font-weight-[500] leading-[32px] md:leading-[40px] lg:leading-[54px]'>
            Guided care with confidence
          </h1>
          <h2 className='text-[#00186B] text-2xl md:text-3xl lg:text-[40px] font-weight-[400] leading-tight md:leading-[44px] lg:leading-[52px]'>
            Specialist support designed to complement and extend primary care.
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4'>
          <div className='md:col-span-6'>
            <p>
              Our health assessments are designed to provide a complete picture of your well-being. From routine screenings to advanced diagnostics, we evaluate your overall health and identify potential risks before they develop into serious conditions. This proactive approach empowers you to make informed decisions about your lifestyle and care.
            </p>
          </div>
          <div className='md:col-span-6'>
            <p>
              Beyond screenings, we also guide you with preventive strategies and wellness plans tailored to your unique needs. Whether it’s managing nutrition, monitoring heart health, or keeping track of chronic risk factors, our goal is to help you live healthier, longer, and with peace of mind.
            </p>
          </div>
        </div>

      </div>



      <div className='relative border-b border-[#F0F0F0] h-[200px] md:h-[450px] lg:h-[600px]  md:block'>
                <div className='relative h-full max-w-[1920px] mx-auto'>
                    <div className='absolute bottom-0 right-0 w-[600px] md:w-[800px] lg:w-[1000px]'>
                    <WCArt1 />
                    </div>
                </div>
            </div>

    </div>

  )
}
