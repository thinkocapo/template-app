import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Footer = ({ author, title }) => (
  <div className="footer-style footer-bottom">
  {/* removed container, make easier to max size fit flush to parent */}
    <div className="text-center expand-to-parent">
      <div className="footer-div">
        <span className="wc-footer-text">CONTACT</span>
      </div>      
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
