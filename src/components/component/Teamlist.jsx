import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../../styles/Team.css';
const Teamlist = ({name , position,image,facebook,instagram,twitter,linkedin}) => {
  return (
    
    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div className="member">
            <div className="member-img">
                <img src={image} alt="Hero" className="img-fluid" />
                <div className="social">
                    <a href={instagram}>
                         <InstagramIcon />
                      </a>
                      <a href={facebook}>
                         <FacebookIcon />
                      </a>
                      <a href={twitter}>
                         <TwitterIcon />
                      </a>
                      <a href={linkedin}>
                         <LinkedInIcon />
                      </a>
                </div>
            </div>
            <div className="member-info">
                <h4>{name}</h4>
                <span>{position}</span>
            </div>
        </div>
    </div>

  );
};

export default Teamlist;
