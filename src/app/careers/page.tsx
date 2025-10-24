import { ClinicCTA } from '@/components/ClinicCTA'
import { CTA } from '@/components/CTA'
import { CHero } from '@/pageComponents/careers/CHero'
import { CSection2 } from '@/pageComponents/careers/CSection2'
import { CSection3 } from '@/pageComponents/careers/CSection3'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-[1920px] mx-auto w-full'>
      <CHero />
      <CSection2 />
      <CSection3 />
      <ClinicCTA withButton={true} />
      <CTA title='Ready to invest in your health?' description='Experience quality primary healthcare, dedicated to delivering exceptional, personalised care for you and your family.' buttonText='Book an appointment' />
    </div>
  )
}

export default page