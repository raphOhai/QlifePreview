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
        <CTA title='Ready to invest in your health?' description='Experience quality primary healthcare, dedicated to delivering exceptional, personalised care for you and your family.' buttonText='Book an appointment' />
      </div>
    </div>
  )
}

export default page