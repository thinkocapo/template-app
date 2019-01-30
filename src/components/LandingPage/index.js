import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

class LandingPage extends React.Component {

    render() {
        const { children } = this.props
        return (
            <div className="body-container-parent">

                <section className="bg-light text-center">
                    <div className="container">
                        <h1 className="landing-page-title">Hi, I'm Title!</h1>
                        <p className="lead text-muted">Heading or Inspirational quote goes here</p>
                        <div className="row">
                            <div className="col-xs-9 col-sm-12">
                                <p className="landing-page-paragraph">Lorem ipsum dolor sit amet, alii munere oporteat ei eos, tritani labitur facilisi pro ne. An cum nostrud constituam, albucius ponderum salutatus et vis, nam fabulas concludaturque ex. Nam eu zril reformidans, reque intellegat accommodare in sed. Quidam maluisset laboramus eu pri, pro in scripta feugait sententiae. Illud dignissim vituperata ex mel, ne est ludus melius. Mei solet mollis tacimates ut, mei dicta oratio an. At mea erant audire, mei hendrerit urbanitas id, quo exerci dolore ad. Has admodum epicurei menandri te, novum latine feugiat quo ea, id posse insolens duo. Has et omnes detracto honestatis, noluisse consequat eos in, ne quo fugit iriure. Sint veri graece ea eam, sed an mollis complectitur. Error adipiscing reprimique sit ut, vim ei probo maiorum, eum nihil fabulas qualisque ne. Vel te eius consetetur, et dicit reprehendunt cum, cu quo dicta recusabo voluptatibus. Ipsum nullam per ea, quem graece adolescens sed an. Ex per diam mentitum, et explicari quaerendum sadipscing ius, no duo legere corpora. Ex tractatos interesset nam, veniam aliquam ex duo. Eu sale simul mea. Erat dolor sit no. Eos nostrud conceptam suscipiantur no. Usu sanctus dolores cu, in falli legimus delicatissimi eum, in eam veri ullum maluisset. In euripidis conclusionemque eum, iracundia consetetur necessitatibus nam no. Hinc voluptua democritum vel no, et mea soluta essent. Vim ut magna affert vidisse, ius diam velit reprehendunt ea, quo numquam mnesarchum disputando te. Utinam maiorum ullamcorper ad quo, eam tollit evertitur sadipscing an. An inani numquam recusabo est, id elit vulputate conceptam mel. Eos ea dico diam qualisque, vis ut autem augue ludus, quo ut munere virtute. Feugiat fabulas detraxit duo in, case feugiat delicata no duo.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="bg-light">
                    <div className="container padding-top-and-bottom">
                        <div className="row">
                            <div className="col-xs-9 col-sm-12">
                                <p>Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Condimentum lacinia quis vel eros. Tortor posuere ac ut consequat semper viverra nam libero. Donec adipiscing tristique risus nec feugiat in. Scelerisque in dictum non consectetur a erat. Et egestas quis ipsum suspendisse ultrices gravida. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vitae elementum curabitur vitae nunc sed velit. Vivamus at augue eget arcu dictum varius duis at consectetur. Pretium fusce id velit ut tortor pretium viverra. Nisi est sit amet facilisis magna. Sed faucibus turpis in eu mi bibendum neque egestas. Risus sed vulputate odio ut enim.</p>
                            </div>
                        </div>
                    </div>
                </section> */}

            </div>
          )
    }
}

export default LandingPage