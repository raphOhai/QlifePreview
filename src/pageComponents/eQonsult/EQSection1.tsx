import React from 'react'

export const EQSection1 = () => {
    return (
        <div className='space-y-8 md:space-y-10 py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-[48px]'>
            <div className='space-y-4 md:space-y-6 w-full md:w-[80%] lg:w-[70%]'>
                <h1 className='text-base md:text-lg font-weight-[400] leading-[24px]'>
                    Quality medical care from the comfort of home.
                </h1>
                <h1 className='text-3xl md:text-4xl lg:text-[48px] font-weight-[400] leading-tight lg:leading-[56px] text-[#00186B]'>
                    Compassionate care built on prevention and trust. Delivering comprehensive primary care that puts you first.
                </h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10'>
                <div className='md:col-span-6 space-y-6 md:space-y-8 lg:space-y-10'>
                    <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                        Life doesn’t always make it easy to visit the clinic. With eQonsult, you can schedule appointments, speak directly with your doctor, and get medical guidance from the comfort of your home or office. Whether it’s a routine check-up, follow-up consultation, or urgent concern, you’re only a call away from professional care.
                    </p>
                    <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px]'>
                        Our telemedicine service ensures confidentiality and continuity of care, just like an in-person visit. Prescriptions, refills, and medical notes can be arranged digitally, with delivery support where needed. eQonsult gives you flexibility, accessibility, and peace of mind without compromising on quality.
                    </p>

                    <button className='bg-[#00186B] text-white py-3 px-6 md:p-[24px] rounded-full text-sm md:text-base'>
                        Book an Appointment
                    </button>
                </div>
                <div className='md:col-span-6'>
                    <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px] mt-4 md:mt-8'>
                        Behind every consultation is a skilled team of doctors, nurses, pharmacists, and laboratory scientists. Together, they provide the expertise and support you need, ensuring that your health and quality of life remain our top priority.
                    </p>
                </div>
            </div>

        </div>
    )
}
