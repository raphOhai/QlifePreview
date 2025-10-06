import React from 'react'
import { CArt1 } from '../svgs/CArt1'

export const CSection2 = () => {
    return (
        <div className='space-y-1'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4'>
                <div className='hidden md:block md:col-span-4'>

                </div>
                <div className='md:col-span-8'>
                    <div className='py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-[48px] space-y-8 md:space-y-10'>
                        <h1 className='text-base md:text-lg lg:text-[20px] font-weight-[400] leading-[24px]'>
                            Why join us
                        </h1>
                        <h2 className='text-3xl md:text-4xl lg:text-[48px] font-weight-[400] leading-tight md:leading-[48px] lg:leading-[56px] font-hornbill text-[#00186B] '>
                            Experience a workplace that values your growth, creativity and wel-being.
                        </h2>
                        <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                            Choosing a career with Q-Life means becoming part of a forward-thinking healthcare team committed to excellence. We recognize that a capable and contented employee is vital to delivering the quality of care our clients deserve. That’s why we prioritize respect, collaboration, and professional growth in everything we do.
                        </p>
                        <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                            At Q-Life, you’ll find an environment where your dedication, creativity, and initiative are valued. From opportunities for advanced training to exposure to modern healthcare practices, we give our employees the tools and support to thrive in their careers while making a real difference in the community.
                        </p>
                        <div className='py-10'>
                            <Qualities />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' relative border-b border-[#F0F0F0] h-[120px] md:h-[160px] lg:h-[200px]'>
                <div className='relative h-full max-w-[1920px] mx-auto'>
                    <div className='absolute bottom-0 left-0'>
                        <CArt1 />
                    </div>
                </div>
            </div>  
        </div>
    )
}

const Qualities = () => {

    const QualitiesCard = ({ title, description }: { title: string, description: string }) => {
        return (
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4 border-b border-[#C5E4F6] pb-6 md:pb-8'>
                <div className='md:col-span-5'>
                    <h1 className='text-3xl md:text-4xl lg:text-[48px] font-weight-[400] leading-[24px] text-[#00186B]'>
                        {title}
                    </h1>
                </div>
                <div className='md:col-span-7 md:justify-self-end'>
                    <p className='text-base md:text-lg lg:text-[20px] font-weight-[400] leading-[24px]'>
                        {description}
                    </p>
                </div>


            </div>
        )
    }
    return (
        <div className='grid grid-cols-12 space-y-20 space-x-15'>
            <div className='col-span-6'>
                <QualitiesCard title='25 yrs' description='Quality Healthcare Delivery ' />
            </div>
            <div className='col-span-6'>

                <QualitiesCard title='+10,000' description='Patients served Annually' />
            </div>

            <div className='col-span-6'>

                <QualitiesCard title='95%' description='Patient Satisfaction Rate' />
            </div>

            <div className='col-span-6'>
                <QualitiesCard title='121' description='Skilled Healthcare Professionals' />
            </div>
        </div>
    )
}
