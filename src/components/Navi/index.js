import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (

      // removed class 'navbar' so now its sticky.
      <nav className="navbar-expand wc-nav">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul id="menu-main-nav" className="navbar-nav nav-fill w-100">
              <li id="menu-item-42" className="nav-item  menu-item-42 wc-vertical-center">
                <a href="XXX" className="nav-link wc-black">&lt;Navlink_1&gt;</a></li>
              <li id="menu-item-963" className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-963  wc-vertical-center">
                <a href="XXX" className="nav-link wc-black">&lt;Navlink_2&gt;</a></li>
                            
              <li id="menu-item-40" className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-40 wc-vertical-center">
                <a href="XXX" className="nav-link wc-title">&lt;Site_Title&gt;</a>
              </li>

              <li id="menu-item-40" className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-40 wc-vertical-center">
                <a href="XXX" className="nav-link wc-black">&lt;Navlink_3&gt;</a></li>
              <li id="menu-item-42" className="nav-item  menu-item-42 wc-vertical-center">
                <a href="XXX" className="nav-link wc-black">&lt;Navlink_4&gt;</a></li>
            </ul>
          </div>
        </div>
      </nav>
    
    )
  }
}

export default Navi


// <li id="menu-item-963" className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-963"><a href="XXX" className="nav-link">&lt;Navlink_2&gt;</a></li>

// ORIGINAL
// return (
//   <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
//     <div className="container">
//       <Link className="text-center" to="/">
//         <h1 className="navbar-brand mb-0">{title}</h1>
//       </Link>
//       <div className="navbar-nav-scroll">
//         <ul className="navbar-nav bd-navbar-nav flex-row">
//           <li
//             className={
//               location.pathname === '/' ? 'nav-item active' : 'nav-item'
//             }
//           >
//             <Link to="/" className="nav-link">
//               Home
//             </Link>
//           </li>
//           <li
//             className={
//               location.pathname === '/profile/'
//                 ? 'nav-item active'
//                 : 'nav-item'
//             }
//           >
//             <Link to="/profile/" className="nav-link">
//               Profile
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
//     </div>
//   </nav>
// )


// ATTEMPT 2
// <nav class="navbar navbar-expand-sm navbar-light bg-light" data-toggle="affix">
//     <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse text-center" id="navbarsExample11">
//             <ul class="navbar-nav">
//                 <li class="nav-item active">
//                     <a class="nav-link" href="#">Link</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">Link</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="navbar-brand" href="#">Brand</a>                          
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">Link</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">Link</a>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </nav>


// <nav className="justify-content-center z-index-1 navbar navbar-expand-lg navbar-dark default-navbar-color wc-navbar">
//   <div id="navbar-menu" className="collapse navbar-collapse justify-content-center float-xs-none">
//     <div className="navbar-nav ta-center">
//       <a id="resume-nav" className="nav-item wc-nav-item wc-nav-text-color nav-link text-uppercase">
//         <span>&lt;Nav_Link_1&gt;</span>
//       </a>
//       <a className="nav-item wc-nav-item wc-nav-text-color nav-link text-uppercase"> 
//         <span>&lt;Nav_Link_2&gt;</span>
//       </a>
//       <a className="nav-item wc-nav-app-name nav-link text-uppercase text-center">
//         <span className="wc-nav-text-color">&lt;Site_Name&gt;</span>
//       </a>
//       <a className="nav-item wc-nav-item wc-nav-text-color nav-link text-uppercase">
//         <span>&lt;Nav_Link_3&gt;</span>
//       </a>
//       <a className="nav-item wc-nav-item wc-nav-text-color nav-link text-uppercase">
//         <span>&lt;Nav_Link_4&gt;</span>
//       </a>
//     </div>
//   </div>
// </nav>