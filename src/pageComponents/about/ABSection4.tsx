import React from 'react'

export const ABSection4 = () => {
  return (
    <div className='py-[48px] px-[48px] grid grid-cols-12 gap-4'>
        <div className='col-span-3'></div>
        <div className='col-span-9'>
            <Content />
        </div>
     
    </div>
  )
}


const Content = () => {

    const TextBlock = ({ title, description }: { title: string, description: string }) => {
        return (
            <div className='space-y-5'>
                <h1 className='text-[20px] font-weight-[600] leading-[52px] '>{title}</h1>
                <p className='text-[16px] font-weight-[400] leading-[24px]  max-w-[80%] '>{description}</p>
            </div>
        )
    }
    return (
        <div className='space-y-10'>
            <h1 className='text-[20px] font-weight-[500] leading-[52px] text-[#0B0A0B]'>Our Ws</h1>
            <p className='text-[40px] font-weight-[400] leading-[52px] text-[#00186B]'>
            Personalised, effective, first-point-of-contact care for the whole family at every stage.
            </p>

            <div className='grid grid-cols-12 gap-5'>
                <div className='col-span-6'>
                    <TextBlock title='Why are we here' description='To lead the primary healthcare space in Nigeria by providing transformative levels of high quality, personlised healthcare.' />
                </div>
                <div className='col-span-6'>
                    <TextBlock title='What we do and how we do it' description='We are a boutique healthcare clinic with a general practice, immigration practice and wellness practice; focused on personalised, first-point-of-contact care for the whole family.' />
                </div>
                <div className='col-span-6'>
                    <TextBlock title='What makes us different' description='Being excellent at primary healthcare; hence, we’ve maintained quality passed down from one generation to another. We do not see clinics as a stepping stone to becoming a hospital. We believe clinics have an important role to play in the healthcare space that can’t be overlooked.' />
                </div>
                <div className='col-span-6'>
                    <TextBlock title='Who we are here for' description='For clients that truly appreciate a personalised approach to medicine.' />
                </div>

            </div>
        </div>
    )
}