import React from 'react'
import { TCHero } from '@/pageComponents/services/TravelClinic/TCHero'
import { TCSection2 } from '@/pageComponents/services/TravelClinic/TCSection2'
import { TcSection3 } from '@/pageComponents/services/TravelClinic/TcSection3'
import { CTA } from '@/components/CTA'
import { FAQ } from '@/components/FAQ'

const page = () => {
  return (
    <div className='flex flex-col'>
      <div className='max-w-[1920px] mx-auto w-full'>
        <TCHero />
        <TCSection2 />
        <TcSection3 />
        <FAQ />
        <CTA title='Stay protected, stay healthy. Take control of your health today.' description='Book an appointment with our experienced clinicians and access personalized healthcare solutions. At QLife Travel Clinic, we make it simple to prioritize your well-being. Start your journey to better health today.' buttonText='Book Your Travel Consultation' />
      </div>
    </div>
  )
}

export default page