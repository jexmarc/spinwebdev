import Nav from './Nav'
import Link from 'next/link'
import s from '../styles/Header.module.css'
import { motion } from 'framer-motion'

const Header = ({ setShowHand, setSpinWeb, setWebGrab }) => {
  const titleVariants = {
    tiltLeft: {
      rotate: -10,
      transition: {
        delay: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 7,
      },
    },
    tiltRight: {
      rotate: 10,
      transition: {
        delay: 1,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 6,
      },
    },
    grow: {
      scale: [1, 1.3, 1],
      transition: {
        delay: 1.5,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 5,
      },
    },
  }

  return (
    <header className={s.headwrap}>
      <Link href="/">
        <a>
          <h1 className={s.header1}>
            <motion.span
              variants={titleVariants}
              animate="tiltLeft"
              className={s.spintext}
            >
              SPIN
            </motion.span>
            <motion.span
              variants={titleVariants}
              animate="grow"
              className={s.webtext}
            >
              WEB
            </motion.span>
            <motion.span
              variants={titleVariants}
              animate="tiltRight"
              className={s.devtext}
            >
              DEV
            </motion.span>
          </h1>
        </a>
      </Link>
      <Nav
        setShowHand={setShowHand}
        setSpinWeb={setSpinWeb}
        setWebGrab={setWebGrab}
      />
    </header>
  )
}

export default Header
