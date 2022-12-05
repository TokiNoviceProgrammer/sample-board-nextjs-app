import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
    children: ReactNode
}

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout
