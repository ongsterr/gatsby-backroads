import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import BlogCard from './BlogCard'
import Title from '../Title'
import styles from '../../css/blog.module.css'

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)

  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="blogs" />
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.contentful_id} blog={node} />
        })}
      </div>
    </section>
  )
}

const getPosts = graphql`
  query {
    posts: allContentfulPosts(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          title
          slug
          createdAt(formatString: "MMM Do, YYYY")
          contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default BlogList
