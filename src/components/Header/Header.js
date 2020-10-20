import React, { Component } from 'react';
import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import {Icon} from 'semantic-ui-react'
class Header extends Component {
  render() {
    return (
      <div className={styles.navContainer}>
        <div className={styles.navBar}>
          <div className={styles.logoContainer}>
            <img src={logo} className={styles.logo} alt="" />
          </div>
          
        </div>
      </div>
    )
  }
}
export default Header