import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const StyledHero = ({ img, className, children, home }) => {
  const { defaultBcg } = useStaticQuery(getImage)
  return (
    <BackgroundImage
      className={className}
      fluid={img || defaultBcg.childImageSharp.fluid}
      home={home}
    >
      {children}
    </BackgroundImage>
  )
}

const getImage = graphql`
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

export default styled(StyledHero)`
  min-height: ${({ home }) => (home ? 'calc(100vh - 62px)' : '50vh')};
  background: ${({ home }) =>
    home
      ? 'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))'
      : 'none'};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
