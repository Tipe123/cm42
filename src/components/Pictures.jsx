import React from "react";
import Picture from "./component/Picture";
import {PictureList} from "../helpers/PictureList";

import '../styles/picture.css';

 const Pictures = () => {
    return (
      
        <div className="gallery">
          {PictureList.map((picture, key) => {
            key = {key};
            if(picture.id >= 3 && picture.id <=9){
            return <Picture picture={picture.picture} id={picture.id} />;
          }else{
            return null;
          }
          })}
          </div>
    );
  }

  export default Pictures
