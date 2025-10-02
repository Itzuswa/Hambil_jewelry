import { Link, useNavigate } from "react-router-dom";

export default function Portfolio() {
   return (<>
      
      <div className="portfolio-background">
         <div className="portfolio" id="view-portfolio">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="portfolio-buttons">
               <button className="portfolio-button " ><Link to='/all'>All</Link ></button>
               <button className="portfolio-button">ZBrush</button>
               <button className="portfolio-button">Matrix Gold</button>
               <button
                  className="portfolio-button"
               >
                  <Link to="/rings/ring1"> Rings</Link>
               </button>
               <button className="portfolio-button">Pendants</button>
            </div>
         </div>
      </div>



   </>)
}