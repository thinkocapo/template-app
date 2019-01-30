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
    const picturePage3 = get(data, 'profile.childImageSharp.fixed')

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Page3" />
        <div className="body-container-parent">

          <section className="text-center bg-light">
            <div className="container">
              <h1>Page 3</h1>
              <Img fixed={picturePage3} className="rounded" />
              <p className="lead text-muted">Something Else</p>
              <p className="paragraph">In vitae turpis massa sed. Vel turpis nunc eget lorem dolor sed. Id diam vel quam elementum pulvinar etiam. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Mus mauris vitae ultricies leo integer malesuada nunc. Fermentum et sollicitudin ac orci. Risus commodo viverra maecenas accumsan lacus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Risus nullam eget felis eget nunc. Aenean euismod elementum nisi quis eleifend quam adipiscing. Montes nascetur ridiculus mus mauris. Urna et pharetra pharetra massa.</p>
              <p className="paragraph">Ut eu sem integer vitae justo eget magna fermentum iaculis. Viverra maecenas accumsan lacus vel facilisis volutpat. Convallis convallis tellus id interdum velit. Commodo elit at imperdiet dui accumsan sit. Cras ornare arcu dui vivamus arcu. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Porta lorem mollis aliquam ut porttitor leo a. Pharetra pharetra massa massa ultricies mi. Malesuada fames ac turpis egestas. Pharetra et ultrices neque ornare aenean euismod elementum. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Lectus sit amet est placerat in egestas.</p>
            </div>
          </section>

        </div>
      </Layout>
    )
  }
}

export default Page3

export const query = graphql`
  query Page3Query {
    profile: file(name: { eq: "blank-profile-pic" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`