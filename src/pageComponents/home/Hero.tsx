import { Button } from '@/components/ui/button'
import React from 'react'

export const Hero = () => {
 
    return (
        <div className='h-[min(78vh,1000px)] bg-cover bg-center bg-no-repeat relative overflow-hidden'
            style={{ backgroundImage: "url('/hero_background.webp')" }}>
            <div
                className='absolute left-0 w-full h-full'
                style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 45%, #000 100%)' }}>
            </div>
            <HeroContent />
        </div>
    )
}

const HeroContent = () => {
    return (
        <div className='absolute bottom-20 left-0 w-full z-10 p-4 md:p-6 lg:p-8'>
            <div className='max-w-[1920px] mx-auto'>
                <div className='space-y-10 md:gap-4'>
                    <h1 className='text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-weight-[400] color-[#F8F4EB]' style={{ fontFamily: 'var(--font-hornbill)' }}>
                        Exceptional Care. Healthcare Reimagined. Your First Step to Better Health
                    </h1>
                    <div className='h-[1px] w-full bg-[#F8F4EB]'></div>
                    <div className='grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4'>
                        <div className='md:col-span-6'>
                            <div className='flex flex-col sm:flex-row gap-3 md:gap-4'>
                                <Button className='bg-white text-primary py-3 px-6 md:p-[25px] rounded-[30px] text-sm md:text-base'>
                                    Book an appointment
                                </Button>
                                <Button variant='outline' className='bg-transparent border-white text-white py-3 px-6 md:p-[25px] rounded-[30px] text-sm md:text-base'>
                                    View our Services
                                </Button>
                            </div>
                        </div>
                        <div className='md:col-span-6'>
                            <div className='flex flex-col gap-2 md:gap-4'>
                                <h1 className='text-white text-sm md:text-base'>
                                    Experience healthcare as it should be. We offer prompt, patient-centered care in a warm, tranquil environment, aligning with global standards.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
