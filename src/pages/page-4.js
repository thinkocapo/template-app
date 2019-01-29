import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Icon from 'components/Icon'

class Page4 extends React.Component {
  render() {
    const { location, data } = this.props
    const picturePage4 = get(data, 'profile.childImageSharp.fixed')

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Page2" />
        <div className="body-container-parent">

          <section className="text-center bg-light">
            <div className="container">
              <h1>Page 4</h1>
              <Img fixed={picturePage4} className="rounded" />
              <p className="lead text-muted">Last Call</p>
              <p className="paragraph">Dolor sit amet consectetur adipiscing elit pellentesque habitant. Eu consequat ac felis donec et. Ultrices neque ornare aenean euismod elementum nisi. Pellentesque dignissim enim sit amet. Amet mauris commodo quis imperdiet massa tincidunt nunc. Dignissim suspendisse in est ante in nibh mauris cursus. Erat pellentesque adipiscing commodo elit at imperdiet. Ut tellus elementum sagittis vitae et leo duis. Amet nisl purus in mollis nunc sed id. Aliquam faucibus purus in massa tempor nec feugiat nisl. Euismod nisi porta lorem mollis aliquam. Porttitor lacus luctus accumsan tortor. Gravida in fermentum et sollicitudin ac orci phasellus. Adipiscing diam donec adipiscing tristique risus. Justo eget magna fermentum iaculis eu non diam phasellus. Commodo odio aenean sed adipiscing diam donec. At volutpat diam ut venenatis tellus. Metus aliquam eleifend mi in nulla posuere.</p>
              <p className="paragraph">Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Interdum posuere lorem ipsum dolor sit amet consectetur. Sollicitudin nibh sit amet commodo nulla. Velit laoreet id donec ultrices. Lacus luctus accumsan tortor posuere ac ut consequat semper. Integer feugiat scelerisque varius morbi enim. Arcu odio ut sem nulla pharetra diam sit amet nisl. Feugiat in fermentum posuere urna. Cras tincidunt lobortis feugiat vivamus. Tortor at risus viverra adipiscing at in tellus integer. Ut tristique et egestas quis ipsum suspendisse. Ac placerat vestibulum lectus mauris ultrices eros in cursus. In mollis nunc sed id semper. Auctor eu augue ut lectus arcu. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Hendrerit dolor magna eget est lorem ipsum. Faucibus turpis in eu mi bibendum neque.</p>
            </div>
          </section>

        </div>
      </Layout>
    )
  }
}

export default Page4

export const query = graphql`
  query Page4Query {
    profile: file(name: { eq: "blank-profile-pic" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`