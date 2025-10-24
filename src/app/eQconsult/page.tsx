import { EQHero } from '@/pageComponents/eQonsult/EQHero'
import { EQSection1 } from '@/pageComponents/eQonsult/EQSection1'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-[1920px] mx-auto w-full'>
      <EQHero />
      <EQSection1 />
      <FAQ />
      <CTA title='Ready to invest in your health?' description='Experience quality primary healthcare, dedicated to delivering exceptional, personalised care for you and your family.' buttonText='Book an appointment' />
    </div>
  )
}

export default page