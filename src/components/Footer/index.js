import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Footer = ({ author, title }) => (
  <div className="footer wc-footer">
    <div className="container text-center">
      <div><span className="wc-footer-text">CONTACT</span></div>      
    </div>
  </div>
)

export default Footer

/* <div class="footer">Footer
            <div class="container text-center">
              <span class="wc-footer-contact-me">CONTACT</span>
            </div>
          </div> */



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
