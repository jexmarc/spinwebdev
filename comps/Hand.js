import s from '../styles/Hand.module.css'
import { motion } from 'framer-motion'

const handVariants = {
  down: { y: 330 },
  up: { y: 0, transition: { duration: 0.2, ease: 'easeInOut', bounce: 0 } },
}

const Hand = ({ showHand, setShowHand }) => {
  const handState = showHand ? 'up' : 'down'
  return (
    <motion.div
      variants={handVariants}
      initial="down"
      animate={handState}
      className={s.spinhand}
    >
      <img src="/spinhand.svg" alt="spinweb hand" />
    </motion.div>
  )
}

export default Hand
