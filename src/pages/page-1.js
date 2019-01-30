import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Icon from 'components/Icon'

class Page1 extends React.Component {
  render() {
    const { location, data } = this.props
    const picturePage1 = get(data, 'profile.childImageSharp.fixed')

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Page1" />
        <div className="body-container-parent">

          <section className="text-center bg-light">
            <div className="container">
              <h1>Page 1</h1>
              <Img fixed={picturePage1} className="rounded" />
              <p className="lead text-muted">Heading or Inspirational quote goes here</p>
              <p className="paragraph">Lorem ipsum dolor sit amet, alii munere oporteat ei eos, tritani labitur facilisi pro ne. An cum nostrud constituam, albucius ponderum salutatus et vis, nam fabulas concludaturque ex. Nam eu zril reformidans, reque intellegat accommodare in sed. Quidam maluisset laboramus eu pri, pro in scripta feugait sententiae. Illud dignissim vituperata ex mel, ne est ludus melius. Mei solet mollis tacimates ut, mei dicta oratio an. At mea erant audire, mei hendrerit urbanitas id, quo exerci dolore ad. Has admodum epicurei menandri te, novum latine feugiat quo ea, id posse insolens duo. Has et omnes detracto honestatis, noluisse consequat eos in, ne quo fugit iriure. Sint veri graece ea eam, sed an mollis complectitur. Error adipiscing reprimique sit ut, vim ei probo maiorum, eum nihil fabulas qualisque ne. Vel te eius consetetur, et dicit reprehendunt cum, cu quo dicta recusabo voluptatibus. Ipsum nullam per ea, quem graece adolescens sed an. Ex per diam mentitum, et explicari quaerendum sadipscing ius, no duo legere corpora. Ex tractatos interesset nam, veniam aliquam ex duo. Eu sale simul mea. Erat dolor sit no. Eos nostrud conceptam suscipiantur no. Usu sanctus dolores cu, in falli legimus delicatissimi eum, in eam veri ullum maluisset. In euripidis conclusionemque eum, iracundia consetetur necessitatibus nam no. Hinc voluptua democritum vel no, et mea soluta essent. Vim ut magna affert vidisse, ius diam velit reprehendunt ea, quo numquam mnesarchum disputando te. Utinam maiorum ullamcorper ad quo, eam tollit evertitur sadipscing an. An inani numquam recusabo est, id elit vulputate conceptam mel. Eos ea dico diam qualisque, vis ut autem augue ludus, quo ut munere virtute. Feugiat fabulas detraxit duo in, case feugiat delicata no duo.</p>
            </div>
          </section>

        </div>
      </Layout>
    )
  }
}

export default Page1

export const query = graphql`
  query Page1Query {
    profile: file(name: { eq: "blank-profile-pic" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`