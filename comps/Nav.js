import s from '../styles/Nav.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Nav = ({ setShowHand, setSpinWeb, setWebGrab }) => {
  const handleMouseEnter = () => setShowHand(true)
  const handleMouseLeave = () => setShowHand(false)
  const handleMouseClick = () => {
    setShowHand(true)
    setSpinWeb(true)
    setTimeout(() => {
      setWebGrab(true)
    }, 225)
    setTimeout(() => {
      setWebGrab(false)
      setSpinWeb(false)
    }, 600)
  }

  return (
    <nav className={s.navwrap}>
      <Link href="/">
        <motion.a
          whileHover={{ scale: 1.1 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
          className={s.link}
        >
          Home
        </motion.a>
      </Link>
      <Link href="/about">
        <motion.a
          whileHover={{ scale: 1.1 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
          className={s.link}
        >
          About
        </motion.a>
      </Link>
      <Link href="/contact">
        <motion.a
          className={s.link}
          whileHover={{ scale: 1.1 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
        >
          Contact
        </motion.a>
      </Link>
    </nav>
  )
}

export default Nav
