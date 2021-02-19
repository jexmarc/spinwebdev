import s from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={s.navwrap}>
      <a className={s.link} href="/">
        Home
      </a>
      <a className={s.link} href="/about.html">
        About
      </a>
      <a className={s.link} href="/contact.html">
        Contact
      </a>
    </nav>
  )
}

export default Nav
