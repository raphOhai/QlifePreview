import { TCArt1 } from '@/pageComponents/svgs/TCArt1'
import React from 'react'

export const TCSection2 = () => {
    return (
        <div className='space-y-6 md:space-y-8'>
            <div className="space-y-6 md:space-y-10 px-4 md:px-8 lg:px-[60px] py-12 md:py-16 lg:py-[96px]">
                <h1 className='text-[#0B0A0B] text-base md:text-lg lg:text-[20px] font-weight-[500] leading-[32px] md:leading-[40px] lg:leading-[56px]'>
                    Why Choose QLife Travel Clinic
                </h1>
                <Content />
            </div>
         

            <div className='relative border-b border-[#F0F0F0] h-[200px] md:h-[450px] lg:h-[600px]  md:block'>
                <div className='relative h-full max-w-[1920px] mx-auto'>
                    <div className='absolute bottom-0 right-0 w-[600px] md:w-[800px] lg:w-[1000px]'>
                    <TCArt1 />
                    </div>
                </div>
            </div>
        </div>

    )
}


const Content = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20'>
            <div className='md:col-span-7 flex flex-col gap-6 md:gap-8'>
                <h1 className='text-[#00186B] text-2xl md:text-3xl lg:text-[40px] font-weight-[500] leading-tight md:leading-[44px] lg:leading-[56px]'>
                    Travel the world with confidence and peace of mind, backed by medical expertise
                </h1>

                <p className='text-[#0B0A0B] text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                    Our travel medicine specialists guide you through all aspects of safe travel. From pre-travel consultations to vaccination planning, we prepare you for any health challenges you might face abroad. Every recommendation is personalized based on your itinerary, health status, and potential risks.
                </p>
                <p className='text-[#0B0A0B] text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                    We also provide education on preventive measures, disease avoidance, and emergency preparedness while overseas. Whether you’re traveling for leisure, work, or study, our clinic ensures you have the knowledge and protection you need. Our approach combines medical expertise with practical guidance, giving you peace of mind.
                </p>
            </div>

            <div className='md:col-span-5'>
                <Card />
            </div>
        </div>
    )



}




const Card = () => {


    const Content = ({ title, description }: { title: string, description: string }) => {
        return (
            <div className='space-y-4 md:space-y-5 pb-4 md:pb-5 border-b-2 border-[#B8B8B8]'>
                <h1 className='text-[#0B0A0B] text-lg md:text-xl lg:text-[20px] font-weight-[500] leading-[24px]'>
                    {title}
                </h1>
                <p className='text-[#0B0A0B] text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                    {description}
                </p>
            </div>
        )
    }
    return (
        <div className='space-y-6 md:space-y-8 lg:space-y-10 p-6 md:p-8 lg:p-[48px] bg-[#F8F4EB]' >
            <Content title='Managing Jet Lag and Fatigue' description='Crossing time zones can leave travelers feeling disoriented, tired, and unable to enjoy their trip fully. Our experts provide guidance on rest, hydration, and light exposure to help your body adjust more quickly.' />
            <Content title='Preventing Deep Vein Thrombosis (DVT)' description='Long hours of sitting on flights can increase the risk of blood clots. We offer tailored advice and preventive strategies, from simple in-flight exercises to medical interventions where needed.' />
            <Content title='Easing Discomfort from Cabin Pressure' description='Changes in altitude and cabin pressure often cause ear pain, sinus issues, or breathing discomfort. Our team prepares you with practical tips and treatments to minimize these effects for a more comfortable journey.' />
        </div>
    )
}