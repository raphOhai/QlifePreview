import React from 'react'
import { CHero } from '@/pageComponents/contact/CHero'
import { ContactForm } from '@/pageComponents/contact/ContactForm'
import { Map } from '@/pageComponents/contact/Map'

const page = () => {
  return (
    <div className='max-w-[1920px] mx-auto w-full'>
      <CHero />
      <ContactForm />
      <div className='px-[48px] py-[96px]'>
        <Map />
      </div>
    </div>
  )
}

export default page