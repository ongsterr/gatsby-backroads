import React from 'react'
// import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import SEO from '../components/SEO'

import styles from '../css/error.module.css'

const error = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <header className={styles.error}>
        <Banner title="oops its a dead end">
          <AniLink fade to="/" className="btn-white">
            Back to homepage
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
