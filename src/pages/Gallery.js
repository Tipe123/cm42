import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {PictureList} from "../helpers/PictureList";
import Picture from '../components/component/Picture';


import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default class Gallery extends Component {
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
      <div className="mb-3 mt-4 sliders">
        <h2 className="mb-5 mt-5">Electrical Eng</h2>
      
        <Slider {...settings}>
          {PictureList.map((picture, key) => {
            key = {key};
            if(picture.type === "Electrical"){
            return <Picture picture={picture.picture} title={picture.type} />;
            }
          })}
         
         

        </Slider>

        <p className="mt-2"> <ChevronLeftIcon /> Swipe <ChevronRightIcon /> </p>

        <h2 className="mt-3 mb-5">Mechanical</h2>
        <Slider {...settings}>
          {PictureList.map((picture, key) => {
            key = {key};
            if(picture.type === "Mechanical"){
            return <Picture picture={picture.picture} title={picture.type} />;
            }
          })}
         
        
        </Slider>
        
        <p className="mt-2"> <ChevronLeftIcon /> Swipe <ChevronRightIcon /> </p>
 
      </div>
    );
  }
}

