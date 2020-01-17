import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Contact from '../components/Contact/Contact'

const contact = ({ data }) => {
  const { connectBcg } = data
  return (
    <Layout>
      <StyledHero img={connectBcg.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact
