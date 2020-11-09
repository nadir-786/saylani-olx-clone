import React from "react";
import Slider from "react-slick";
import './ProductSlider.css'
import Img01 from "../../assets/products/image.png";
import Img02 from "../../assets/products/image.png";
import Img03 from "../../assets/products/image.png";
import Img04 from "../../assets/products/image.png";
import { Link } from "react-router-dom";

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

export const ProductSlider = () => {
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

  let images = [
    { img: Img01, name: "Zia-ullah Khan", designation: "team leader" },
    { img: Img02, name: "Adil Altaf", designation: "Founder AXIOM" },
    { img: Img03, name: "Amir Pinger", designation: "CNC lead teacher" },
    { img: Img04, name: "Daniyal Nagori", designation: "CNC teacher" },
    { img: Img04, name: "Daniyal Nagori", designation: "CNC teacher" },
    { img: Img04, name: "Daniyal Nagori", designation: "CNC teacher" },
    { img: Img04, name: "Daniyal Nagori", designation: "CNC teacher" },
    { img: Img04, name: "Daniyal Nagori", designation: "CNC teacher" },
    { img: Img04, name: "Daniyal Nagori", designation: "CNC teacher" },
    { img: Img04, name: "Daniyal Nagori", designation: "CNC teacher" },
    { img: Img04, name: "Daniyal Nagori", designation: "CNC teacher" },
    { img: Img04, name: "Daniyal Nagori", designation: "CNC teacher" },
    { img: Img04, name: "Daniyal Nagori", designation: "CNC teacher" },
    { img: Img04, name: "Daniyal Nagori", designation: "CNC teacher" },
    { img: Img04, name: "Daniyal Nagori", designation: "CNC teacher" },

  ];
  return (
    <div className="slider-cont">
      <div className="slider-h-container">
        <span>More on Other Business & Industry</span>
      </div>
      <div className="container-slider">
        <Slider className="container fluid" {...settings}>
          {images.map((image, i) => (
            <div key={i} className="sCard-container">
              <Link className="sCard-link" to='/'>
                <figure className="figure-container">
                  <img src={image.img} className="sCard-img" alt="" />
                </figure>
                <div className="sCard-content">
                  <span className="sCard-price">Rs 2000</span>
                  <span className="sCard-title">IPHONE 7</span>
                  <div className="sCard-footer">
                    <span className="sCard-location">Mirpur azad kashmir</span>
                    <span className="sCard-time"><span>Today</span></span>
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