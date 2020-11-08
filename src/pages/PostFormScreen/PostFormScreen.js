import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostHeader from '../../components/PostHeader/PostHeader'
// import firebase from '../../firebase'
import './PostForm.css'
import { Link } from 'react-router-dom'
class PostFormScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            title: "",
            description: "",
            price: "",
            photos: "",
            location: "",
            creatorName: "",
            creatorPhone: "",
            creatorImg: "",
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        this.setCategory()
    }
    setCategory() {
        const { name, userImg, email } = this.props.currentUser.userData
        let data = window.location.pathname.split("/")[2]
        let customCategory = data.split("-").join(" ");
        this.setState({ category: customCategory, creatorName: name, creatorPhone: null, creatorImg: userImg })
    }
    componentWillReceiveProps(nextProps) {
        const { name, userImg, email } = nextProps.currentUser.userData
        this.setState({ creatorName: name, creatorPhone: null, creatorImg: userImg })
    }
    render() {
        return (
            <div className="home-page">
                <PostHeader redirect="/post" />
                <main>
                    <div className="category-main-container">
                        <div className="category-select-cont">
                            <h3 className="category-post-h">Post Your AD</h3>
                            <div className="category-choose-cont">
                                <h3 className="catergory-ch-h">Selected Category</h3>
                                <div className="post-category-cont">
                                    <div className="post-category">
                                        {this.state.category}
                                    </div>
                                    <div className="post-category-change">
                                        <Link to="/post" className="category-change-btn">
                                            <span className="category-change-text">Change</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="post-form-cont">
                                    <div className="post-form">
                                        <div className="post-form-basic">
                                            <div className="post-basic-info">
                                                <h2 className="post-basic-h">Include some details</h2>
                                                <div className="post-input-cont">
                                                    <label htmlFor="title" className="post-label-title">Ad title</label>
                                                    <div className="post-input-box">
                                                        <input type="text" className="post-input-title" />
                                                    </div>
                                                    <div className="post-helper-cont">
                                                        <span className="post-helper-text">Mention the key features of your item (e.g. brand, model, age, type)</span>
                                                        <span className="post-helper-count">9/70</span>
                                                    </div>
                                                </div>
                                                <div className="post-input-cont">
                                                    <label htmlFor="title" className="post-label-title">Description</label>
                                                    <div className="post-input-box">
                                                        <textarea type="text" className="post-input-description" />
                                                    </div>
                                                    <div className="post-helper-cont">
                                                        <span className="post-helper-text">Include condition, features and reason for selling</span>
                                                        <span className="post-helper-count">9/70</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-form-price">
                                            <div className="post-basic-info">
                                                <h2 className="post-basic-h">Set a price</h2>
                                                <div className="post-input-cont">
                                                    <label htmlFor="title" className="post-label-price">Ad title</label>
                                                    <div className="post-price-box">
                                                        <div className="post-price-unit">Rs</div>
                                                        <input type="text" className="post-input-price" />
                                                    </div>

                                                </div>
                                            </div>

                                        </div>


                                        <div className="post-form-price">
                                            <div className="post-basic-info">
                                                <h2 className="post-basic-h">Upload upto 12 photos</h2>
                                                <div className="post-photo-cont">
                                                    <div className="post-ph-cont">
                                                        <div onClick={() => document.getElementById("photoFiles").click()} className="post-ph-content">
                                                            <input type="file" id="photoFiles" style={{ display: "none" }} name="files" multiple />
                                                            <i className="fa fa-camera" style={{ fontSize: '35px', }}></i>
                                                            <span className="post-ph-text">Add Photos</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-helper-cont">
                                                    <span className="post-helper-text" style={{ marginTop: "30px", color: "red" }}>This field is mandatory</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="post-form-price">
                                            <div className="post-basic-info">
                                                <h2 className="post-basic-h">CONFIRM YOUR LOCATION</h2>
                                                <div className="post-input-cont">
                                                    <label htmlFor="title" className="post-label-title">State</label>
                                                    <div className="post-state-box">
                                                        <select selected="" className="post-input-state">
                                                            <option value=""></option>
                                                            <option value="azad-kashmir">Azad Kashmir</option>
                                                            <option value="balochistan">Balochistan</option>
                                                            <option value="islamabad">Islamabad</option>
                                                            <option value="khyber-pakhtunkhwa">khyber-pakhtunkhwa</option>
                                                            <option value="northern-areas">Northern Areas</option>
                                                            <option value="punjab">Punjab</option>
                                                            <option value="sindh">Sindh</option>
                                                        </select>
                                                        <i className="fa fa-chevron-down" style={{ margin: "10px" }}></i>
                                                    </div>
                                                    <div className="post-helper-cont">
                                                        <span className="post-helper-text" style={{ marginTop: "30px", color: "red" }}>This field is mandatory</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="post-form-price">
                                            <div className="post-basic-info">
                                                <h2 className="post-basic-h">REVIEW YOUR DETAILS</h2>
                                                <div className="detail-user-cont">
                                                    <div className="detail-user-img">
                                                        <div style={{ backgroundImage: `url(${this.state.creatorImg})`, height: "100px", width: "100px", borderRadius: "50%" }}></div>
                                                    </div>
                                                    <div className="detail-user-info">
                                                        <div className="post-input-cont">
                                                            <label htmlFor="title" className="post-label-title">Name</label>
                                                            <div className="post-input-box">
                                                                <input type="text" value={this.state.creatorName} onChange={(e) => this.setState({ creatorName: e.target.value })} className="post-input-title" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="detail-contact-info">
                                                    <h3 className="detail-contact-h">Let's verify your account</h3>
                                                    <span>We will send you a confirmation code by sms on the next step</span>
                                                    <div className="post-input-cont">
                                                        <label htmlFor="title" className="post-label-price">Mobile Phone Number *</label>
                                                        <div className="post-price-box">
                                                            <div className="post-price-unit">+92</div>
                                                            <input type="text" className="post-input-price" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                        <div className="post-submit-cont">
                                            <button type="submit" className="post-submit-btn"><span>Post now</span></button>
                                        </div>


                                    </div>
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
export default connect(mapStateToProps)(PostFormScreen)
