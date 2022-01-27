import React from 'react';
import '../../styles/Services.css';
import { Link } from 'react-router-dom';

const Vlaue = ({name , descript , icon}) => {
    return (
       
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="des-box m-2">
                <div className="icon">
                 {icon}
                </div>
                <h4 className="title">
                    
                    <Link to="">
                        {name}
                    </Link>
                    </h4>
                    <p className="description">
                        {descript}
                         </p>
            </div>
        </div>);
};

export default Vlaue;
