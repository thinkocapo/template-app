import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (

        <div className="navbar-fixed-top container-fluid nav-style">
          <div className="row text-center">
            <Link to="/page-1" className="col one"><div>Page1</div></Link>
            <Link to="/page-2" className="col two"><div>Page2</div></Link> 
            <Link to="/" className="col-logo three">
              <span className="logo-size">TITLE</span>
            </Link>
            <Link to="/page-3" className="col three"><div>Page3</div></Link>
            <Link to="/Profile" className="col four"><div>Profile</div></Link> 
          </div>
        </div>
     
    )
  }
}

export default Navi


// Can't remove SITE_TITLE from collapse Mobile Menu
/*<nav className="navbar navbar-expand-lg navbar-light bg-dark">
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
</nav>*/