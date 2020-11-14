import React, { Component } from 'react';
import './Header.css'
import AuthModal from '../AuthModal/AuthModal'
import logo from '../../assets/logo.png'
import { Dropdown } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import firebase from '../../firebase'
import { connect } from 'react-redux';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      find: "",
      currentUser: {},
      isLogged: false,
    }
  }
  openModal = () => {
    this.authModal.toggle();
  }
  componentDidMount() {
    let currentUser = this.props.currentUser.userData;
    this.setState({ currentUser, isLogged: this.props.currentUser.isLogged })

  }
  componentWillReceiveProps(nextProps) {
    let currentUser = nextProps.currentUser.userData;
    this.setState({ currentUser, isLogged: nextProps.currentUser.isLogged })
  }
  render() {
    return (
      <>
        <div className="nav-container">
          <div className="logo-container">
            <Link to="/">
            <img src={logo} className="logo" alt="m" />
            </Link>
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
            {
              this.state.isLogged ? (
                <>
                  <div className="dropdown" style={{ marginLeft: "20px", marginRight: "20px" }}>
                    <details>
                      <summary>
                        <img src={this.state.currentUser?.userImg} style={{ height: "50px", width: '50px', borderRadius: "50%" }} alt="" />
                      </summary>

                      <div className="dropdown-content">
                        <ul>
                          <div className="userInfoCont">
                            <div className="userImgCont">
                              <img src={this.state.currentUser?.userImg} style={{ height: "50px", width: '50px', borderRadius: "50%" }} alt="" />
                            </div>
                            <div className="userInfoDrop">
                              <span className="userGreetH">Hello</span>
                              <h3 className="userNameH">{this.state.currentUser?.name}</h3>
                            </div>

                          </div>
                          <div className="userMenuDrop">
                          <Link to="/myAds"> <li> <i className="far fa-file-alt" style={{ fontSize: '20px', marginRight: "10px" }}></i> My Ads</li></Link>
                          </div>
                          <div className="userMenuDrop">
                            <li onClick={() => firebase.auth().signOut()}> <i className="fas fa-sign-out-alt" style={{ fontSize: '20px', marginRight: "10px" }}></i>Logout</li>
                          </div>
                        </ul>
                      </div>
                    </details>
                  </div>
                  <Link to="/post" className="sell-link">
                    <button className="sell-header">
                      <span className="sell-icon">
                        <i className="fa fa-plus"></i>
                      </span>
                      <span className="sell-span">SELL</span>

                    </button>
                  </Link>
                </>
              )
                : (
                  <>
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
                  </>
                )
            }
            {/* <button onClick={this.openModal} className="login-button">
              <span className="login-span">Login</span>
            </button>

            <Link to="/post" className="sell-link">
              <button className="sell-header">
                <span className="sell-icon">
                  <i className="fa fa-plus"></i>
                </span>
                <span className="sell-span">SELL</span>

              </button>
            </Link> */}
          </div>
          <AuthModal ref={(e) => this.authModal = e} />
        </div>

      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.UserReducer
  }
}
export default connect(mapStateToProps)(Header)