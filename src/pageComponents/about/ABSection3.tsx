import React from 'react'

export const ABSection3 = () => {
    return (
        <div className='py-12 md:py-[48px] px-4 md:px-8 lg:px-[48px] '
            style={{ backgroundImage: "url('/about/2.webp')" , backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Content />
        </div>
    )
}



const Content = () => {
    const Pill = ({ title }: { title: string }) => {
        return (
            <div className='bg-[#FFF16F] rounded-[40px] px-4 py-2 md:p-4 border-[1px] border-[#F8F4EB]'>
                <p className='text-sm md:text-base'>
                    {title}
                </p>

            </div>
        )
    }
    return (
        <div className='space-y-6 md:space-y-8 lg:space-y-10 py-16 md:py-[100px] lg:py-[150px] px-4 md:px-[60px] lg:px-[100px] w-full md:w-[80%] lg:w-[60%]'>

            <h1 className='text-base md:text-lg lg:text-[20px] font-weight-[500] leading-[32px] md:leading-[44px] lg:leading-[54px]'>
                Our Values
            </h1>
            <p className='text-2xl md:text-3xl lg:text-[40px] font-weight-[400] leading-tight md:leading-[44px] lg:leading-[54px] text-[#00186B]'>
                Our commitment to excellence is built upon nine core values that guide every aspect of our service delivery.
            </p>


            <div className='flex flex-row gap-2 md:gap-3 lg:gap-4 flex-wrap'>
                <Pill title='Patient-Centred' />
                <Pill title='Patient-Centred' />
            </div>

        </div>
    )
}

