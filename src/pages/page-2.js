import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Icon from 'components/Icon'

class Page2 extends React.Component {
  render() {
    const { location, data } = this.props
    const picturePage2 = get(data, 'profile.childImageSharp.fixed')

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Page2" />
        <div className="body-container-parent">

          <section className="text-center bg-light">
            <div className="container">
              <h1>Page 2</h1>
              <Img fixed={picturePage2} className="rounded" />
              <p className="lead text-muted">Section Element wrapped in a div body-container-parent</p>
              <p className="paragraph">Vel facilisis volutpat est velit egestas dui id ornare. Nisi est sit amet facilisis magna etiam tempor orci. Mattis enim ut tellus elementum sagittis vitae et leo duis. Elit pellentesque habitant morbi tristique senectus. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Lacus sed turpis tincidunt id aliquet. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Lorem dolor sed viverra ipsum nunc aliquet. Ut porttitor leo a diam sollicitudin tempor. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Laoreet sit amet cursus sit amet dictum sit amet justo. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Risus feugiat in ante metus dictum at.</p>
              <p className="paragraph">Porttitor lacus luctus accumsan tortor posuere ac. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Placerat duis ultricies lacus sed. Etiam non quam lacus suspendisse. Massa vitae tortor condimentum lacinia. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Rutrum quisque non tellus orci. Ultrices dui sapien eget mi proin. Ac turpis egestas sed tempus urna et. A cras semper auctor neque. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Enim sit amet venenatis urna cursus eget nunc scelerisque. Semper viverra nam libero justo laoreet sit amet cursus. Eget arcu dictum varius duis at consectetur lorem donec. Leo a diam sollicitudin tempor id eu nisl. Imperdiet massa tincidunt nunc pulvinar sapien. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Interdum velit euismod in pellentesque massa placerat duis ultricies.</p>
            </div>
          </section>

        </div>
      </Layout>
    )
  }
}

export default Page2

export const query = graphql`
  query Page2Query {
    profile: file(name: { eq: "blank-profile-pic" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`