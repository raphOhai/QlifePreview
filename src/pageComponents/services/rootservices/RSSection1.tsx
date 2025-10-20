import React from 'react'
import { RSArt1 } from '@/pageComponents/svgs/RSArt1'
import Link from 'next/link'

export const RSSection1 = () => {
    return (

        <div className='space-y-10'>
            <div className='space-y-4 py-12 md:py-16 lg:py-[48px] px-4 md:px-8 lg:px-[48px] mt-[-40px]'>
                <div className='space-y-6 md:space-y-10 md:px-[48px] lg:px-[96px]'>
                    <h1 className='text-base md:text-lg lg:text-[20px] font-weight-[400] leading-[24px]  w-full md:w-[80%] ' >
                        Guided care with confidence
                    </h1>
                    <p className='text-3xl md:text-4xl lg:text-[48px] font-weight-[400] leading-tight md:leading-[44px] lg:leading-[54px] text-[#00186B] w-full md:w-[80%]'>
                        Specialist support designed to complement and extend primary care.
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10'>
                        <div className='md:col-span-6'>
                            <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                                Our health assessments are designed to provide a complete picture of your well-being. From routine screenings to advanced diagnostics, we evaluate your overall health and identify potential risks before they develop into serious conditions. This proactive approach empowers you to make informed decisions about your lifestyle and care.
                            </p>
                        </div>
                        <div className='md:col-span-6'>
                            <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                                Beyond screenings, we also guide you with preventive strategies and wellness plans tailored to your unique needs. Whether it’s managing nutrition, monitoring heart health, or keeping track of chronic risk factors, our goal is to help you live healthier, longer, and with peace of mind.
                            </p>
                        </div>
                    </div>
                </div>
                <Serviceslist />
            </div>

            <div className='relative px-4 md:px-8 lg:px-[48px] py-12 md:py-16 lg:py-[96px]  h-[150px] md:h-[180px] lg:h-[200px]'>
                <div className='absolute bottom-0 right-0'>
                    <RSArt1 />
                </div>
            </div>

        </div>

    )
}



const Serviceslist = () => {
    const servicesData = [
        {
            title: 'General Clinic',
            description: 'These assessments cover essential body functions, from cardiovascular health to metabolic performance, and include laboratory and diagnostic tests tailored to your needs. ',
            link: '/services/generalclinic'
        },

        {
            title: 'Travel Clinic.',
            description: 'Our comprehensive screenings are designed to give you a clear picture of your health today and identify any risks for tomorrow. ',
            link: '/services/travelclinic'
        },

        {
            title: 'Wellness Clinic',
            description: 'Our approach combines regular testing, personalized advice, and structured follow-ups, ensuring that you can take control of your health journey and significantly reduce the impact of potential risks over time.',
            link: '/services/wellnessclinic'
        },

        {
            title: 'Immigration Screening',
            description: 'Our doctors and health experts work closely with you to design customized plans that may include nutrition advice, exercise recommendations, stress management strategies, and regular progress check-ins.',
            link: '/services/booking'
        },
        // {
        //     title: 'Specialist Clinics',
        //         description: 'Our specialist clinics offer advanced care for specific conditions, ensuring that you receive the highest level of care and support.',
        //     link: '/services/specialist-clinics'
        // }


    ]

    const ServicesCard = ({ title, description, link }: { title: string, description: string, link: string }) => {
        const Svg = (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <mask id="mask0_545_21822" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                <rect width="32" height="32" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_545_21822)">
                <path d="M10.6743 28.4103L9.25635 26.9923L20.2487 15.9999L9.25635 5.0076L10.6743 3.5896L23.0847 15.9999L10.6743 28.4103Z" fill="#222222" />
            </g>
        </svg>)
        return (
            
            <div className='space-y-3 md:space-y-4 border-b border-[#F0F0F0] pb-6 md:pb-8'>
                <h1 className='text-[#0B0A0B] text-xl md:text-2xl lg:text-[24px] font-weight-[500] leading-[24px] font-hornbill'>{title}</h1>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10'>
                    <div className='md:col-span-9'>
                        <p className='text-[#0B0A0B] text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>{description}</p>
                    </div>
                    <div className='md:col-span-3 flex items-center justify-end'>
                        <Link href={link}>{Svg}</Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='space-y-8 md:space-y-10 max-w-[800px] mx-auto mt-10 md:mt-20 px-4 md:px-0'>
            {servicesData.map((service, index) => (
                <ServicesCard key={index} title={service.title} description={service.description} link={service.link} />
            ))}
        </div>
    )
}