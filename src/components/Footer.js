import React from 'react'
import { Link } from 'gatsby'
import { FaRProject } from 'react-icons/fa'

import links from '../utils/links'
import socialIcons from '../utils/social-icons'

import styles from '../css/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, i) => {
          return (
            <Link key={i} to={item.path}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, i) => {
          return (
            <a key={i} href={item.url} target="blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; Backroads Travel Company {new Date().getFullYear()} All
        rights reserved
      </div>
    </footer>
  )
}

export default Footer
