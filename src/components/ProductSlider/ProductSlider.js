import React from "react";
import Slider from "react-slick";
import './ProductSlider.css'
import Img01 from "../../assets/products/image.png";
import Img02 from "../../assets/products/image.png";
import Img03 from "../../assets/products/image.png";
import Img04 from "../../assets/products/image.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function SampleNextArrow(props) {
  const { className, style, onClick, currentSlide, slideCount } = props;
  if (currentSlide !== slideCount - 3) {
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ ...style, background: "transparent", height: "70px", width: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <i className="fa fa-chevron-right" style={{ color: "#000", fontSize: "25px" }}></i>
      </div>
    );
  } else {
    return null
  }
}
function getDisplayDate(givenDate) {
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
function SamplePrevArrow(props) {
  const { className, style, onClick, currentSlide } = props;
  if (currentSlide !== 0) {
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ ...style, background: "transparent", height: "70px", width: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <i className="fa fa-chevron-left" style={{ color: "#000", fontSize: "25px" }}></i>
      </div>
    );
  } else {
    return null
  }

}

const ProductSlider = (props) => {
  let settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      }
    ]
  };

  return (
    <div className="slider-cont">
      <div className="slider-h-container">
        <span>More on Other Business & Industry</span>
      </div>
      <div className="container-slider">
        <Slider className="container fluid" {...settings}>
          {props.productsData.products.map((product, i) => (
              <div key={i} className="sCard-container">
                <Link className="sCard-link" to={`/item/${product.productId}`}>
                  <figure className="figure-container">
                    <img src={product.photos[0]} className="sCard-img" alt="" />
                  </figure>
                  {product.featured && <div className="feature-box">
                    <label htmlFor="feature-product" className="feature-label">
                      <span className="feature-h">Featured</span>
                    </label>
                  </div>}
                  <div className={`sCard-content ${product.featured ? "product-feature-oultine" : null}`} >
                    <span className="sCard-price">Rs {product.price}</span>
                    <span className="sCard-title">{product.title}</span>
                    <div className="sCard-footer">
                      <span className="sCard-location">{product.city} {product.state}</span>
                      <span className="sCard-time"><span>{getDisplayDate(product.createdAt)}</span></span>
                    </div>
                  </div>

                  <span className="fav-ico">
                    <button className="fav-btn">
                      <i className={false ? "fa fa-heart" : "far fa-heart"} ></i>
                    </button>
                  </span>
                </Link>
              </div>
          ))
          }
        </Slider>
      </div>
    </div>

  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.UserReducer,
    productsData: state.ProductReducer
  }
}
export default connect(mapStateToProps)(ProductSlider)