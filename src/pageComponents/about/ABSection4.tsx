import React from 'react'

export const ABSection4 = () => {
  return (
    <div className='py-12 md:py-[48px] px-4 md:px-8 lg:px-[48px] grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4'>
        <div className='hidden md:block md:col-span-3'></div>
        <div className='md:col-span-9'>
            <Content />
        </div>
     
    </div>
  )
}


const Content = () => {

    const TextBlock = ({ title, description }: { title: string, description: string }) => {
        return (
            <div className='space-y-4 md:space-y-5'>
                <h1 className='text-lg md:text-xl lg:text-[20px] font-weight-[600] leading-[28px] md:leading-[40px] lg:leading-[52px]'>{title}</h1>
                <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]  w-full md:max-w-[90%] lg:max-w-[80%]'>{description}</p>
            </div>
        )
    }
    return (
        <div className='space-y-6 md:space-y-8 lg:space-y-10'>
            <h1 className='text-base md:text-lg lg:text-[20px] font-weight-[500] leading-[32px] md:leading-[40px] lg:leading-[52px] text-[#0B0A0B]'>Our Ws</h1>
            <p className='text-2xl md:text-3xl lg:text-[40px] font-weight-[400] leading-tight md:leading-[44px] lg:leading-[52px] text-[#00186B]'>
            Personalised, effective, first-point-of-contact care for the whole family at every stage.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>
                <div className='md:col-span-6'>
                    <TextBlock title='Why are we here' description='To lead the primary healthcare space in Nigeria by providing transformative levels of high quality, personlised healthcare.' />
                </div>
                <div className='md:col-span-6'>
                    <TextBlock title='What we do and how we do it' description='We are a boutique healthcare clinic with a general practice, immigration practice and wellness practice; focused on personalised, first-point-of-contact care for the whole family.' />
                </div>
                <div className='md:col-span-6'>
                    <TextBlock title='What makes us different' description='Being excellent at primary healthcare; hence, we’ve maintained quality passed down from one generation to another. We do not see clinics as a stepping stone to becoming a hospital. We believe clinics have an important role to play in the healthcare space that can’t be overlooked.' />
                </div>
                <div className='md:col-span-6'>
                    <TextBlock title='Who we are here for' description='For clients that truly appreciate a personalised approach to medicine.' />
                </div>

            </div>
        </div>
    )
}