import { Link } from 'gatsby'
import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './style.scss'

// https://react-bootstrap.github.io/components/modal/

class Footer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }



  render() {
  
    return (
      <div className="footer-style footer-bottom">
        <div className="text-center expand-to-parent" onClick={this.handleShow}>
          <div className="footer-div">
            <span className="wc-footer-text">CONTACT</span>
          </div>      
        </div>
    
        <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
      </div>
    )
  }
}


export default Footer



////////////////////////////////////////////////

// OLD
// const Footer = ({ author, title }) => (
//   <div className="footer-style footer-bottom">
//     <div className="text-center expand-to-parent">
//       <div className="footer-div">
//         <span className="wc-footer-text">CONTACT</span>
//       </div>      
//     </div>
//   </div>
// )


// ORIGINAL 
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

// {/* <div className="footer-style footer-bottom">
// {/* removed container, make easier to max size fit flush to parent */}
//   <div className="text-center expand-to-parent">
//     <div className="footer-div">
//       <span className="wc-footer-text">CONTACT</span>
//     </div>      
//   </div>
// </div> */}