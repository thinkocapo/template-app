import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Footer = ({ author, title }) => (
  <div className="wc-footer bottom-footer">
    <div className="container text-center">
      <div><span className="wc-footer-text">CONTACT</span></div>      
    </div>
  </div>
)

export default Footer


// const Footer = ({ author, title }) => (
//   <div className="footer">
//     <div className="container">
//       <hr className="border-primary" />
//       <p>
//         {title}
//         <Link to="/profile/">
//           <br />
//           <strong>{author}</strong> on Profile
//         </Link>
//       </p>
//     </div>
//   </div>
// )
