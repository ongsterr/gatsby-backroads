import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="Continue Exploring"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
      >
        <Link to="/tours" className="btn-white">
          Explore Tours
        </Link>
      </Banner>
    </SimpleHero>
  </Layout>
)
