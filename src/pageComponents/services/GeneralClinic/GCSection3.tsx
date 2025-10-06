import React from 'react'

export const GCSection3 = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 py-10 md:py-[60px] px-4 md:px-8 lg:px-[48px]'>
            <div className='hidden md:block md:col-span-2'></div>
            <div className='md:col-span-10'>
                <Content />
            </div>
        </div>
    )
}


const Content = () => {
    return (
        <div className='flex flex-col gap-6 md:gap-8 lg:gap-10'>
            <h1 className='text-[#0B0A0B] text-base md:text-lg lg:text-[20px] font-weight-[500]'>Guided care with confidence</h1>
            <p className='text-[#00186B] text-2xl md:text-3xl lg:text-[40px] font-weight-[400] leading-tight md:leading-[44px] lg:leading-[54px]'>
                Stay protected at every stage of life and ensure your family’s health is never left to chance. Your health is our priority every day
            </p>


            <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10'>
                <div className='md:col-span-6'>
                    <Cards />
                </div>
                <div className='md:col-span-6'>
                    <Cards />
                </div>
                <div className='md:col-span-6'>
                    <Cards />
                </div>
                <div className='md:col-span-6'>
                    <Cards />
                </div>
            </div>
        </div>
    )
}



const Cards = () => {
    return (
        <div className='flex flex-col gap-3 md:gap-4'>
            <h1 className=' text-lg md:text-xl lg:text-[20px] font-weight-[900]'>General Practice</h1>
            <p className='text-[#222] text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                Childhood vaccines lay the foundation for lifelong health, protecting against diseases like measles, polio, and whooping cough. Our program ensures children get the right protection at the right time.
            </p>
        </div>
    )
}