import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'

const tours = ({ data }) => {
  const { defaultBcg } = data

  return (
    <Layout>
      <StyledHero img={defaultBcg.childImageSharp.fluid} />
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

export default tours
