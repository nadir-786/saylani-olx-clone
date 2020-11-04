import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import "../css/teamSlider.css";
import { Typography } from "@material-ui/core";
// import { Img01, Img02, Img03, Img04} from '../images/images'
import Img01 from "../assets/zia-khan.png";
import Img02 from "../assets/adil-altaf.png";
import Img03 from "../assets/amir-pinger.png";
import Img04 from "../assets/daniyal-nagori.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, display: "block", background: "grey", borderRadius: "15px" }}
     />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, display: "block", background: "grey", borderRadius: "15px" }}
    />
  );
}

export const ProductSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  let images = [
    { img: Img01, name: "Zia-ullah Khan", designation: "team leader" },
    { img: Img02, name: "Adil Altaf", designation: "Founder AXIOM" },
    { img: Img03, name: "Amir Pinger", designation: "CNC lead teacher" },
    { img: Img04, name: "Daniyal Nagori", designation: "CNC teacher" },

  ];
  return (
    <div className="container-slider">
      <Slider className="container" {...settings}>
        {images.map((image, i) => (
          <div key={i}>
            <h3 className="circlediv" ><img alt="team" src={image.img} /></h3>
            <h2>{image.name}</h2>
            <h5 className="designation">{image.designation}</h5>
          </div>))
        }
      </Slider>
    </div>

  );
};