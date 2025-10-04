import React from 'react'
import { ABArt1 } from '../svgs/ABArt1'

export const ABSection1 = () => {
    return (

        <div>
            <div className='space-y-13 py-[60px] px-[48px]'>
                <h1 className='text-[20px] font-weight-[500] leading-[24px]'>
                    Who We Are
                </h1>
                <p className='text-[40px] font-weight-[400] leading-[54px] text-[#00186B] w-[80%]'>
                    Our clinic operates at the primary healthcare level, which serves as the essential first point of contact with healthcare services.
                </p>


                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-6'>
                        <p className='text-[16px] font-weight-[400] leading-[24px]'>
                            Contrary to common misconceptions, primary healthcare is not &ldquo;ordinary&rdquo; or &ldquo;inferior&rdquo; – it represents the foundation of effective healthcare delivery. At this level, we can successfully manage 80% of the common health needs for 80% of the population, ensuring that only cases requiring specialized care are referred to secondary facilities.
                        </p>
                    </div>
                    <div className='col-span-6 space-y-5'>
                        <p className='text-[16px] font-weight-[400] leading-[24px]'>
                            This trend highlighted the public&rsquo;s lack of awareness about the critical importance of primary healthcare in maintaining overall well-being. Through our work, we aim to educate our community while providing the credibility and accountability that healthcare delivery demands.
                        </p>
                        <p className='text-[16px] font-weight-[400] leading-[24px]'>
                            We observed that many people in our environment bypass primary care and go straight to specialists, creating unnecessary strain on the healthcare system and often missing opportunities for preventive care.
                        </p>
                    </div>
                </div>

            </div>
            <div className='relative px-[48px] py-[96px]  h-[400px]'>
                <div className='absolute bottom-0 right-0'>
                    <ABArt1 />
                </div>
            </div>
        </div>

    )
}
