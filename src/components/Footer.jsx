import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import '../styles/Footer.css';
const Footer = ({instagram,facebook,twitter,linkedin}) => {
  return (<footer id="footer" className="mt-2">
     <div className="footer-top">
         <div className="container">
             <div className="row justify-content-center">
                 <div className="col-lg-6">
                     <h3 className="text-dark">
                         CM42 
                     </h3>
                     <p>You can subscibe to our newsletter and get notifications from us!</p>
                 </div>
             </div>
             <div className="row footer-newsletter justify-content-center">
                 <div className="col-lg-6">
                     <form>
                            <input type="email" name="email" placeholder="Enter your email" />
                            <input type="submit" value="Subscribe" />
                     </form>
                 </div>
             </div>
             <div className="social-links">
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
     </div>
     <div className="footer-bottom clear-fix">
         <div className="copyright">
                &copy; Copyright <strong>CM42</strong>. All Rights Reserved
         </div>
         <div className="credits">
             Designed by  
             <a href="/" className="px-2">
             Monyemangene
             </a>
         </div>
     </div>
  </footer>);
};

export default Footer;
