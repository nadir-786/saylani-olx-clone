import React, { Component } from 'react';
import './PostHeader.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
class PostHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      find: "",
    }
  }
  openModal = () => {
    this.authModal.toggle();
  }
  render() {
    return (
      <>
        <div className="nav-back-container">
          <div className="back-container">
            <Link to={this.props.redirect}>
            <span className="icon-back">
              <i className="fa fa-arrow-left" style={{fontSize: "22px",color:"#002f34",fontWeight:"lighter !important" }}></i>
            </span>
            </Link>
          </div>
          <div className="logo-container">
            <img src={logo} className="logo" alt="m" />
          </div>
        </div>

      </>
    )
  }
}
export default PostHeader