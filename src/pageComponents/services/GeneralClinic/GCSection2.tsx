import { GCArt } from '@/pageComponents/svgs/GCArt'
import React from 'react'

export const GCSection2 = () => {
    return (

        <div className='flex flex-col relative'>
            <div className='flex flex-col gap-8 md:gap-10 py-10 md:py-[60px] px-4 md:px-8 lg:px-[48px]'>
                <div className='flex flex-col gap-4 md:gap-6 w-full md:w-4/5'>
                    <h1>
                        Our Boutique Healthcare Approach
                    </h1>
                    <p className='text-[#00186B] text-2xl md:text-3xl lg:text-[40px] font-weight-[400] leading-tight md:leading-[44px] lg:leading-[54px]'>
                        Compassionate care built on prevention and trust. Delivering comprehensive primary care that puts you first.
                    </p>

                </div>

                <div className='w-full md:w-1/2'>
                    <p className='text-[#222] text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                        What sets us apart is our collaborative approach to healthcare. Whether it’s routine check-ups, treatment for common illnesses, or guidance for long-term health, we tailor our care to meet your needs.  We believe the most effective care occurs when patients and providers work together as partners. By combining clinical expertise with a warm, approachable environment, we empower you to take charge of your health with confidence.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 mt-6 md:mt-10'>
                    <div className='md:col-span-4'>
                        <InfoCards number={1} title="Prevention" description="We believe the best healthcare starts before illness arises. Through guidance on lifestyle, nutrition, and regular health checks, we help you prevent illnesses before they start and you stay healthier for longer." />
                    </div>
                    <div className='md:col-span-4'>
                        <InfoCards number={2} title="Early detection" description="Catching health issues early leads to better outcomes. Our skilled team ensures timely assessments and diagnostic checks  to identify potential health concerns before they become serious." />
                    </div>
                    <div className='md:col-span-4'>
                        <InfoCards number={3} title="Prompt management" description="When you need care, we act quickly and carefully. From accurate diagnoses to personalized treatment plans, we provide you the care and support you need to restore your health quickly and safely." />
                    </div>
                </div>
            </div>


            <div className='relative border-b border-[#F0F0F0] h-[300px] md:h-[450px] lg:h-[600px]  md:block'>
                <div className='relative h-full max-w-[1920px] mx-auto'>
                    <div className='absolute bottom-0 right-0 w-[600px] md:w-[800px] lg:w-[1000px]'>
                    <GCArt />
                    </div>
                </div>
            </div>

        </div>

    )
}




const InfoCards = ({ number, title, description }: { number: number, title: string, description: string }) => {
    return (
        <div className='flex flex-col gap-2'>

            <div className='w-full h-[70px] border-l-[3px] border-[#F0F0F0] pl-2'>

                <div className='bg-[#F0F0F0] py-[16px] px-[24px] rounded-[24px] w-[40px] h-[40px] flex items-center justify-center '>
                    <p className='text-[#222] text-[20px] font-weight-[500] leading-[24px]  '>
                        0{number}
                    </p>

                </div>

            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-[#0B0A0B] text-[20px] font-weight-[500] leading-[56px]'>
                    {title}
                </h1>
                <p className='text-[#222] text-[16px] font-weight-[400] leading-[24px]'>
                    {description}
                </p>
            </div>
        </div>
    )
}
