import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import productImg from '../../assets/products/image.png'
import './ProductCard.css'
export default class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fav: false
        }
    }
    render() {
        return (
            <div className="product-container">
                <Link className="product-link" to='/'>
                    <figure className="figure-container">
                        <img src={productImg} className="product-img" alt="" />
                    </figure>
                    <div className="product-content">
                        <span className="product-price">Rs 2000</span>
                        <span className="product-title">IPHONE 7</span>
                        <div className="product-footer">
                            <span className="product-location">Mirpur azad kashmir</span>
                            <span className="product-time"><span>Today</span></span>
                        </div>
                    </div>

                    <span className="fav-ico">
                        <button className="fav-btn">
                            <i className={this.state.fav ? "fa fa-heart" : "fa fa-heart-o"} ></i>
                        </button>
                    </span>
                </Link>

            </div>
        )
    }
}
