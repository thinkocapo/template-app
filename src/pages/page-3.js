import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Icon from 'components/Icon'

class Page3 extends React.Component {
  render() {
    const { location, data } = this.props

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Page3" />
        <div className="body-container-parent">

          <section className="text-center bg-light">
            <div className="container">
              <h1>Page 3</h1>
              <p className="lead text-muted">Section Element wrapped in a div body-container-parent</p>
              <div>
              </div>
            </div>
          </section>

        </div>
      </Layout>
    )
  }
}

export default Page3