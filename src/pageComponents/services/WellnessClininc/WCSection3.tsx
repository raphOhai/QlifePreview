import React from 'react'

export const WCSection3 = () => {
    const CardsData = [
        {
            title: 'Comprehensive Health Screenings',
            description: 'Our comprehensive screenings are designed to give you a clear picture of your health today and identify any risks for tomorrow. These assessments cover essential body functions, from cardiovascular health to metabolic performance, and include laboratory and diagnostic tests tailored to your needs. By detecting potential issues early, we provide you with the information and tools to take proactive steps toward lasting health and peace of mind.'
        },
        
        {
            title: 'Comprehensive Health Screenings 2',
            description: 'Our comprehensive screenings are designed to give you a clear picture of your health today and identify any risks for tomorrow. These assessments cover essential body functions, from cardiovascular health to metabolic performance, and include laboratory and diagnostic tests tailored to your needs. By detecting potential issues early, we provide you with the information and tools to take proactive steps toward lasting health and peace of mind.'
        },
        
        {
            title: 'Comprehensive Health Screenings 3',
            description: 'Our comprehensive screenings are designed to give you a clear picture of your health today and identify any risks for tomorrow. These assessments cover essential body functions, from cardiovascular health to metabolic performance, and include laboratory and diagnostic tests tailored to your needs. By detecting potential issues early, we provide you with the information and tools to take proactive steps toward lasting health and peace of mind.'
        },
        
        {
            title: 'Comprehensive Health Screenings 4',
            description: 'Our comprehensive screenings are designed to give you a clear picture of your health today and identify any risks for tomorrow. These assessments cover essential body functions, from cardiovascular health to metabolic performance, and include laboratory and diagnostic tests tailored to your needs. By detecting potential issues early, we provide you with the information and tools to take proactive steps toward lasting health and peace of mind.'
        },
        
    ]
  return (
    <div className='space-y-10 max-w-[900px] mx-auto py-[96px]'>
        {CardsData.map((card, index) => (
            <Cards key={index} title={card.title} description={card.description} index={index} />
        ))}
    </div>
  )
}


const Cards = ({ title, description, index }: { title: string, description: string, index: number }) => {
  return (
    <div className='space-y-10 border-b border-[#F0F0F0] pb-8'>
        <div className='w-[70px] h-[60px] rounded-full bg-[#F0F0F0] flex items-center justify-center'>
            <p className='text-[#222] text-[23px] font-weight-[700] leading-[24px]'>
                0{index + 1}
            </p>
        </div>
        <div className='space-y-4'>

 
        <h1 className='text-[#0B0A0B] text-[20px] font-weight-[500] leading-[24px]'>
        {title}
        </h1>

        <p className='text-[#0B0A0B] text-[16px] font-weight-[400] leading-[24px]'>
        {description}
        </p>
        </div>

    </div>
  )
}