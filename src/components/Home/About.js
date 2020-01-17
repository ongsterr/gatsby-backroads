import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Title from '../Title'
// import img from '../../images/defaultBcg.jpeg'

import styles from '../../css/about.module.css'

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <div className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            repellat dolore nobis. Nihil laborum officiis aliquam quam
            exercitationem quas necessitatibus!
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </div>
  )
}

export default About
