import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

export const Header = () => {
  return (
    <div className='flex flex-col'>
      <Banner />
      <MainHeader />
    </div>

  )
}


const Banner = () => {
  return (
    <div className='bg-primary p-4 text-white text-center'>
      <h1 className='text-white text-center'>
        Our culture begins with ‘our people’ and the need to encourage people to promote and adopt a healthy lifestyle
      </h1>
    </div>
  )
}




export const MainHeader = () => {
  return (

    <div className="flex justify-between items-center p-4">
      <div className='flex items-center gap-20'>
        <div>
          <Image src="/logo.svg" alt="Qlife" width={84} height={29} />
        </div>
        <div className='flex gap-5'>
          <h1>
            About
          </h1>
          <h1>
            Services
          </h1>
          <h1>
            eQonsult
          </h1>
          <h1>
            Booking
          </h1>
          <h1>
            Gallery
          </h1>
          <h1>
            Blog
          </h1>
        </div>

      </div>


      <div className='flex gap-5 items-center'>
        <Button variant='link' className='text-black'>
          Contact Us
        </Button>
        <Button variant='outline' className='border-primary text-primary p-[25px] rounded-[30px]'>
          Book an Appointment
        </Button>
      </div>
    </div>

  )
}
