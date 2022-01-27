import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Picture from "./component/Picture";
import {PictureList} from "../helpers/PictureList";
import { Link } from 'react-router-dom';


export default class Pictures extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "10px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div className="mb-3 sliders">
        <h2 className="mb-5">Our work show</h2>
      
        <Slider {...settings}>
          {PictureList.map((picture, key) => {
            key = {key};
            return <Picture picture={picture.picture} title={picture.type} />;
          })}
         
        
        </Slider>
        <p> Swipe </p>
        <div className="btn btn-primary mt-5"><Link to="Gallery" >More Images </Link></div>
      </div>
    );
  }
}
