import React from 'react'

export const Section2 = () => {
    return (
        <div className='bg-primary p-4 py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-[48px]'>
            <div className='max-w-[1920px] mx-auto flex flex-col gap-8 md:gap-12 lg:gap-20'>
                <div className='flex flex-col gap-3 md:gap-4 w-full md:w-2/3 lg:w-1/2'>
                    <h1 className='text-[#FFF16F] text-2xl md:text-3xl lg:text-[48px] font-weight-[400] leading-tight lg:leading-[56px]'>
                        Prompt and efficient world-class health care you deserve.
                    </h1>

                    <p className='text-white text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                        The primary should be the first point of contact with the health care services. We work with you to ensure credibility and accountability into the delivery of health care.
                    </p>
                </div>
                <Section2Content />
            </div>
        </div>
    )
}


const Section2Content = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-4' data-fade-group>
            <div className='lg:col-span-4' data-fade-group-item>
                <div className="flex flex-col gap-2">
                    <h1 className='text-white text-3xl md:text-4xl lg:text-[48px] font-weight-[400] leading-tight lg:leading-[56px]'>
                        80%
                    </h1>
                    <div className='h-[1px] w-full bg-white' />
                    <div className="flex flex-col gap-1">
                        <h1 className='text-white text-lg md:text-xl lg:text-[20px] leading-relaxed lg:leading-[56px] font-bold'>
                            Common Health Needs Managed
                        </h1>
                        <p className='text-white text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                            You get comprehensive care for the vast majority of your everyday health needs right here.
                        </p>
                    </div>
                </div>
            </div>
            <div className='lg:col-span-4' data-fade-group-item>
                <div className="flex flex-col gap-2">
                    <h1 className='text-white text-3xl md:text-4xl lg:text-[48px] font-weight-[400] leading-tight lg:leading-[56px]'>
                        60 Million
                    </h1>
                    <div className='h-[1px] w-full bg-white' />
                    <div className="flex flex-col gap-1">
                        <h1 className='text-white text-lg md:text-xl lg:text-[20px] leading-relaxed lg:leading-[56px] font-bold'>
                            Lives Potentially Saved
                        </h1>
                        <p className='text-white text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                            By focusing on early intervention and prevention, we can drastically improve health outcomes.
                        </p>
                    </div>
                </div>
            </div>
            <div className='lg:col-span-4' data-fade-group-item>
                <div className="flex flex-col gap-2">
                    <h1 className='text-white text-3xl md:text-4xl lg:text-[48px] font-weight-[400] leading-tight lg:leading-[56px]'>
                        3.7 Years
                    </h1>
                    <div className='h-[1px] w-full bg-white' />
                    <div className="flex flex-col gap-1">
                        <h1 className='text-white text-lg md:text-xl lg:text-[20px] leading-relaxed lg:leading-[56px] font-bold'>
                            Increased Life Expectancy
                        </h1>
                        <p className='text-white text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                            Increased overall population health and average life expectancy by 2030.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}





