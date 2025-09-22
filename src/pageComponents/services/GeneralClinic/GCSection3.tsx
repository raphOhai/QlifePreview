import React from 'react'

export const GCSection3 = () => {
    return (
        <div className='grid grid-cols-12 gap-4 py-[60px] px-[48px]'>
            <div className='col-span-2'></div>
            <div className='col-span-10'>
                <Content />
            </div>
        </div>
    )
}


const Content = () => {
    return (
        <div className='flex flex-col gap-10'>
            <h1 className='text-[#0B0A0B] text-[20px] font-weight-[500]'>Guided care with confidence</h1>
            <p className='text-[#00186B] text-[40px] font-weight-[400] leading-[54px]'>
                Stay protected at every stage of life and ensure your family’s health is never left to chance. Your health is our priority every day
            </p>


            <div className='grid grid-cols-12 gap-10'>
                <div className='col-span-6'>
                    <Cards />
                </div>
                <div className='col-span-6'>
                    <Cards />
                </div>
                <div className='col-span-6'>
                    <Cards />
                </div>
                <div className='col-span-6'>
                    <Cards />
                </div>
            </div>
        </div>
    )
}



const Cards = () => {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className=' text-[20px] font-weight-[900]'>General Practice</h1>
            <p className='text-[#222] text-[16px] font-weight-[400] leading-[24px]'>
                Childhood vaccines lay the foundation for lifelong health, protecting against diseases like measles, polio, and whooping cough. Our program ensures children get the right protection at the right time.
            </p>
        </div>
    )
}