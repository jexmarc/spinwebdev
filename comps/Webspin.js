import s from '../styles/Webspin.module.css'
import { motion } from 'framer-motion'

const Webspin = ({ spinWeb, webGrab }) => {
  const weblineVariants = {
    down: { y: 700 },
    up: {
      y: 0,
      transition: { duration: 0.2, ease: 'easeInOut', bounce: 0, dampen: 300 },
    },
  }
  const webgrabVariants = {
    hide: { opacity: 0, transition: { duration: 0.01 } },
    slideDown: { y: 700 },
    show: { opacity: 1, transition: { duration: 0.01 } },
  }

  const weblineState = spinWeb ? 'up' : 'down'
  const webgrabState = webGrab ? 'show' : 'hide'

  return (
    <div>
      <motion.div
        className={s.webgrab}
        variants={webgrabVariants}
        initial="hide"
        animate={webgrabState}
      >
        X<span>+</span>
      </motion.div>
      <motion.div
        className={s.webline}
        variants={weblineVariants}
        initial="down"
        animate={weblineState}
      ></motion.div>
    </div>
  )
}

export default Webspin
