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
        <CTA title='Achieve balance and long-term vitality. Invest in your health today' description='Prevention is the best medicine. At QLife Wellness Clinic, we make it easy to take charge of your health before issues arise. Schedule your screening today and build the foundation for a healthier future.' buttonText='Book a Wellness Screening' />
      </div>
    </div>
  )
}

export default page