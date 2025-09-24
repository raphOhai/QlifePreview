import { TCArt1 } from '@/pageComponents/svgs/TCArt1'
import React from 'react'

export const TCSection2 = () => {
    return (
        <div className='space-y-5'>
            <div className="space-y-10 px-[60px] py-[96px]">
                <h1 className='text-[#0B0A0B] text-[20px] font-weight-[500] leading-[56px]'>
                    Why Choose QLife Travel Clinic
                </h1>
                <Content />
            </div>
            <div className='relative px-[48px] py-[96px]  h-[200px]'>
                <div className='absolute bottom-0 left-0'>
                    <TCArt1 />
                </div>
            </div>
        </div>

    )
}


const Content = () => {
    return (
        <div className='grid grid-cols-12 gap-20'>
            <div className='col-span-7 flex flex-col gap-8'>
                <h1 className='text-[#00186B] text-[40px] font-weight-[500] leading-[56px]'>
                    Travel the world with confidence and peace of mind, backed by medical expertise
                </h1>

                <p className='text-[#0B0A0B] text-[16px] font-weight-[400] leading-[24px]'>
                    Our travel medicine specialists guide you through all aspects of safe travel. From pre-travel consultations to vaccination planning, we prepare you for any health challenges you might face abroad. Every recommendation is personalized based on your itinerary, health status, and potential risks.
                </p>
                <p className='text-[#0B0A0B] text-[16px] font-weight-[400] leading-[24px]'>
                    We also provide education on preventive measures, disease avoidance, and emergency preparedness while overseas. Whether you’re traveling for leisure, work, or study, our clinic ensures you have the knowledge and protection you need. Our approach combines medical expertise with practical guidance, giving you peace of mind.
                </p>
            </div>

            <div className='col-span-5'>
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
            <Content title='Easing Discomfort from Cabin Pressure' description='Changes in altitude and cabin pressure often cause ear pain, sinus issues, or breathing discomfort. Our team prepares you with practical tips and treatments to minimize these effects for a more comfortable journey.' />
        </div>
    )
}