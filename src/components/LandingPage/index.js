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
        const { children } = this.props
        return (
            <div className="container top-it">
                I AM CONTAINER
            </div>
          )
    }
}

export default LandingPage