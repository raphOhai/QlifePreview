import React from 'react'

export const TcSection3 = () => {

    const content = [
        {
            number: 1,
            title: 'Preventive Care',
            description: 'We provide essential health advice, vaccinations, and preventive treatments tailored for your international travels.'
        },
        {
            number: 2,
            title: 'Vaccination',
            description: 'We provide essential health advice, vaccinations, and preventive treatments tailored for your international travels.'
        },
        {
            number: 3,
            title: 'Education',
            description: 'We provide essential health advice, vaccinations, and preventive treatments tailored for your international travels.'
        },
        {
            number: 4,
            title: 'Emergency Preparedness',
            description: 'We provide essential health advice, vaccinations, and preventive treatments tailored for your international travels.'
        },
        {
            number: 5,
            title: 'Medical Travel Insurance',
            description: 'We provide essential health advice, vaccinations, and preventive treatments tailored for your international travels.'
        }
    ]
    return (
        <div className='space-y-8 md:space-y-10 py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-[48px]'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4'>
                <div className='hidden md:block md:col-span-4'></div>
                <div className='md:col-span-8'>
                    <h1 className='text-[#00186B] text-2xl md:text-3xl lg:text-[40px] font-weight-[400] leading-tight md:leading-[44px] lg:leading-[54px]'>Our approach combines Preventive care, Vaccination, and Education enabling you to travel safely and return home healthy.</h1>
                </div>
            </div>
            <div className='space-y-6 md:space-y-8 lg:space-y-10'>
                {content.map((item, index) => (
                    <Content key={index} number={item.number} title={item.title} description={item.description} />
                ))}
            </div>
        </div>
    )
}


const Content = ({ number, title, description }: { number: number, title: string, description: string }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 border-t-[1px] border-[#F0F0F0] pt-4'>
            <div className='md:col-span-4'>
                <h1 className='text-[#0B0A0B] text-base md:text-lg lg:text-[20px] font-weight-[500] leading-[24px]'>0{number}</h1>
            </div>
            <div className='md:col-span-4 space-y-4 md:space-y-8'>
                <h1 className='text-[#0B0A0B] text-base md:text-lg lg:text-[20px] font-weight-[500] leading-[24px]'>{title}</h1>
                <p className='text-[#0B0A0B] text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>{description}</p>

            </div>
            <div className='md:col-span-4'>

            </div>

        </div>
    )
}