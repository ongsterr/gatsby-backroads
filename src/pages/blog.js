import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
// import Images from '../examples/Images'
import StyledHero from '../components/StyledHero'
import BlogList from '../components/Blog/BlogList'
import SEO from '../components/SEO'

const blog = ({ data }) => {
  const { blogBcg } = data

  return (
    <Layout>
      <SEO title="Blog" />
      <StyledHero img={blogBcg.childImageSharp.fluid} />
      <BlogList />
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
