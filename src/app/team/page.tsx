    import { TMHero } from '@/pageComponents/team/TMHero'
import { TMCards } from '@/pageComponents/team/TMCards'
import React from 'react'
import { ClinicCTA } from '@/components/ClinicCTA'

const page = () => {
  return (
    <div className='max-w-[1920px] mx-auto w-full'>
      <TMHero />
      <TMCards />
      <ClinicCTA withButton={true} />
    </div>
  )
}

export default page