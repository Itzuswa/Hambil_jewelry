import { Outlet } from "react-router-dom";

export default function MenRings() {
   return (
      <div className="container-fluid">
         <div className="row">
            <div className="col-12">
               <div className="portfolio-section">
                  <h2 className="section-title">Men's Gold Rings</h2>
                  <p className="section-description">
                     Explore our premium collection of men's gold rings crafted with precision and elegance.
                  </p>
               </div>
            </div>
         </div>
         <Outlet />
      </div>
   );
}
