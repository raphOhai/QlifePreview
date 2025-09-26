import { CHero } from '@/pageComponents/careers/CHero'
import { CSection2 } from '@/pageComponents/careers/CSection2'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-[1920px] mx-auto w-full'>
      <CHero />
      <CSection2 />
    </div>
  )
}

export default page