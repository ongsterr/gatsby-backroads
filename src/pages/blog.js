import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
// import Images from '../examples/Images'
import StyledHero from '../components/StyledHero'

const blog = ({ data }) => {
  const { blogBcg } = data

  return (
    <Layout>
      <StyledHero img={blogBcg.childImageSharp.fluid} />
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
