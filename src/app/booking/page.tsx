import React from 'react'
import { BHero } from '@/pageComponents/booking/BHero'
import { BSection2 } from '@/pageComponents/booking/Bsection2'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'

const page = () => {
  return (
    <div className='max-w-[1920px] mx-auto w-full'>
      <BHero />
      <BSection2 />
      <FAQ />
      <CTA title='Ready to invest in your health?' description='Experience quality primary healthcare, dedicated to delivering exceptional, personalised care for you and your family.' buttonText='Book an appointment' />
    </div>
  )
}

export default page