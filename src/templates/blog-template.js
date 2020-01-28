import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import styles from '../css/single-blog.module.css'

const BlogTemplate = ({ data }) => {
  const {
    title,
    publishedDate,
    text: { json },
  } = data.post

  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        return (
          <div className="rich">
            <img
              src={node.data.target.fields.file['en-US'].url}
              alt="images"
              width="400"
            />
          </div>
        )
      },
      'embedded-entry-block': node => {
        const { title, image, text } = node.data.target.fields
        return (
          <div>
            <br />
            <br />
            <br />
            <h1>This is another post: {title['en-US']}</h1>
            <img
              src={image['en-US'].fields.file['en-US'].url}
              alt="images"
              width="400"
            />
            {documentToReactComponents(text['en-US'])}
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <SEO title={title} />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at: {publishedDate}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post: contentfulPosts(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`

export default BlogTemplate
