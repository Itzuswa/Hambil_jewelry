import { Outlet } from "react-router-dom";

export default function MatrixGold() {
   return (
      <div className="container-fluid">
         <div className="row">
            <div className="col-12">
               <div className="portfolio-section">
                  <h2 className="section-title">Matrix Gold Collection</h2>
                  <p className="section-description">
                     Discover our exclusive Matrix Gold collection featuring premium jewelry designs.
                  </p>
               </div>
            </div>
         </div>
         <Outlet />
      </div>
   );
}
