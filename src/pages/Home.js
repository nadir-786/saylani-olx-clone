import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import ProductCard from '../components/ProductCard/ProductCard'
import firebase from '../firebase'
class Home extends Component {
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
                <Header />
                <div className="mega-menu">

                    <ul className="menu-list">
                       <li className="menu-item list-hover">
                            <a href="/">All Categories</a>
                            <ul className="mega-sub-menu">
                                <li className="menu-sub-item menu-sub-item-title">
                                    <a href="/"> <h3>Vehicle</h3> </a>
                                    <ul>
                                        <li className="menu-sub-item-list"><a href="/">Tractor & trailer</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Boats</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Other Vehicle</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Rickshaw & Chingchi</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Buses, Vans & Tucks</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Spare parts</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Car Accessories</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Car</a></li>
                                    </ul>
                                    <a href="/"> <h3>Mobiles</h3> </a>
                                    <ul>
                                        <li className="menu-sub-item-list"><a href="/">Mobile Phones</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Accessories</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Tablets</a></li>
                                    </ul>
                                    <a href="/"> <h3>Electronics & Home Appliances</h3> </a>
                                    <ul>
                                        <li className="menu-sub-item-list"><a href="/">Washing Machines & Dryers</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Fridges & Freezers</a></li>
                                        <li className="menu-sub-item-list"><a href="/">AC & Coolers</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Kitchen Appliances</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Generators, UPS & Power Solutions</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Other Home Appliances</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Games & Entertainment</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Cameras & Accessories</a></li>
                                        <li className="menu-sub-item-list"><a href="/">TV - Video - Audio</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Computers & Accessories</a></li>
                                    </ul>
                                    <a href="/"> <h3>Property for Sale</h3> </a>
                                    <ul>
                                        <li className="menu-sub-item-list"><a href="/">Portions & Floors</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Shops - Offices - Commercial Space</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Apartments & Flats</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Houses</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Land & Plots</a></li>
                                    </ul>
                                </li>
                                <li className="menu-sub-item menu-sub-item-title">
                                    <a href="/"> <h3>Animals</h3> </a>
                                    <ul>
                                        <li className="menu-sub-item-list"><a href="/">Other Animals</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Pets Food & Accessories</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Horses</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Livestock</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Dogs</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Cats</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Hens & Aseel</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Birds</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Fish & Aquariums</a></li>
                                    </ul>
                                    <a href="/"> <h3>Furniture & Home Decor</h3> </a>
                                    <ul>
                                        <li className="menu-sub-item-list"><a href="/">Other Household items</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Office Furniture</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Curtains & Blinds</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Rugs & Carpets</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Painting & Mirrors</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Garden & Outdoor</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Tables & Dinnin</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Home Decoration</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Beds & Wardrobes</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Sofa & Chains</a></li>
                                    </ul>
                                    <a href="/"> <h3>Business, Industrial & Agriculture</h3> </a>
                                    <ul>
                                        <li className="menu-sub-item-list"><a href="/">Medical & Pharma</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Other Business & Industry</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Agriculturet</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Construction & Heavy Machinery</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Trade & Industrial</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Food & Restaurants</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Business for Sale</a></li>
                                    </ul>
                                    <a href="/"> <h3>Bikes</h3> </a>
                                    <ul>
                                        <li className="menu-sub-item-list"><a href="/">Scooters</a></li>
                                        <li className="menu-sub-item-list"><a href="/">ATV & Quads</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Bicycles</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Spare Parts</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Motorcycles  </a></li>
                                    </ul>
                                </li>
                                <li className="menu-sub-item menu-sub-item-title">
                                    <a href="/"> <h3>Fashion & Beauty</h3> </a>
                                    <ul>
                                        <li className="menu-sub-item-list"><a href="/">Other Fashion</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Coutune</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Lawn & Pret</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Wedding</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Watches</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Skin & Hair </a></li>
                                        <li className="menu-sub-item-list"><a href="/">Make Up </a></li>
                                        <li className="menu-sub-item-list"><a href="/">Jewellery</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Footwear</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Clothes</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Accessories</a></li>
                                    </ul>
                                    <a href="/"> <h3>Property For Rent</h3> </a>
                                    <ul>
                                        <li className="menu-sub-item-list"><a href="/">Land & Plots</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Vacation Rentals - Guest Houses</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Roommates & Paying Guests</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Rooms</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Shops - Offices - Commercial Space</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Portions & Floors</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Apartments & Flats</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Houses</a></li>
                                    </ul>
                                    <a href="/"> <h3>Jobs</h3> </a>
                                    <ul>
                                        <li className="menu-sub-item-list"><a href="/">Other Jobs</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Part - Time</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Domestic Staff</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Medical</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Manufacturing</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Accounting & Finance</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Human Resources</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Clerical & Administration</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Hotels & Tourism</a></li>
                                        <li className="menu-sub-item-list"><a href="/">IT & Networking</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Sales</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Customer Service</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Education</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Advertising & PR</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Marketing</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Online</a></li>
                                    </ul>
                                </li>
                                <li className="menu-sub-item menu-sub-item-title">
                                <a href="/"> <h3>Service</h3> </a>
                                    <ul>
                                        <li className="menu-sub-item-list"><a href="/">Farm & Fresh Foods</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Catering & Restaurant</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Home & Office</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Movers & packers</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Maids & Domestic Help</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Health & Beauty</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Event Services</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Electronic & Computer Repair</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Other Services</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Web Developement</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Driver & Taxi</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Car Rental</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Travel & Visa</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Education & Classes</a></li>
                                    </ul>
                                    <a href="/"> <h3>Books, Sports & Hobbies</h3> </a>
                                    <ul>
                                        <li className="menu-sub-item-list"><a href="/">Other Hobbies</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Gym & Fitness</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Sports Equipment</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Musical Instruments</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Books & Magazines</a></li>
                                    </ul>
                                    <a href="/"> <h3>Kids</h3> </a>
                                    <ul>
                                        <li className="menu-sub-item-list"><a href="/">Kids Accessories</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Kids Bikes</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Swings & Slides</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Prams & Walkers</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Toys</a></li>
                                        <li className="menu-sub-item-list"><a href="/">Kids Furniture</a></li>
                                    </ul>
                                </li>
                            </ul>
                            
                        </li>
                        
                        <li className="menu-item list-hover"><a href="/">Mobile Phones</a></li>
                        <li className="menu-item list-hover"><a href="/">Cars</a></li>
                        <li className="menu-item list-hover"><a href="/">Motorcycles</a></li>
                        <li className="menu-item list-hover"><a href="/">House</a></li>
                        <li className="menu-item list-hover"><a href="/">TV-Video-Audio</a></li>
                        <li className="menu-item list-hover"><a href="/">Land {"&"} Plots</a></li>
                        <li className="menu-item list-hover"><a href="/">Tablets</a></li>
                        <li className="menu-item list-hover"><a href="/">Land and Plots</a></li>
                        
                    </ul>

                </div>
                {/* <ProductCard /> */}
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
