import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FaAlignRight } from 'react-icons/fa'

import links from '../utils/links'
import socialIcons from '../utils/social-icons'
import logo from '../images/logo.svg'

import styles from '../css/navbar.module.css'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  const toggleNav = () => {
    setOpen(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="Backroads logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, i) => {
            return (
              <li key={i} className="">
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, i) => {
            return (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
