import React from 'react'

export const ABSection3 = () => {
    return (
        <div className='py-[48px] px-[48px] '
            style={{ backgroundImage: "url('/about/2.webp')" , backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Content />
        </div>
    )
}



const Content = () => {
    const Pill = ({ title }: { title: string }) => {
        return (
            <div className='bg-[#FFF16F] rounded-[40px] p-4 border-[1px] border-[#F8F4EB]'>
                <p>
                    {title}
                </p>

            </div>
        )
    }
    return (
        <div className='space-y-10 py-[150px] px-[100px] w-[60%]'>

            <h1 className='text-[20px] font-weight-[500] leading-[54px]'>
                Our Values
            </h1>
            <p className='text-[40px] font-weight-[400] leading-[54px] text-[#00186B]'>
                Our commitment to excellence is built upon nine core values that guide every aspect of our service delivery.
            </p>


            <div className='flex flex-row gap-4 flex-wrap'>
                <Pill title='Patient-Centred' />
                <Pill title='Patient-Centred' />
            </div>

        </div>
    )
}

