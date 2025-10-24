import { WCHero } from '@/pageComponents/services/WellnessClininc/WCHero'
import { WCSection2 } from '@/pageComponents/services/WellnessClininc/WCSection2'
import { WCSection3 } from '@/pageComponents/services/WellnessClininc/WCSection3'
import React from 'react'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'
const page = () => {
  return (
    <div className='space-y-5'>
      <div className='max-w-[1920px] mx-auto w-full'>
        <WCHero />
        <WCSection2 />
        <WCSection3 />
        <FAQ />
        <CTA title='Ready to invest in your health?' description='Experience quality primary healthcare, dedicated to delivering exceptional, personalised care for you and your family.' buttonText='Book an appointment' />
      </div>
    </div>
  )
}

export default page