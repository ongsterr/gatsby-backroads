import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Tour from '../Tours/Tour'
import Title from '../Title'

import styles from '../../css/items.module.css'

const FeaturedTours = () => {
  const { featuredTours } = useStaticQuery(getFeaturedTours)
  const tours = featuredTours.edges.map(({ node }, i) => {
    return <Tour key={node.contentful_id} tour={node} />
  })

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>{tours}</div>
      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  )
}

const getFeaturedTours = graphql`
  query {
    featuredTours: allContentfulTours(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default FeaturedTours
