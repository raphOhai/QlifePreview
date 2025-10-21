import Image from 'next/image'
import React from 'react'
import { leadCardsData } from './data'
import { managementCardsData } from './data'
import { Dialogue } from '@/components/Dialogue'

export const TMCards = () => {
    return (
        <div className='flex flex-col px-4 md:px-8 lg:px-[48px] py-12 md:py-16 lg:py-[96px] space-y-16 md:space-y-24 lg:space-y-30 '>
            <ManagementCards />
            <LeadsCards />
        </div>
    )
}





const LeadsCards = () => {
    return (
        <div className='space-y-20'>
            <h1 className='text-xl md:text-2xl lg:text-[24px] font-weight-[400] leading-[28px] md:leading-[32px] text-[#00186B]'>
                Management Team
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-4 md:space-x-10'>
                {leadCardsData.map((item, index) => (
                    <div className={`col-span-1 md:col-span-3 ${index % 2 === 1 ? 'mt-6 md:mt-[50px]' : 'mt-0'}`} key={`lead-${index}`}>
                        {/* <Cards image={item.image} title={item.title} description={item.description} /> */}
                        <Dialogue
                            triggerComponent={<Cards image={item.image} title={item.title} description={item.description} />}
                            content={<ModalContent image={item.image} title={item.title} description={item.description} 
                            bio={item.bio || ''} />} />
                    </div>
                ))}
            </div>
        </div>
    )
}



const ManagementCards = () => {
    return (
        <div className='space-y-20'>
            <h1 className='text-xl md:text-2xl lg:text-[24px] font-weight-[400] leading-[28px] md:leading-[32px] text-[#00186B]'>
                Departments & Team Leads
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-4 md:space-x-10'>
                {managementCardsData.map((item, index) => (

                    <div className={`col-span-1 md:col-span-3 ${index % 2 === 1 ? 'mt-6 md:mt-[50px]' : 'mt-0'}`} key={`mgmt-${index}`}>
                        <Dialogue
                            triggerComponent={<Cards image={item.image} title={item.title} description={item.description} />}
                            content={<ModalContent image={item.image} title={item.title} description={item.description} bio={item.bio} />} />
                    </div>
                ))}
            </div>
        </div>
    )
}


const ModalContent = ({ image, title, description, bio }: { image: string, title: string, description: string, bio: string }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 mt-4 md:mt-6 lg:mt-[30px] gap-4 md:gap-6 lg:gap-10 overflow-scroll">
            {/* Image - First on mobile, last on desktop */}
            <div className='order-1 md:order-3 lg:order-3 md:col-span-2 lg:col-span-4'>
                <Image 
                    src={image} 
                    alt={`${title} - Team Member`} 
                    width={430} 
                    height={504} 
                    className='w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[340px] xl:h-[420px] object-cover border-b-[3px] md:border-b-[4px] lg:border-b-[5px] border-[#FFF16F] rounded-t-lg' 
                />
            </div>
            
            {/* Title and Description */}
            <div className='order-2 md:order-1 lg:order-1 md:col-span-2 lg:col-span-4 space-y-3 md:space-y-4'>
                <h1 className='text-lg md:text-xl lg:text-[24px] font-weight-[500] leading-tight md:leading-[1.2] lg:leading-[28px] text-[#00186B]'>
                    {title}
                </h1>
                <p className='text-sm md:text-base lg:text-lg text-[#0B0A0B] leading-relaxed'>
                    {description}
                </p>
            </div>
            
            {/* Bio */}
            <div className='order-3 md:order-2 lg:order-2 md:col-span-2 lg:col-span-4'>
                <div className='space-y-2 md:space-y-3'>
                    <h2 className='text-base md:text-lg lg:text-xl font-medium text-[#00186B] mb-2 md:mb-3'>
                        Biography
                    </h2>
                    <p className='text-sm md:text-base lg:text-lg text-[#0B0A0B] leading-relaxed'>
                        {bio}
                    </p>
                </div>
            </div>
        </div>
    )
}






const Cards = ({ image, title, description }: { image: string, title: string, description: string }) => {
    return (
        <div className='flex flex-col gap-3 md:gap-4 pb-8 md:pb-10 '>
            <Image src={image} alt='image' width={430} height={504} className='w-full h-[260px] md:h-[340px] lg:h-[420px] object-cover border-b-[5px] border-[#FFF16F]' />
            <div className='flex flex-col gap-3 md:gap-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[#0B0A0B] text-base md:text-lg lg:text-[20px] font-500'>
                        {title}
                    </h1>
                    {/* <ArrowRightIcon className='w-6 h-6 text-[#0B0A0B]' /> */}
                </div>
                <p className='text-sm md:text-base'>
                    {description}
                </p>
            </div>
        </div>
    )
}





