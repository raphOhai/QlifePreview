import React from 'react'

const ABSection2 = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 py-12 md:py-[48px] px-4 md:px-8 lg:px-[48px]'>
            <div className='md:col-span-6 space-y-6 md:space-y-8 lg:space-y-10'>
                <h1 className='text-2xl md:text-3xl lg:text-[40px] font-weight-[500] leading-tight md:leading-[44px] lg:leading-[52px] mt-2 md:mt-[6%] text-[#00186B]'>
                    Personlised, effective, first-point-of-contact care for the whole family at every stage
                </h1>

                <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                    Our services encompass preventive care, acute illness management, chronic disease monitoring, health screenings, and patient education. We believe strongly in the power of lifestyle modification to prevent disease and minimize the impact of chronic conditions.
                </p>

            </div>

            <div className='md:col-span-6'>
                <Card />

            </div>
        </div>
    )
}





const Card = () => {


    const Content = ({ title, description }: { title: string, description: string }) => {
        return (
            <div className='space-y-4 md:space-y-5 pb-4 md:pb-5 border-b-2 border-[#B8B8B8]'>
                <h1 className='text-[#0B0A0B] text-lg md:text-xl lg:text-[20px] font-weight-[500] leading-[24px]'>
                    {title}
                </h1>
                <p className='text-[#0B0A0B] text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                    {description}
                </p>
            </div>
        )
    }
    return (
        <div className='space-y-6 md:space-y-8 lg:space-y-10 p-6 md:p-8 lg:p-[48px] bg-[#F8F4EB]' >
            <Content title='Vision' description='Our vision is to be a leading provider of global-standard health services in Nigeria, setting the benchmark for primary care delivery across the country.' />
            <Content title='Mission' description='Our mission is to provide prompt, efficient, and client-focused healthcare services that align with global standards. Using skilled processionals and modern technology in a friendly and homely environment.' />

        </div>
    )
}

export default ABSection2