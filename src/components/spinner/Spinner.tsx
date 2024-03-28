'use client'
import Image from 'next/image'
import React from 'react'
import { SpinnerWrapper } from './styles'

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Image src='/img/spinner.png' alt='' width={83} height={83}/>
    </SpinnerWrapper>
  )
}

export default Spinner



