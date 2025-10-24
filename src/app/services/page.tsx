import React from 'react'
import { ServicesPage } from '@/pageComponents/services/rootservices/RSHero'
import { RSSection1 } from '@/pageComponents/services/rootservices/RSSection1'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'

const page = () => {
  return (
    <div className='max-w-[1920px] mx-auto w-full'>
      <ServicesPage />
      <RSSection1 />
      <FAQ />
      <CTA title='Ready to invest in your health?' description='Experience quality primary healthcare, dedicated to delivering exceptional, personalised care for you and your family.' buttonText='Book an appointment' />
    </div>
  )
}

export default page