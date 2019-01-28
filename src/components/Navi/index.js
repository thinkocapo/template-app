import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (

      <div class="fixed-top container-fluid nav-style">
        <div class="row text-center">
          <div class="col">
            Home
          </div>
          <div class="col">
            Brand
          </div>
          <div class="col">
            {/* SITE_TITLE */}
            {/* <div class="logo-size">SITE_TITLE</div> */}
            <span class="logo-size">SITE_TITLE</span>
          </div>
          <div class="col">
            Profile
          </div>
          <div class="col">
            About
          </div>
        </div>
    
      </div>
    
    )
  }
}

export default Navi