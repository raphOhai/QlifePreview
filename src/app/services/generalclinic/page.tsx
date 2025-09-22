import React from 'react'
import { GCHero } from '@/pageComponents/services/GeneralClinic/GCHero'
import { GCSection2 } from '@/pageComponents/services/GeneralClinic/GCSection2'
import { GCSection3 } from '@/pageComponents/services/GeneralClinic/GCSection3'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'

const page = () => {
  return (
    <div className='flex flex-col gap-5'>
      <GCHero />
      <GCSection2 />
      <GCSection3 />
      <FAQ />
      <CTA title='Stay protected, stay healthy. Take control of your health today.' description='Book an appointment with our experienced clinicians and access personalized healthcare solutions. At QLife General Clinic, we make it simple to prioritize your well-being. Start your journey to better health today.' buttonText='Book Your Travel Consultation' />
    </div>
  )
}

export default page