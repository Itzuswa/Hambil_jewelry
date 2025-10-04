import { Link } from "react-router-dom";

import Logo from './../../src/assets/Logo.png';
export default function Footer() {
   return (<>
      <div className="background-footer">
         <div className="footer-section">
            <div className="footer-logo-brand">

               <img className="footer-logo" src={Logo} alt="Logo" />
               <h1 className="brand-title">
                  Hambil Jewelry Cad
               </h1>
            </div>

            <div className="footer-contact-info-section">
               <span className="sec-1">
                  <h6 className="footer-detail-about-brand">Hamil Jewlery CAD offers jewelry cad design services along with rendering and animation solutions.</h6>
                  <div className="contact-links">
                     <i className="fa-brands fa-facebook"></i>
                     <i className="fa-brands fa-instagram"></i>
                     <i className="fa-brands fa-youtube"></i>
                  </div>
               </span>
               <div className="contact-sec">

                  <h6 className="contact-us-title">CONTACT US</h6>
                  <div className="location">
                     <i className="fa-solid fa-location-dot"></i>
                     <p>
                        Ghalib Road, Gulberg 3 Lahore , Pakistan
                     </p>
                  </div>
                  <div className="phone">
                     <i className="fa-solid fa-phone"></i>
                     <p>
                        +923278535643
                     </p>
                  </div>
                  <div className="email">
                     <i className="fa-regular fa-envelope"></i>
                     <p>
                        info@gmail.com
                     </p>
                  </div>


               </div>

            </div>





            
            <div className="footer-links-section">
               <Link className="footer-links" to='/terms-conditions'>Terms and Conditions</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
               <Link className="footer-links" to='/privacy'>Privacy Policy</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
               <Link className="footer-links" to='/refund-cancellation'>Refund And Cancellation Policy</Link>


            </div>

            <p className="copy-right-text">&copy; 2025 Hambil Jewelry Cad. All rights reserved.</p>

         </div>
      </div>

   </>)
}