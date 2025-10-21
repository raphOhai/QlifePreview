import React from 'react'
import Image from 'next/image'

export const CSection3 = () => {
    return (
        <div className='space-y-8 md:space-y-10 py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-[48px]'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8'>
                <div className='md:col-span-6'>
                    <Section1 />
                </div>
                <div className='md:col-span-6 relative h-[320px] md:h-auto'>
                    <div className='relative h-[320px] md:h-[420px]'>
                        <Image src='/careers/3.webp' alt='Careers' width={2000} height={2000} className='w-1/2 h-[280px] md:h-[387px] aspect-106/129 object-cover  absolute top-6 md:top-75 left-0 border-b-[5px] md:border-b-[10px] border-[#FFF16F]' />
                        <Image src='/careers/4.webp' alt='Careers' width={2000} height={2000} className='w-1/2 h-[280px] md:h-[387px] aspect-106/129 object-cover  absolute bottom-6 md:bottom-[-650] right-0 border-b-[5px] md:border-b-[10px] border-[#FFF16F]' />
                    </div>
                </div>

            </div>
        </div>
    )
}



const Section1 = () => {
    return (
        <div className='space-y-10'>
            <h1 className='text-2xl md:text-3xl lg:text-[40px] font-weight-[400] leading-tight md:leading-[44px] lg:leading-[56px]  text-[#00186B] w-full md:w-3/4 lg:w-1/2 '>Join us and be part of something meaningful</h1>
            <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                A career at Q-Life Family Clinic is more than just a job—it’s an opportunity to make a difference. We are looking for passionate individuals who share our vision of improving healthcare standards and who are eager to grow in a supportive and dynamic environment.
            </p>

            <Image src='/careers/2.webp' alt='Careers' width={2000} height={2000} className='w-full h-[320px] md:h-[550px] lg:h-[775px] object-cover border-b-[5px] md:border-b-[10px] border-[#FFF16F]' />
            <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                We know that the quality of care we deliver is directly linked to the quality of people we hire. That’s why we foster an inclusive workplace built on respect, teamwork, and professional growth. When you join us, you join a family of healthcare professionals who are committed to excellence and compassion.
            </p>
            <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                If you’re ready to take the next step in your career and be part of a clinic where your skills and passion truly matter, we’d love to hear from you. Send your CV and profile to careers@qlifefamilyclinic.com and begin your journey with Q-Life Family Clinic today.
            </p>


            <button className='bg-[#00186B] text-white py-3 px-6 md:p-[24px] rounded-full text-sm md:text-base'>
                Join us
            </button>

        </div>
    )
}
