import { Button } from '@/components/ui/button'
import React from 'react'

export const Hero = () => {
 
    return (
        <div
            className='h-[min(90vh,1500px)] bg-cover bg-center bg-no-repeat relative overflow-hidden'
            style={{ backgroundImage: "url('/hero_background.webp')" }}
        >
            <div
                className='absolute left-0 w-full h-full'
                style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 45%, #000 100%)' }}
            >
            </div>
            <HeroContent />
        </div>
    )
}



const HeroContent = () => {
    return (
        <div className='absolute bottom-0 left-0 w-full z-10 p-8'>
            <div className='max-w-[1920px] mx-auto'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-white text-5xl font-weight-[400] color-[#F8F4EB]' style={{ fontFamily: 'var(--font-hornbill)' }}>Exceptional Care. Healthcare Reimagined. Your First Step to Better Health</h1>
                    <div className='h-[1px] w-full bg-[#F8F4EB]'>
                    </div>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-6'>
                            <div className='flex flex-row gap-4'>
                                <Button className='bg-white text-primary p-[25px] rounded-[30px]'>
                                    Book an appointment
                                </Button>
                                <Button variant='outline' className=' bg-transparent border-white text-white p-[25px] rounded-[30px]'>
                                    View our Services
                                </Button>
                            </div>
                        </div>
                        <div className='col-span-6'>
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-white' >
                                    Experience healthcare as it should be. We offer prompt, patient-centered care in a warm, tranquil environment, aligning with global standards.
                                </h1>
                                <p className='text-white'>
                                    Experience healthcare as it should be.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
