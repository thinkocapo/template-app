import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    
    return (

      // <nav>
        <div class="fixed-top container-fluid nav-style">
          <div class="row text-center">
            <div class="col one">
              Page1
            </div>
            <div class="col two">
              Page2
            </div>
            <div class="col-logo three">
              <span class="logo-size">TITLE</span>
            </div>
            <div class="col four">
              Page3
            </div>
            <div class="col five">
              Page4
            </div>
          </div>
        </div>
      // </nav> 
     
    )
  }
}

export default Navi

// WILL'S - GOOD




// Can't remove SITE_TITLE from collapse Mobile Menu
{/* <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <a className="navbar-brand" href="#">SITE_TITLE</a>       
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <a className="nav-link" href="#">Resume</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Code</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">SITE_TITLE</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Vendor</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Product</a>
    </li>
  </ul>
</div>
</nav> */}