import React from 'react'

const ABSection2 = () => {
    return (
        <div className='grid grid-cols-12 gap-4 py-[48px] px-[48px]'>
            <div className='col-span-6 space-y-10'>
                <h1 className='text-[40px] font-weight-[500] leading-[52px] mt-[10%] text-[#00186B]'>
                    Personlised, effective, first-point-of-contact care for the whole family at every stage
                </h1>

                <p className='text-[16px] font-weight-[400] leading-[24px]'>
                    Our services encompass preventive care, acute illness management, chronic disease monitoring, health screenings, and patient education. We believe strongly in the power of lifestyle modification to prevent disease and minimize the impact of chronic conditions.
                </p>

            </div>

            <div className='col-span-6'>
                <Card />

            </div>
        </div>
    )
}





const Card = () => {


    const Content = ({ title, description }: { title: string, description: string }) => {
        return (
            <div className='space-y-5 pb-5 border-b-2 border-[#B8B8B8]'>
                <h1 className='text-[#0B0A0B] text-[20px] font-weight-[500] leading-[24px]'>
                    {title}
                </h1>
                <p className='text-[#0B0A0B] text-[16px] font-weight-[400] leading-[24px]'>
                    {description}
                </p>
            </div>
        )
    }
    return (
        <div className='space-y-10 p-[48px] bg-[#F8F4EB]' >
            <Content title='Managing Jet Lag and Fatigue' description='Crossing time zones can leave travelers feeling disoriented, tired, and unable to enjoy their trip fully. Our experts provide guidance on rest, hydration, and light exposure to help your body adjust more quickly.' />
            <Content title='Preventing Deep Vein Thrombosis (DVT)' description='Long hours of sitting on flights can increase the risk of blood clots. We offer tailored advice and preventive strategies, from simple in-flight exercises to medical interventions where needed.' />

        </div>
    )
}

export default ABSection2