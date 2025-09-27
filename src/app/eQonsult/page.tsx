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
      <CTA title='Ready to take charge of your health?' description='Experience the power of innovation firsthand and discover how out solutions can revolutionize your IT infrastructure. Contact us now for our wide range of IT services to you optimize your operations and achieve your goals.' buttonText='Book an appointment' />
    </div>
  )
}

export default page