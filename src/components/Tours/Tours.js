import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import TourList from './TourList'

const Tours = () => {
  const { tours } = useStaticQuery(getTours)

  return (
    <div>
      <TourList tours={tours} />
    </div>
  )
}

const getTours = graphql`
  query {
    tours: allContentfulTours {
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

export default Tours
