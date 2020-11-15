import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import SubHeader from '../../components/SubHeader/SubHeader'
import playstore from '../../assets/banner/playstore.png'
import applestore from '../../assets/banner/appstore.jpg'
import noads from '../../assets/noads.png'
import firebase from '../../firebase'
import './MyAdsScreen.css'
import { ProductSlider } from '../../components/ProductSlider/ProductSlider'
import { Link } from 'react-router-dom'
class MyAdsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userProducts: []
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        if (this.props.currentUser.userData) {
            this.getAds(this.props)

        }
    }
    componentWillReceiveProps(nextProps) {
        this.getAds(nextProps)
    }

    getAds = (user) => {
        // console.log(firebase.auth().currentUser)
        console.log("triger", user)
        let userProducts = []
        firebase.database().ref("/products").on("child_added", (snapshot) => {
            if (snapshot.val().creatorUid === firebase.auth().currentUser.uid) {
                userProducts.push(snapshot.val());
                this.setState({ userProducts })
            }
        }, (err) => {
            console.log(err)
        })
    }

    deleteAd = (id) => {
        firebase.database().ref(`/products/${id}`).remove().then(() => {
           this.props.location.push("/")
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="home-page">
                <Header />
                <SubHeader />
                <main>
                    <div className="myads-center-container">
                        <h2 className="myads-h2">Your Ads</h2>

                        <div className="userads-container">
                            {this.state.userProducts.length === 0 ? (
                            <div className="myads-noads-cont">
                                <img src={noads} alt="noadimg"/>
                                <h2>You do not have posted any AD</h2>
                                <div className="loadmore-cont">
                                <div className="loadmore-container">
                                    <Link to="/post">
                                    <button className="loadmore-btn">Post an Ad</button>
                                    </Link>
                                </div>
                            </div>
                            </div>
                            ) : this.state.userProducts.map((product, i) => (
                                <div className="userads-card" key={product.productId + i}>
                                    <div className="userads-img-cont">
                                        <img src={product.photos[0]} className="userads-img" alt="" />
                                    </div>
                                    <div className="userads-basic-info">
                                    <div className="userads-title-cont">
                                        <span>Title</span>
                                        <h4>{product.title}</h4>
                                    </div>
                                    <div className="userads-price-cont">
                                    <span>Price</span>
                                        
                                        <h4>{product.price}</h4>
                                    </div>
                                    </div>
                                    
                                    <div className="userads-menu-cont">
                                        <div className="adsdropdown" style={{ marginLeft: "20px", marginRight: "20px" }}>
                                            <details>
                                                <summary>
                                                    <i className="fas fa-ellipsis-h" style={{ fontSize: '20px' }}></i>
                                                </summary>

                                                <div className="adsdropdown-content">
                                                    <ul>

                                                        <div className="userMenuDrop">
                                                            <li onClick={() => this.deleteAd(product.productId)}> <i className="fas fa-trash-alt" style={{ fontSize: '20px', marginRight: "10px" }}></i> Delete</li>
                                                        </div>
                                                    </ul>
                                                </div>
                                            </details>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                                        <i className="fab fa-facebook-f" style={{ fontSize: "12px", color: "#888" }} />
                                    </span>
                                    <span className="footer-icon">
                                        <i className="fab fa-twitter" style={{ fontSize: "12px", color: "#888" }} />
                                    </span>
                                    <span className="footer-icon">
                                        <i className="fab fa-instagram" style={{ fontSize: "12px", color: "#888" }} />
                                    </span>
                                </div>
                                <div className="footer-app-cont">
                                    <img src={applestore} alt="appstore" style={{ marginRight: "10px" }} />
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
        currentUser: state.UserReducer,
        productsData: state.ProductReducer

    }
}
export default connect(mapStateToProps)(MyAdsScreen)
