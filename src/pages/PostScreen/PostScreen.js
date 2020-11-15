import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostHeader from '../../components/PostHeader/PostHeader'
import RoomServiceIcon from '@material-ui/icons/RoomService';
import RoomIcon from '@material-ui/icons/Room';
import firebase from '../../firebase'
import './PostScreen.css'
import { ProductSlider } from '../../components/ProductSlider/ProductSlider'
import { Link } from 'react-router-dom'
class PostScreen extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    signInUser() {
        firebase.auth().signInWithEmailAndPassword("nadir@gmail.com", "123456").then(() => {
            console.log("User has just signed in ")
        }).catch((err) => {
            console.log("User has just signed out ", err)
        })
    }
    render() {
        return (
            <div className="home-page">
                <PostHeader redirect="/" />
                <main>
                    <div className="category-main-container">
                        <div className="category-select-cont">
                            <h3 className="category-post-h">Post Your AD</h3>
                            <div className="category-choose-cont">
                                <h3 className="catergory-choose-h">CHOOSE A CATEGORY</h3>
                                <div className="category-list-cont">
                                    <ul className="category-list">
                                        <Link className="category-item-link" to="/post/mobile">
                                            <li className="category-item">
                                                <i className="fa fa-mobile category-icon" style={{ fontSize: '15px', }}></i>
                                                <span className="category-name">Mobiles</span>
                                                <i className="fa fa-chevron-right category-select-icon"></i>
                                            </li>
                                        </Link>
                                        <Link className="category-item-link" to="/post/vehical">
                                            <li className="category-item">
                                                <i className="fa fa-car category-icon" style={{ fontSize: '15px', }}></i>
                                                <span className="category-name">Vehical</span>
                                                <i className="fa fa-chevron-right category-select-icon"></i>
                                            </li>
                                        </Link>
                                        <Link className="category-item-link" to="/post/property-for-sale">
                                            <li className="category-item">
                                                <i className="fa fa-building category-icon" style={{ fontSize: '15px', }}></i>
                                                <span className="category-name">Property for Sale</span>
                                                <i className="fa fa-chevron-right category-select-icon"></i>
                                            </li>
                                        </Link>
                                        <Link className="category-item-link" to="/post/property-for-rent">
                                            <li className="category-item">
                                            <RoomIcon style={{ fontSize: '15px', }} className="category-icon"></RoomIcon>
                                                <span className="category-name">Property for Rent</span>
                                                <i className="fa fa-chevron-right category-select-icon"></i>
                                            </li>
                                        </Link>
                                        <Link className="category-item-link" to="/post/electronics-&-home-appliances">
                                            <li className="category-item">
                                                <i className="fa fa-television category-icon" style={{ fontSize: '15px', }}></i>
                                                <span className="category-name">Electronic & Home Appliances</span>
                                                <i className="fa fa-chevron-right category-select-icon"></i>
                                            </li>
                                        </Link>
                                        <Link className="category-item-link" to="/post/bikes">
                                            <li className="category-item">
                                                <i className="fa fa-motorcycle category-icon" style={{ fontSize: '15px', }}></i>
                                                <span className="category-name">Bikes</span>
                                                <i className="fa fa-chevron-right category-select-icon"></i>
                                            </li>
                                        </Link>
                                        <Link className="category-item-link" to="/post/business-industrial-&-agricultural">
                                            <li className="category-item">
                                                <i className="fa fa-industry category-icon" style={{ fontSize: '15px', }}></i>
                                                <span className="category-name">Business, Industrial & Agriculture</span>
                                                <i className="fa fa-chevron-right category-select-icon"></i>
                                            </li>
                                        </Link>
                                        <Link className="category-item-link" to="/post/services">
                                            <li className="category-item">
                                                <RoomServiceIcon style={{ fontSize: '15px', }} className="category-icon"></RoomServiceIcon>
                                                <span className="category-name">Services</span>
                                                <i className="fa fa-chevron-right category-select-icon"></i>
                                            </li>
                                        </Link>
                                        <Link className="category-item-link" to="/post/jobs">
                                            <li className="category-item">
                                                <i className="fa fa-briefcase category-icon" style={{ fontSize: '15px', }}></i>
                                                <span className="category-name">Jobs</span>
                                                <i className="fa fa-chevron-right category-select-icon"></i>
                                            </li>
                                        </Link>
                                        <Link className="category-item-link" to="/post/animals">
                                            <li className="category-item">
                                                <i className="fa fa-dog category-icon" style={{ fontSize: '15px', }}></i>
                                                <span className="category-name">Animals</span>
                                                <i className="fa fa-chevron-right category-select-icon"></i>
                                            </li>
                                        </Link>
                                        <Link className="category-item-link" to="/post/future-&-home-decor">
                                            <li className="category-item">
                                                <i className="fa fa-couch category-icon" style={{ fontSize: '15px', }}></i>
                                                <span className="category-name">Future & Home Decor</span>
                                                <i className="fa fa-chevron-right category-select-icon"></i>
                                            </li>
                                        </Link>
                                        <Link className="category-item-link" to="/post/fashion-&-beauty">
                                            <li className="category-item">
                                                <i className="fa fa-tshirt category-icon" style={{ fontSize: '15px', }}></i>
                                                <span className="category-name">Fashion & Beauty</span>
                                                <i className="fa fa-chevron-right category-select-icon"></i>
                                            </li>
                                        </Link>
                                        <Link className="category-item-link" to="/post/books,-sports-&-Hobbies">
                                            <li className="category-item">
                                                <i className="fa fa-guitar category-icon" style={{ fontSize: '15px', }}></i>
                                                <span className="category-name">Books, Sports & Hobies</span>
                                                <i className="fa fa-chevron-right category-select-icon"></i>
                                            </li>
                                        </Link>
                                        <Link className="category-item-link" to="/post/kids">
                                            <li className="category-item">
                                                <i className="fa fa-baby category-icon" style={{ fontSize: '15px', }}></i>
                                                <span className="category-name">Kids</span>
                                                <i className="fa fa-chevron-right category-select-icon"></i>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                </main>
                <footer>
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
export default connect(mapStateToProps)(PostScreen)
