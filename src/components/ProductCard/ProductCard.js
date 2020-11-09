import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'
export default class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fav: false
        }
    }
    getDisplayDate(givenDate) {
        let myDate = givenDate.split("T")[0].split("-");
        let year = myDate[0];
        let month = myDate[1];
        let day = myDate[2];
        let today;
        let compDate;
        let diff;
        today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);
        compDate = new Date(year, month - 1, day); // month - 1 because January == 0
        diff = today.getTime() - compDate.getTime(); // get the difference between today(at 00:00:00) and the date
        if (compDate.getTime() == today.getTime()) {
            return "Today";
        } else if (diff <= (24 * 60 * 60 * 1000)) {
            return "Yesterday";
        } else {
            let sendDate = compDate.toDateString().split(" ");
            sendDate.shift();
            let finalDate = sendDate.join(" ");
            return finalDate;
        }
    }
    render() {
        const {
            title,
            price,
            state,
            city,
            photos,
            createdAt,
            featured,
        } = this.props.data

        return (
            <div className="product-container ">
                <Link className="product-link" to='/item/'>
                    <figure className="figure-container">
                        <img src={photos[0]} className="product-img" alt="product-img" />
                    </figure>
                    {featured && <div className="feature-box">
                        <label htmlFor="feature-product" className="feature-label">
                            <span className="feature-h">Featured</span>
                        </label>
                    </div>}

                    <div className={`product-content ${featured ? "product-feature-oultine" : null}`}>

                        <span className="product-price">Rs {price}</span>
                        <span className="product-title">{title}</span>
                        <div className="product-footer">
                            <span className="product-location">{city} {state}</span>
                            <span className="product-time"><span>{this.getDisplayDate(createdAt)}</span></span>
                        </div>
                    </div>

                </Link>
                    <span className="fav-ico">
                        <button className="fav-btn" onClick={() => this.setState({fav : !this.state.fav})}>
                            <i className={this.state.fav ? "fa fa-heart" : "far fa-heart"} ></i>
                        </button>
                    </span>

            </div>
        )
    }
}
