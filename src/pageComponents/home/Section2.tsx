import React from 'react'

export const Section2 = () => {
    return (
        <div className='bg-primary p-4 py-[96px] px-[48px] flex flex-col gap-20'>
            <div className='flex flex-col gap-4 w-1/2'>
                <h1 className='text-[#FFF16F] text-[48px] font-weight-[400] leading-[56px]'>
                    We provide prompt and efficient world-class health care services that our clients deserve.
                </h1>

                <p className='text-white text-[16px] font-weight-[400] leading-[24px]'>
                    The primary should be the first point of contact with the health care services. We work with you to ensure credibility and accountability into the delivery of health care.
                </p>

       
            </div>
            <Section2Content />
        </div>
    )
}


const Section2Content = () => {
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-4'>
                <div className="flex flex-col gap-2">
                    <h1 className='text-white text-[48px] font-weight-[400] leading-[56px]'>
                        80%
                    </h1>
                    <div className='h-[1px] w-full bg-white' />

                    <div className="flex flex-col gap-1">
                        <h1 className='text-white text-[20px] leading-[56px] font-bold'>
                            Healthcare Excellence
                        </h1>
                        <p className='text-white text-[16px] font-weight-[400] leading-[24px]'>
                            Our team of experienced healthcare professionals is dedicated to providing the highest quality of care to our patients.
                        </p>

                    </div>
                </div>
            </div>
            <div className='col-span-4'>
                <div className="flex flex-col gap-2">
                    <h1 className='text-white text-[48px] font-weight-[400] leading-[56px]'>
                        80%
                    </h1>
                    <div className='h-[1px] w-full bg-white' />

                    <div className="flex flex-col gap-1">
                        <h1 className='text-white text-[20px] leading-[56px] font-bold'>
                            Healthcare Excellence
                        </h1>
                        <p className='text-white text-[16px] font-weight-[400] leading-[24px]'>
                            Our team of experienced healthcare professionals is dedicated to providing the highest quality of care to our patients.
                        </p>

                    </div>
                </div>
            </div>
            <div className='col-span-4'>
                        <div className="flex flex-col gap-2">
                    <h1 className='text-white text-[48px] font-weight-[400] leading-[56px]'>
                        80%
                    </h1>
                    <div className='h-[1px] w-full bg-white' />

                    <div className="flex flex-col gap-1">
                        <h1 className='text-white text-[20px] leading-[56px] font-bold'>
                            Healthcare Excellence
                        </h1>
                        <p className='text-white text-[16px] font-weight-[400] leading-[24px]'>
                            Our team of experienced healthcare professionals is dedicated to providing the highest quality of care to our patients.
                        </p>

                    </div>
                </div>
            </div>

        </div>
    )
}





