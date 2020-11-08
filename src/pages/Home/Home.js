import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'
import SubHeader from '../../components/SubHeader/SubHeader'
import playstore from '../../assets/banner/playstore.png'
import applestore from '../../assets/banner/appstore.jpg'

import firebase from '../../firebase'
import './Home.css'
import { ProductSlider } from '../../components/ProductSlider/ProductSlider'
class Home extends Component {
    // signInUser() {
    //     firebase.auth().signInWithEmailAndPassword("nadir@gmail.com", "123456").then(() => {
    //         console.log("User has just signed in ")
    //     }).catch((err) => {
    //         console.log("User has just signed out ", err)
    //     })
    // }
    render() {
        return (
            <div className="home-page">
                <Header />
                <SubHeader />
                <main>

                    <div className="banner-container">
                        <div className="banner-img"></div>
                    </div>
                    <div className="center-container">
                        <div className="ad-slider">
                            <ProductSlider />
                        </div>
                        <div className="ads-container">
                            <h2 className="ads-fresh-heading">Fresh Recommendation</h2>
                            <div className="ads-cards-container ">
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />

                            </div>
                            <div className="loadmore-cont">
                                <div className="loadmore-container">
                                    <button className="loadmore-btn">Load more</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
                <div className="footer-img-container">
                    <div className="footer-img"></div>
                </div>
                <footer className="main-footer">
                    <div className="top-footer-container">
                        <div className="top-footer-content">
                            <div className="top-footer-item">
                                <h5 className="top-footer-heading">Popular Categories</h5>
                                <ul className="top-footer-list">
                                    <li className="top-footer-list-item">
                                        <a href="/" className="top-footer-link" >Cars</a>
                                    </li>
                                    <li className="top-footer-list-item">
                                        <a href="/" className="top-footer-link" >Flats</a>
                                    </li>
                                    <li className="top-footer-list-item">
                                        <a href="/" className="top-footer-link" >Jobs</a>
                                    </li>
                                    <li className="top-footer-list-item">
                                        <a href="/" className="top-footer-link" >Mobile Phones</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="top-footer-item">
                                <h5 className="top-footer-heading">TRENDING SEARCHES</h5>
                                <ul className="top-footer-list">
                                    <li className="top-footer-list-item">
                                        <a href="/" className="top-footer-link" >Bikes</a>
                                    </li>
                                    <li className="top-footer-list-item">
                                        <a href="/" className="top-footer-link" >Watches</a>
                                    </li>
                                    <li className="top-footer-list-item">
                                        <a href="/" className="top-footer-link" >Books</a>
                                    </li>
                                    <li className="top-footer-list-item">
                                        <a href="/" className="top-footer-link" >Dogs</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="top-footer-item">
                                <h5 className="top-footer-heading">ABOUT US</h5>
                                <ul className="top-footer-list">
                                    <li className="top-footer-list-item">
                                        <a href="/" className="top-footer-link" >About OLX Group</a>
                                    </li>
                                    <li className="top-footer-list-item">
                                        <a href="/" className="top-footer-link" >OLX Blog</a>
                                    </li>
                                    <li className="top-footer-list-item">
                                        <a href="/" className="top-footer-link" >Contact Us</a>
                                    </li>
                                    <li className="top-footer-list-item">
                                        <a href="/" className="top-footer-link" >Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="top-footer-item">
                                <h5 className="top-footer-heading">OLX</h5>
                                <ul className="top-footer-list">
                                    <li className="top-footer-list-item">
                                        <a href="/" className="top-footer-link" >Help</a>
                                    </li>
                                    <li className="top-footer-list-item">
                                        <a href="/" className="top-footer-link" >Sitemap</a>
                                    </li>
                                    <li className="top-footer-list-item">
                                        <a href="/" className="top-footer-link" >Legal & Privacy information</a>
                                    </li>
                                    <li className="top-footer-list-item">
                                        <a href="/" className="top-footer-link" >Mobile Phones</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="top-footer-item">
                                <h5 className="top-footer-heading">Follow Us</h5>
                                <div className="footer-follow-cont">
                                    <span className="footer-icon">
                                        <i className="fab fa-facebook-f" style={{ fontSize: "12px",color:"#888" }} />
                                    </span>
                                    <span className="footer-icon">
                                        <i className="fab fa-twitter" style={{ fontSize: "12px",color:"#888" }} />
                                    </span>
                                    {/* <span className="footer-icon">
                                        <i className="fab fa-play" style={{ fontSize: "12px",color:"#888" }} />
                                    </span> */}
                                    <span className="footer-icon">
                                        <i className="fab fa-instagram" style={{ fontSize: "12px",color:"#888" }} />
                                    </span>
                                </div>
                                <div className="footer-app-cont">
                                    <img src={applestore} alt="appstore" style={{marginRight:"10px"}} />
                                    <img src={playstore} alt="playstore" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright-container">
                        <div className="footer-copyright-content">
                            <h5 className="footer-text-left"><span className="footer-heighlighted">Other Countries</span>India - South Africa - Indonesia</h5>
                            <h5 className="footer-text-right"><span className="footer-heighlighted">Free Classified in Pakistan</span> . @ © 2006-2020 OLX</h5>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        currentUser: state.UserReducer
    }
}
export default connect(mapStateToProps)(Home)
