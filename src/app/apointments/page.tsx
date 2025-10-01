    import React from 'react'
import { ApointmentRoot } from '@/pageComponents/apointment/ApointmentForm'
import { FAQ } from '@/components/FAQ'

export default function page() {
  return (
    <div  className='max-w-[1920px] mx-auto w-full' >
        <ApointmentRoot />
        <FAQ/>  
    </div>
  )
}
