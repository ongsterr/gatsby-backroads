import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/Layout'
import Title from '../components/Title'
import BlogCard from '../components/Blog/BlogCard'

import styles from '../css/blog.module.css'

const BlogTemplate = props => {
  const { data } = props
  const { currentPage, numPages } = props.pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage = currentPage - 1 <= 1 ? '' : currentPage - 1
  const nextPage = numPages === currentPage ? currentPage : currentPage + 1

  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts"></Title>
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => {
            return <BlogCard key={node.id} blog={node} />
          })}
        </div>
        <section className={styles.links}>
          {!isFirst && (
            <AniLink fade to={`/blogs/${prevPage}`} className={styles.link}>
              Prev
            </AniLink>
          )}
          {Array.from({ length: numPages }, (_, i) => {
            return (
              <AniLink
                fade
                key={i}
                to={`/blogs/${i > 0 ? i + 1 : ''}`}
                className={
                  i + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {i + 1}
              </AniLink>
            )
          })}
          {!isLast && (
            <AniLink fade to={`/blogs/${nextPage}`} className={styles.link}>
              Next
            </AniLink>
          )}
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPosts(
      skip: $skip
      limit: $limit
      sort: { fields: publishedDate, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          createdAt(formatString: "MMM Do, YYYY")
          id: contentful_id
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

export default BlogTemplate
