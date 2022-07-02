import React from 'react';


const Picture = ({picture , id}) => {
  return (
      <figure className={`gallery_item gallery_item-${id}`}>
              <img src={picture}  className="gallery_img" alt="..."  style={{width:"100%",flex:"50%"}}/>
      </figure>
  );
};

export default Picture;
