import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/Layout'
// import SimpleHero from '../components/SimpleHero'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

export default ({ data }) => {
  const { defaultBcg } = data

  return (
    <Layout>
      <StyledHero img={defaultBcg.childImageSharp.fluid} home={true}>
        <Banner
          title="Continue Exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        >
          <AniLink fade to="/tours" className="btn-white">
            Explore Tours
          </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
