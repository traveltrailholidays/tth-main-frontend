'use client';

import Container from '@/components/ui/feature/Container'
import Section from '@/components/ui/feature/Section'
import Image from 'next/image'
import React, { useState } from 'react'

const SinglePackage = () => {

    const [singlePackage,setSinglePackage] = useState({})
    

  return (
    <Section>
        <Container>
            <Image 
                src={''}
                alt='location-image'
                width={100}
                height={100}
            />
        </Container>
    </Section>
  )
}

export default SinglePackage
