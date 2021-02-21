import React, { useState } from 'react'
import Header from '../comps/Header'
import Sidebar from '../comps/Sidebar'
import Footer from '../comps/Footer'
import Hand from '../comps/Hand'
import Webspin from '../comps/Webspin'
import s from '../styles/Home.module.css'

const Layout = ({ children }) => {
  const [showHand, setShowHand] = useState(false)
  const [spinWeb, setSpinWeb] = useState(false)
  const [webGrab, setWebGrab] = useState(false)

  return (
    <div className={s.container}>
      <Header
        showHand={showHand}
        setShowHand={setShowHand}
        spinWeb={spinWeb}
        setSpinWeb={setSpinWeb}
        webGrab={webGrab}
        setWebGrab={setWebGrab}
      />
      <div>{children}</div>
      <Footer />
      <Webspin
        spinWeb={spinWeb}
        setSpinWeb={setSpinWeb}
        webGrab={webGrab}
        setWebGrab={setWebGrab}
      />
      <Hand showHand={showHand} setShowHand={setShowHand} />
    </div>
  )
}

export default Layout
