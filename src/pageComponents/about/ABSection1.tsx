import React from 'react'
import { ABArt1 } from '../svgs/ABArt1'

export const ABSection1 = () => {
    return (

        <div>
            <div className='space-y-8 md:space-y-10 lg:space-y-13 py-10 md:py-[60px] px-4 md:px-8 lg:px-[48px]'>
                <h1 className='text-base md:text-lg lg:text-[20px] font-weight-[500] leading-[24px]'>
                    Who We Are
                </h1>
                <p className='text-2xl md:text-3xl lg:text-[40px] font-weight-[400] leading-tight md:leading-[44px] lg:leading-[54px] text-[#00186B] w-full md:w-[80%]'>
                    Our clinic operates at the primary healthcare level, which serves as the essential first point of contact with healthcare services.
                </p>


                <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4'>
                    <div className='md:col-span-6'>
                        <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                            Contrary to common misconceptions, primary healthcare is not &ldquo;ordinary&rdquo; or &ldquo;inferior&rdquo; – it represents the foundation of effective healthcare delivery. At this level, we can successfully manage 80% of the common health needs for 80% of the population, ensuring that only cases requiring specialized care are referred to secondary facilities.
                        </p>
                    </div>
                    <div className='md:col-span-6 space-y-4 md:space-y-5'>
                        <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                            This trend highlighted the public&rsquo;s lack of awareness about the critical importance of primary healthcare in maintaining overall well-being. Through our work, we aim to educate our community while providing the credibility and accountability that healthcare delivery demands.
                        </p>
                        <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                            We observed that many people in our environment bypass primary care and go straight to specialists, creating unnecessary strain on the healthcare system and often missing opportunities for preventive care.
                        </p>
                    </div>
                </div>

            </div>
            <div className='relative px-4 md:px-8 lg:px-[48px] py-12 md:py-16 lg:py-[96px] h-[150px] md:h-[250px] lg:h-[400px]'>
                <div className='absolute bottom-0 right-0'>
                    <ABArt1 />
                </div>
            </div>
        </div>

    )
}
