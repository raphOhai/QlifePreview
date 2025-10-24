import React from 'react'
import { GCHero } from '@/pageComponents/services/GeneralClinic/GCHero'
import { GCSection2 } from '@/pageComponents/services/GeneralClinic/GCSection2'
import { GCSection3 } from '@/pageComponents/services/GeneralClinic/GCSection3'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'

const page = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='max-w-[1920px] mx-auto w-full'>
        <GCHero />
        <GCSection2 />
        <GCSection3 />
        <FAQ />
        <CTA title='Ready to invest in your health?' description='Experience quality primary healthcare, dedicated to delivering exceptional, personalised care for you and your family.' buttonText='Book an appointment' />
      </div>
    </div>
  )
}

export default page