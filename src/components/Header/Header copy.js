import React, { Component } from 'react';
// import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div className="header fixed flex aic">
        <div className="logo">
          <img src={logo} alt="olx-logo" />
        </div>
        <div className="location rel flex aic">
          <i class="fa fa-search ico s24" aria-hidden="true"></i>
          <input className="label s15 font" placeholder="YOUR LOCATION" value="pakistab" type="text" />
          <button class="fa fa-chevron-down arro" />
        </div>
        <div className="search flex aic">
          <input type="text" placeholder="Find Cars, Mobile Phone and more...." className="query font s15" />
          <button class="fa fa-search go" />
        </div>
        <div className="actions flex aic">
          <Link to="/account/signin" className="fontb s15">Sign in</Link>
          <button className="sell">
            <i class="fa fa-plus" aria-hidden="true"></i>
            <h2 className="s15 font">Sell</h2>
          </button>
        </div>
      </div>
    )
  }
}
export default Header