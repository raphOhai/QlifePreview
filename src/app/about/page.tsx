import React from 'react'
import { ABHero } from '@/pageComponents/about/ABHero'
import { ABSection1 } from '@/pageComponents/about/ABSection1'
import ABSection2 from '@/pageComponents/about/ABSection2'
import { ABSection3 } from '@/pageComponents/about/ABSection3'
import { ABSection4 } from '@/pageComponents/about/ABSection4'
import { ClinicCTA } from '@/components/ClinicCTA'
import { CTA } from '@/components/CTA'

const page = () => {
  return (
    <div className='max-w-[1920px] mx-auto w-full space-y-2'>
      <ABHero />
      <ABSection1 />
      <ABSection2 />
      <ABSection3 />
      <ABSection4 />
      <ClinicCTA />
      <CTA title='Ready to take charge of your health?' description='Experience the power of innovation firsthand and discover how out solutions can revolutionize your IT infrastructure. Contact us now for our wide range of IT services to you optimize your operations and achieve your goals.' buttonText='Book an appointment' />
    </div>
  )
}

export default page