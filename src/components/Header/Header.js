import React, { Component } from 'react';
import './Header.css'
import AuthModal from '../AuthModal/AuthModal'
import logo from '../../assets/logo.png'
import { Dropdown } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
class Header extends Component {
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
        <div className="nav-container">
          <div className="logo-container">
            <img src={logo} className="logo" alt="m" />
          </div>
          <div className="search-items">
            <div className="search-location">
              <span className="h-icon">
                <i className="fa fa-search" style={{ fontSize: "24px" }} aria-hidden="true"></i>
              </span>
              <input className="location-field" placeholder="YOUR LOCATION" onChange={(e) => this.setState({ find: e.target.value })} value={this.state.find} type="text" />
              <span className="h-icon">
                <i className="fa fa-chevron-down" style={{ fontSize: "25px" }} />
              </span>
            </div>
            <div className="search-container">
              <input className="search-field" type="text" placeholder="Username" onChange={(e) => this.setState({ search: e.target.value })} value={this.state.search} name="usrnm" />
              <span className="search-icon">
                <i className="fa fa-search" style={{ color: "#fff", fontSize: "22px" }}></i>
              </span>
            </div>
          </div>

          <div className="login-header">
            <button onClick={this.openModal} className="login-button">
              <span className="login-span">Login</span>
            </button>

            <Link to="/post" className="sell-link">
              <button className="sell-header">
                <span className="sell-icon">
                  <i className="fa fa-plus"></i>
                </span>
                <span className="sell-span">SELL</span>

              </button>
            </Link>
          </div>
          <AuthModal ref={(e) => this.authModal = e} />
        </div>

      </>
    )
  }
}
export default Header