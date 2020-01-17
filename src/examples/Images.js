import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import img from '../images/connectBcg.jpeg'

const getImages = graphql`
  query {
    fixed: file(name: { eq: "blogBcg" }) {
      childImageSharp {
        fixed(width: 300, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(name: { eq: "defaultBcg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const { fixed, fluid } = useStaticQuery(getImages)

  return (
    <Wrapper>
      <article>
        <h3>basic image</h3>
        <img src={img} alt="basic image" className="basic" />
      </article>
      <article>
        <h3>fixed image/blur</h3>
        <Img fixed={fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>fulid image/svg</h3>
        <Img fluid={fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  article {
    border: 1px solid red;
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`

export default Images
