import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import LandingPage from 'components/LandingPage'

import { siteMetadata } from '../../gatsby-config'

const BlogIndex = ({ data, location }) => {
  // const posts = get(data, 'remark.posts')
  return (
    <Layout location={location}>
      <Meta site={siteMetadata} />
      <LandingPage/>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
  }
`



// const BlogIndex = ({ data, location }) => {
//   const posts = get(data, 'remark.posts')
//   return (
//     <Layout location={location}>
//       <Meta site={get(data, 'site.meta')} />
//       {posts.map(({ post }, i) => (
//         <Post
//           data={post}
//           options={{
//             isIndex: true,
//           }}
//           key={i}
//         />
//       ))}
//     </Layout>
//   )
// }
