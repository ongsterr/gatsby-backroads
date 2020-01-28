import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getMetadata)

  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description || siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

const getMetadata = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
        twitterUsername
      }
    }
  }
`

export default SEO
