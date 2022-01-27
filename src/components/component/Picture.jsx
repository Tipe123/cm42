import React from 'react';
import '../../styles/picture.css';

const Picture = ({picture , title}) => {
  return (
    <div className="mx-3" style={{width:'100%'}}>
                <div className="card mx-2">
              <img src={picture}  className="card-img-top" alt="..."  width="50"/>
              <h5 class="card-title">{title}</h5>
              </div>
          </div>
  );
};

export default Picture;
