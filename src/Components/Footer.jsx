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
                  <h6 className="footer-detail-about-brand">CAD On Demand offers jewelry cad design services along with rendering and animation solutions.</h6>
                  <div className="contact-links">
                     <i class="fa-brands fa-facebook"></i>
                     <i class="fa-brands fa-instagram"></i>
                     <i class="fa-brands fa-youtube"></i>
                  </div>
               </span>
               <div className="contact-sec">

                  <h6 className="contact-us-title">CONTACT US</h6>
                  <div className="location">
                     <i class="fa-solid fa-location-dot"></i>
                     <p>
                        Meevira, Suite 101, Jayshree Akshaya, IC Colony, Borivali (W),Mumbai – 400103, India
                     </p>
                  </div>
                  <div className="phone">
                     <i class="fa-solid fa-phone"></i>
                     <p>
                        +91-9833885929
                     </p>
                  </div>
                  <div className="email">
                     <i class="fa-regular fa-envelope"></i>
                     <p>
                        intriguity@gmail.com
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