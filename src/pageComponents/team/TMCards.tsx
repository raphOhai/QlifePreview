import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { leadCardsData } from './data'
import { managementCardsData } from './data'

export const TMCards = () => {
    return (
        <div className='flex flex-col px-[48px] py-[96px] space-y-30 '>
            <ManagementCards />
            <LeadsCards />
        </div>
    )
}





const LeadsCards = () => {
    return (
        <div className='space-y-20'>
            <h1 className='text-[24px] font-weight-[400] leading-[32px] text-[#00186B]'>
                Management Team
            </h1>
            <div className='grid grid-cols-12 gap-4 space-x-10'>
                {leadCardsData.map((item, index) => (
                    <div className={`col-span-3 ${index % 2 === 1 ? 'mt-[50px]' : 'mt-0'}`} key={`lead-${index}`}>
                        <Cards image={item.image} title={item.title} description={item.description} />
                    </div>
                ))}
            </div>
        </div>
    )
}



const ManagementCards = () => {
    return (
        <div className='space-y-20'>
            <h1 className='text-[24px] font-weight-[400] leading-[32px] text-[#00186B]'>
                Departments & Team Leads
            </h1>
            <div className='grid grid-cols-12 gap-4 space-x-10'>
                {managementCardsData.map((item, index) => (
                    <div className={`col-span-3 ${index % 2 === 1 ? 'mt-[50px]' : 'mt-0'}`} key={`mgmt-${index}`}>
                        <Cards image={item.image} title={item.title} description={item.description} />
                    </div>
                ))}
            </div>
        </div>
    )
}






const Cards = ({ image, title, description }: { image: string, title: string, description: string }) => {
    return (
        <div className='flex flex-col gap-4 pb-10 '>
            <Image src={image} alt='image' width={430} height={504} className='w-full h-[420px] object-cover border-b-[5px] border-[#FFF16F]' />
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[#0B0A0B] text-[20px] font-500'>
                        {title}
                    </h1>
                    {/* <ArrowRightIcon className='w-6 h-6 text-[#0B0A0B]' /> */}
                </div>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}