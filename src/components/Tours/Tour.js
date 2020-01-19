import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'

import styles from '../../css/tour.module.css'

const Tour = ({ tour }) => {
  const { image } = useStaticQuery(getImage)
  const { name, price, country, days, slug, images } = tour
  const mainImage = images ? images[0].fluid : image.childImageSharp.fluid

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Img fluid={mainImage} className={styles.img} alt="single tour" />
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

const getImage = graphql`
  query {
    image: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default Tour
