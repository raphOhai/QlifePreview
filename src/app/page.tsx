'use client'

import { Hero } from '@/pageComponents/home/Hero'
import { Section2 } from '@/pageComponents/home/Section2'
import Section3 from '@/pageComponents/home/Section3'
import { Section4 } from '@/pageComponents/home/Section4'
import { Section5 } from '@/pageComponents/home/Section5'
import { Section6 } from '@/pageComponents/home/Section6'
import { CTA } from '@/components/CTA'

export default function Home() {

  return (
    <div className="min-h-screen ">
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <CTA title='Ready to invest in your health?' description='Experience quality primary healthcare, dedicated to delivering exceptional, personalised care for you and your family.' buttonText='Book an appointment' />
    </div>
  )
}