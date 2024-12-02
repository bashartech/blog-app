import { Footer } from '@/components/Footer'
import { Section1 } from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import React from 'react'

export default function HomePage() {
  return (
    <div className='font-robot overflow-hidden'>
      <Section1/>
      <Section3/>
      <Section2/>
      <Footer/>
    </div>
  )
}
