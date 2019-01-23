import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

class LandingPage extends React.Component {
    // componentDidMount() {
    //     emergence.init()
    //   }
    
    //   componentDidUpdate() {
    //     emergence.init()
    //   }

    render() {
        console.log("LANDING PAGE INDE X********88")
        const { children } = this.props
        return (
            <div>
                This is the landing page:
                {children}
            </div>
          )
    }
}
// const LandingPage = ({ author, title }) => (
//   <div>This is the landing page:
//   </div>
// )

export default LandingPage