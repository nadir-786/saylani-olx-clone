import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostHeader from '../../components/PostHeader/PostHeader'
import firebase from '../../firebase'
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
            photos: [],
            state: "",
            city: "",
            creatorName: "",
            creatorPhone: "",
            creatorImg: "",
            creatorUid: "",
            loading: false  ,
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        if (this.props.currentUser.userData) {
            this.setCategory()
        }
    }
    setCategory() {
        const { name, userImg, email, userId } = this.props.currentUser.userData
        let data = window.location.pathname.split("/")[2]
        let customCategory = data.split("-").join(" ");
        this.setState({ category: customCategory, creatorName: name, creatorPhone: "", creatorImg: userImg, creatorUid: userId, })
    }
    componentWillReceiveProps(nextProps) {
        let data = window.location.pathname.split("/")[2]
        let customCategory = data.split("-").join(" ");
        const { name, userImg, userId } = nextProps.currentUser.userData
        this.setState({ category: customCategory, creatorName: name, creatorPhone: "", creatorImg: userImg, creatorUid: userId })
    }
    onSubmit = async (e) => {
        e.preventDefault();
        var myRef = this;
        this.setState({ loading: true })
        const { category, title, description, price, state, city, creatorName, creatorPhone, creatorImg, creatorUid } = this.state;
        const product = {
            category,
            title,
            description,
            price,
            state,
            city,
            creatorName,
            creatorPhone,
            creatorImg,
            creatorUid
        }
        let files = this.state.photos;
        let urls = []
        firebase.storage().ref().constructor.prototype.putFiles = function (files) {
            var ref = this;
            return Promise.all(files.map(async function (file) {
                var uploadTask = ref.child(file.name).put(file).then(async(snapshot)=>{
                    var downloadUrl = await snapshot.ref.getDownloadURL();
                    console.log(downloadUrl)
                    urls.push(downloadUrl)
                })
                return uploadTask
            }));
        }

        // use it!
        firebase.storage().ref().putFiles(files).then(function (metadatas) {
            let newProduct = product;
            let random_boolean = Math.random() <= 0.4;
            newProduct["photos"] = urls;
            newProduct["featured"] = random_boolean;
            newProduct["createdAt"] = new Date().toISOString();
            firebase.database().ref("/products/").push(newProduct).then((doc) => {
                doc.update({ productId: doc.key })
                // this.setState({ loading: false })
                myRef.setState({loading: false})
               window.location.href = "/";
            }).catch((err) => {
                console.log(err)
                // this.setState({ loading: false })
                myRef.setState({loading: false})
            })
        }).catch(function (error) {
            // If any task fails, handle this
            // this.setState({ loading: false })
            myRef.setState({loading: false})
        });


    }
    setFiles(e) {
        console.log(e.target.files)
        let myfiles = []
        for (let i = 0; i < e.target.files.length; i++) {
            const newFile = e.target.files[i];
            newFile["id"] = Math.random();
            // add an "id" property to each File object
            // setFiles(prevState => [...prevState, newFile]);
            myfiles.push(newFile)
        }
        this.setState({ photos: myfiles})
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
                                <form onSubmit={this.onSubmit}>

                                    <div className="post-form-cont">
                                        <div className="post-form">
                                            <div className="post-form-basic">
                                                <div className="post-basic-info">
                                                    <h2 className="post-basic-h">Include some details</h2>
                                                    <div className="post-input-cont">
                                                        <label htmlFor="title" className="post-label-title">Ad title</label>
                                                        <div className="post-input-box">
                                                            <input required value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} type="text" className="post-input-title" />
                                                        </div>
                                                        <div className="post-helper-cont">
                                                            <span className="post-helper-text">Mention the key features of your item (e.g. brand, model, age, type)</span>
                                                            <span className="post-helper-count">9/70</span>
                                                        </div>
                                                    </div>
                                                    <div className="post-input-cont">
                                                        <label htmlFor="title" className="post-label-title">Description</label>
                                                        <div className="post-input-box">
                                                            <textarea required type="text" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} className="post-input-description" />
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
                                                            <input required type="text" value={this.state.price} onChange={(e) => this.setState({ price: e.target.value })} className="post-input-price" />
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
                                                                <input type="file" onChange={(e) => this.setFiles(e)} id="photoFiles" style={{ display: "none" }} name="files" multiple />
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
                                                            <select required value={this.state.state} onChange={(e) => this.setState({ state: e.target.value })} selected="" className="post-input-state">
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
                                                    </div>
                                                    <div className="post-input-cont">
                                                        <label htmlFor="title" className="post-label-title">City</label>
                                                        <div className="post-input-box">
                                                            <input required type="text" onChange={(e) => this.setState({ city: e.target.value })} className="post-input-title" />
                                                        </div>
                                                        <div className="post-helper-cont">
                                                            <span className="post-helper-text" style={{ marginTop: "30px", color: "red" }}>These field are mandatory</span>
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
                                                                    <input required type="text" value={this.state.creatorName} onChange={(e) => this.setState({ creatorName: e.target.value })} className="post-input-title" disabled />
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
                                                                <input required value={this.state.creatorPhone} onChange={(e) => this.setState({ creatorPhone: e.target.value })} type="text" className="post-input-price" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                            <div className="post-submit-cont">
                                                <button type="submit" className="post-submit-btn" disabled={this.props.loading}>
                                                    {this.state.loading ? <span className="spinner-border spinner-border-sm post-submit-loader" role="status" aria-hidden="true"></span>:null}
                                                    <span>Post now</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
