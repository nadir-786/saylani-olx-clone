import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'
import SubHeader from '../../components/SubHeader/SubHeader'
import playstore from '../../assets/banner/playstore.png'
import applestore from '../../assets/banner/appstore.jpg'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import firebase from '../../firebase'
import './ProductScreen.css'
import { ProductSlider } from '../../components/ProductSlider/ProductSlider'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class ProductScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProduct: { photos: [] },
            error: {},
            loading: true,
            showNo: false
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        let allProducts = [];
        let selectedPath = window.location.pathname.split("/")[2];
        firebase.database().ref(`/products/${selectedPath}`).once("value", (snapshot) => {
            let gotData = snapshot.val();
            allProducts.push(gotData);
            console.log(gotData)
        }).then(() => {
            if (allProducts[0] === null) {
                this.setState({ error: { status: false, message: "Product Not found", loading: false } })
            } else {
                this.setState({ currentProduct: allProducts[0], loading: false })
            }
        })

    }
    // componentWillReceiveProps(nextProps) {

    // }
    render() {
        return (
            <div className="home-page">
                <Header />
                <SubHeader />
                <main>
                    <div className="product-main-cont">
                        <div className="product-nav-cont">
                            <ol className="product-nav">
                                <li className="product-nav-item">
                                    <Link className="product-nav-link" to="/">Home</Link>
                                    <span className="product-nav-slash">/</span>
                                </li>
                                <li className="product-nav-item">
                                    <Link className="product-nav-link" to="/">{this.state.currentProduct.category && this.state.currentProduct.category}</Link>
                                    <span className="product-nav-slash">/</span>
                                </li>
                            </ol>
                        </div>
                        <div className="single-main-cont">
                            <div className="single-left-cont">
                                <div className="single-carousel-cont">
                                    <Carousel autoPlay>

                                        {this.state.currentProduct?.photos.map((photo, i) => (<div key={i} className="slider-slide-cont">
                                            <img alt="" src={photo} />
                                            <h5 className="slide-info">{i + 1}/{this.state.currentProduct?.photos.length}</h5>
                                        </div>))}
                                    </Carousel>
                                </div>
                                <div className="single-des-cont">
                                    <h3 className="single-des-h">Description</h3>
                                    <div className="single-des-s">
                                        <div className="single-des-show">
                                            <span className="single-des-p">{this.state.currentProduct.description && this.state.currentProduct.description}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="single-right-cont">
                                <div className="single-info-cont">
                                    <div className="single-info-show">
                                        <span className="single-info-sh">Rs {this.state.currentProduct.price && this.state.currentProduct.price}</span>
                                        <h3 className="single-info-sp">{this.state.currentProduct.title && this.state.currentProduct.title}</h3>
                                        <div className="single-info-footer">
                                            <span className="single-info-addr">{this.state.currentProduct.city && this.state.currentProduct.city}, {this.state.currentProduct.state && this.state.currentProduct.state}, Pakistan</span>
                                            <span className="single-info-time">Today</span>
                                        </div>
                                    </div>
                                    <div className="single-info-ico">
                                        <button className="single-info-share">
                                            <ShareOutlinedIcon style={{ fontSize: "24px", }} />
                                        </button>
                                        <button className="single-info-fav">
                                            <i className="far fa-heart" style={{ fontSize: "24px", }}></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="seller-info-cont">
                                    <div className="seller-info-show">
                                        <h3 className="seller-info-sh">Seller Description</h3>
                                        <div className="seller-info-card">
                                            <Link to="/" className="seller-info-imgLink">
                                                <img src={this.state.currentProduct.creatorImg && this.state.currentProduct.creatorImg} alt="seller-img" className="seller-info-img" />
                                            </Link>
                                            <div className="seller-info-cdetails">
                                                <Link to="/" className="seller-info-detailLink">
                                                    <h3 className="seller-info-name">{this.state.currentProduct.creatorName && this.state.currentProduct.creatorName}</h3>
                                                    <span className="seller-info-arrow">
                                                        <i className="fa fa-chevron-right"></i>
                                                    </span>
                                                    <span className="seller-info-history">Member since Jan 2017</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <button className="seller-info-contactbtn">Chat with seller</button>
                                        <div className="seller-info-phoneCont">
                                            <span className="seller-info-phoneIco">
                                                <i className="fa fa-phone-alt" style={{ fontSize: '22px', }}></i>
                                            </span>
                                            {
                                                this.state.showNo ? (
                                                    <span className="seller-info-phoneNo">{this.state.currentProduct.creatorPhone && this.state.currentProduct.creatorPhone}</span>
                                                ) : (
                                                        <span className="seller-info-phoneNo">***** ***** ***</span>
                                                    )
                                            }
                                            <span onClick={()=>this.setState({showNo: !this.state.showNo})} className="seller-info-phoneShow">{this.state.showNo ? "Hide number":"Show number"} </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="posted-info-cont">
                                    <div className="posted-info-show">
                                        <h3 className="posted-info-sh">Posted in</h3>
                                        <span className="posted-info-addr">{this.state.currentProduct.city && this.state.currentProduct.city}, {this.state.currentProduct.state && this.state.currentProduct.state}, Pakistan</span>
                                        <div className="posted-info-mapCont">
                                            <img src="https://maps.googleapis.com/maps/api/staticmap?center=33.148%2C73.752&language=en&size=640x256&zoom=15&scale=1&channel=olx-latam-ar-web-dev&key=AIzaSyAChxbDof4fywIkC6U-7MCgXBpUp4t2DiA&signature=5f2fvQmkDX5LClF9wkWwC9AxXek=" className="posted-info-map" alt="" />
                                        </div>
                                    </div>
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
                                        <i className="fab fa-facebook-f" style={{ fontSize: "12px", color: "#888" }} />
                                    </span>
                                    <span className="footer-icon">
                                        <i className="fab fa-twitter" style={{ fontSize: "12px", color: "#888" }} />
                                    </span>
                                    {/* <span className="footer-icon">
                                        <i className="fab fa-play" style={{ fontSize: "12px",color:"#888" }} />
                                    </span> */}
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
export default connect(mapStateToProps)(ProductScreen)
