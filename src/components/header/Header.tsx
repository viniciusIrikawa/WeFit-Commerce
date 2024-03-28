'use client'
import React from 'react'
import Cart from '../cart/Cart'
import { HeaderWrapper, WebsiteName } from './styles'

const Header = () => {
  return (
    <HeaderWrapper>
      <WebsiteName> WeMovies</WebsiteName>
      <div>
        <Cart/>
      </div>
    </HeaderWrapper>
  )
}

export default Header