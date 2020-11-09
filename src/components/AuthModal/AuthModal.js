
import React, { Component } from 'react';
import img1 from '../../assets/slider/img1.png'
import img2 from '../../assets/slider/img2.png'
import img3 from '../../assets/slider/img3.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firebase from '../../firebase'
import Slider from "react-slick";
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

const items = [
    {
        src: img1,
        altText: 'Slide 1',
        caption: 'Help make OLX safer place to buy and sell'
    },
    {
        src: img2,
        altText: 'Slide 2',
        caption: 'Contact and close deals faster'
    },
    {
        src: img3,
        altText: 'Slide 3',
        caption: 'Save all your favourite items in one place'
    }
];

class AuthModal extends Component {

    state = {
        modal: false
    }
    toggle = () => this.setState({ modal: !this.state.modal });
    renderSlides = () =>
        items.map((num, index) => (
            <div key={index} tabIndex="-1" className="slide-container">
                <div className="sl-img-container">
                    <img src={num.src} className="slider-img" alt={num.altText} />
                </div>
                <h3 className="slide-text"><span>{num.caption}</span></h3>
            </div>
        ));
    facebookLogin = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)

            .then(function (result) {
                firebase.database().ref("/users").child(result.user.uid).set({
                    email: result.user.email,
                    name: result.user.displayName,
                    userImg: result.user.photoURL,
                    userId: result.user.uid,
                    userNumber: "",
                }).catch(function (error) {
                    console.log(error.code);
                    console.log(error.message);
                })
            }).catch(function (error) {
                console.log(error.code);
                console.log(error.message);
            });
    }
    googleLogin = () => {
        let changeModal = this.toggle
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)

            .then(function (result) {
                firebase.database().ref("/users").child(result.user.uid).set({
                    email: result.user.email,
                    name: result.user.displayName,
                    userImg: result.user.photoURL,
                    userId: result.user.uid,
                    userNumber: "",
                }).then(function () {   
                    changeModal()
                }).catch(function (error) {
                    console.log(error.code);
                    console.log(error.message);
                })
            }).catch(function (error) {
                console.log(error.code);
                console.log(error.message);
            });
    }
    render() {
        const {

            className
        } = this.props;
        const closeBtn = <button className="close" onClick={this.toggle}>X</button>;

        return (
            <div>
                <Modal
                    centered
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={className}
                >
                    <ModalHeader close={closeBtn} toggle={this.toggle}></ModalHeader>
                    <ModalBody>
                        <div className="slider-container">
                            <Slider
                                dots={true}
                                slidesToShow={1}
                                slidesToScroll={1}
                            >
                                {this.renderSlides()}
                            </Slider>

                        </div>
                        <button onClick={() => this.facebookLogin()} className="modal-button">
                            <span className="sl-btn-icon">
                                <i className="fab fa-facebook-f sl-icon"></i>
                            </span>
                            <span>Continue with Facebook</span>
                        </button>
                        <button onClick={() => this.googleLogin()} className="modal-button">
                            <span className="sl-btn-icon">
                                <i className="fab fa-google sl-icon"></i>
                            </span>
                            <span>Continue with Google</span>
                        </button>
                        <button className="modal-button">
                            <span>Continue with Email</span>
                        </button>
                        <h3 className="sl-info">We won't share your personal details with anyone</h3>
                        <h4 className="sl-terms">If you continue, you are accepting <span className="sl-link">OLX Terms and Conditions and Privacy Policy</span></h4>
                    </ModalBody>

                </Modal>
            </div>
        )
    }

}

export default AuthModal;