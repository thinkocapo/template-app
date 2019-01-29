import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Icon from 'components/Icon'

class Profile extends React.Component {
  render() {
    const { location, data } = this.props
    const profile = get(data, 'profile.childImageSharp.fixed')
    // const work1 = get(data, 'work1.childImageSharp.sizes')
    // const work2 = get(data, 'work2.childImageSharp.sizes')
    // const back1 = get(data, 'back1.childImageSharp.sizes')
    // const back2 = get(data, 'back2.childImageSharp.sizes')

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Profile" />
        <div className="body-container-parent">

          <section className="text-center bg-dark">
            <div className="container">
              {/* <Img fixed={profile} className="rounded-circle" /> */}
              <h1>Page 1</h1>
              <p className="lead text-muted">Heading or Inspirational quote goes here</p>
              <div>
                <a
                  ref="twButton"
                  href="https://twitter.com/jaxx2104"
                  className="twitter-follow-button"
                  data-show-count="false"
                >
                  Follow @jaxx2104
                </a>
              </div>
            </div>
          </section>

          {/* <section className="text-center bg-light">
          <div className="container">
              <h1>Part 2</h1>
              <p className="lead text-muted">other......</p>
              <div>
                <a
                  ref="twButton"
                  href="https://twitter.com/jaxx2104"
                  className="twitter-follow-button"
                  data-show-count="false"
                >
                  Follow @jaxx2104
                </a>
              </div>
            </div>
          </section> */}

        </div>
      </Layout>
    )
  }
}

export default Profile

// export const query = graphql`
//   query ProfilePageQuery {
//     profile: file(name: { eq: "profile" }) {
//       childImageSharp {
//         fixed(width: 120, height: 120) {
//           ...GatsbyImageSharpFixed_withWebp
//         }
//       }
//     }
//     work1: file(name: { eq: "work1" }) {
//       childImageSharp {
//         sizes(quality: 100) {
//           ...GatsbyImageSharpSizes_withWebp
//         }
//       }
//     }
//     work2: file(name: { eq: "work2" }) {
//       childImageSharp {
//         sizes(quality: 100) {
//           ...GatsbyImageSharpSizes_withWebp
//         }
//       }
//     }
//     work3: file(name: { eq: "work3" }) {
//       childImageSharp {
//         sizes(quality: 100) {
//           ...GatsbyImageSharpSizes_withWebp
//         }
//       }
//     }
//     back1: file(name: { eq: "back1" }) {
//       childImageSharp {
//         sizes(quality: 100) {
//           ...GatsbyImageSharpSizes_withWebp
//         }
//       }
//     }
//     back2: file(name: { eq: "back2" }) {
//       childImageSharp {
//         sizes(quality: 100) {
//           ...GatsbyImageSharpSizes_withWebp
//         }
//       }
//     }
//   }
// `
