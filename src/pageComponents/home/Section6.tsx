import Image from 'next/image'
import React from 'react'

export const Section6 = () => {
    return (
        <div className='py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-[48px]'>
            <div className='max-w-[1920px] mx-auto flex flex-col gap-6 md:gap-8'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4'>

                    <div className='hidden md:block md:col-span-4'>

                    </div>

                    <div className='md:col-span-8'>
                        <div className='flex flex-col gap-3 md:gap-4'>
                            <h1 className='text-[#0B0A0B] text-base md:text-lg lg:text-[20px] font-weight-[400] leading-tight md:leading-[40px] lg:leading-[56px]'>
                                Recent Posts
                            </h1>
                            <p className='text-[#00186B] text-2xl md:text-3xl lg:text-[40px] font-weight-[400] leading-tight md:leading-[44px] lg:leading-[56px]'>
                                Practical tips for healthier, happier living
                            </p>
                            <p className='text-[#0B0A0B] text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                                At QLife, we believe that knowledge is key to good health. Our blog brings you valuable insights on prevention, treatment, and living well. Whether you&apos;re seeking expert guidance or everyday tips, you&apos;ll find resources here to support your journey.
                            </p>

                        </div>

                    </div>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 mt-8 md:mt-10'>
                    <div className='md:col-span-4'>
                        <Cards image='/home/section4/1.webp' title='Waka with Q Life & HEI' description='Waka with Q-Life & HEI is a 9km walk a memorial event in honour of Dr. Ade Alakija (former medical director of Q-Life Family Clinic).' name='Babajide Claudius-Cole' date='July 08, 2025' />
                    </div>
                    <div className='md:col-span-4'>
                        <Cards image='/home/section4/2.webp' title='5th year remembrance of Dr. Funmi Alakija' description='Dr Funmi Alakija was a kind, compassionate soul who touched the lives of many people. Her warmth and generosity continue to inspire us.' name='Babajide Claudius-Cole' date='July 08, 2025' />
                    </div>
                    <div className='md:col-span-4'>
                        <Cards image='/home/section4/3.webp' title='Happy International Women&apos;s Day' description='At Q-Life Family Clinic, we believe women need to be in a position of power to make informed decisions about their health and make it a priority.' name='Babajide Claudius-Cole' date='July 08, 2025' />
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <button className='bg-[#00186B] text-white py-3 px-6 md:p-[24px] rounded-full text-sm md:text-base'>
                        View articles
                    </button>
                </div>
            </div>
        </div>
    )
}





const Cards = ({ image, title, description, name, date }: { image: string, title: string, description: string, name: string, date: string }) => {
    const seperator = (<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
        <circle cx="2" cy="2" r="2" fill="#E6E6E6" />
    </svg>)


    return (
        <div className='flex flex-col gap-3 md:gap-4 pb-8 md:pb-10 '>
            <Image src={image} alt='image' width={430} height={504} className='w-full h-[300px] md:h-[400px] lg:h-[503px] object-cover border-b-[5px] border-[#FFF16F]' />

            <div className='flex flex-col gap-3 md:gap-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[#0B0A0B] text-lg md:text-xl lg:text-[20px] font-500'>
                        {title}
                    </h1>
                    {/* <ArrowRightIcon className='w-6 h-6 text-[#0B0A0B]' /> */}
                </div>

                <p className='text-[#0B0A0B] text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                    {description}
                </p>


                <div className='flex items-center gap-2'>
                    <p className='text-[#707070] text-xs md:text-sm lg:text-[14px] font-weight-[400] leading-[24px]'>
                        {name}
                    </p>
                    {seperator}
                    <p className='text-[#707070] text-xs md:text-sm lg:text-[14px] font-weight-[400] leading-[24px]'>
                        {date}
                    </p>
                </div>
            </div>

        </div>
    )
}