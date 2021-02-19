import Nav from './Nav'
import s from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={s.headwrap}>
      <h1 className={s.header1}>
        <span className={s.spintext}>SPIN</span> WEB{' '}
        <span className={s.devtext}>DEV</span>
      </h1>
      <Nav />
    </header>
  )
}

export default Header
