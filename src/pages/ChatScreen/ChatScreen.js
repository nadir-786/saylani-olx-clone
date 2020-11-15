import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import SubHeader from '../../components/SubHeader/SubHeader'
import playstore from '../../assets/banner/playstore.png'
import applestore from '../../assets/banner/appstore.jpg'

import firebase from '../../firebase'
import './ChatScreen.css'
class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentChatUser: {},
            allUsers: [],
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.getAllUsers()
    }
    getAllUsers() {
        let allUsersData = [];
        firebase.database().ref("/users").once("value", (snapshot) => {
            let gotData = snapshot.val();
            for (var key in gotData) {
                if(gotData[key].userId !== firebase.auth().currentUser.uid){
                    allUsersData.push(gotData[key]);
                }
            }
        }).then(() => {
            this.setState({ allUsers: allUsersData })
        })
    }

    setUser(user){
        this.setState({currentChatUser: user},()=>{
            this.getMessages();
        })
    }

    generateId(uid1, uid2) {
        if (uid1 < uid2) {
            return uid1 + uid2
        } else {
            return uid2 + uid1
        }
    }


    getMessages(){
        let userId = firebase.auth().currentUser.uid;
        let otherId = this.state.currentChatUser.userId
        let room = this.generateId(userId,otherId);
        firebase.database().ref(`/chats/${room}`).on("child_added",(snapshot)=>{
            console.log(snapshot.val())
        })
    }

    sendMessages(){

    }

    render() {
        return (

            <div className="home-page">
                <Header />
                <SubHeader />
                <main>
                    <div className="center-container">
                        <h2>Chat Screen</h2>

                        <div className="chat-container" style={{ display: 'flex', minHeight: "80vh" }}>
                            <div className="chat-left-cont" style={{ width: "300px" }}>
                                <ul>
                                    {this.state.allUsers.map((user) => (
                                        <li>
                                            <p>{user.name}</p>
                                            <button onClick={() => this.setUser(user)}>Chat</button>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                            <div className="chat-right-cont">
                                <ul>
                                    <li>hi</li>
                                </ul>
                                <div className="send-cont">
                                    <input type="text"/>
                                    <button onClick={() => this.sendMessages()}>Send</button>
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
export default connect(mapStateToProps)(ChatScreen)
