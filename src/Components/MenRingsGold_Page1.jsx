import Ring_Card from "./Rings_Card";
import { Link } from "react-router-dom";

// Import Men Rings images individually
import menRing1 from "./Gold-Rings-For-Men/GRP(Paper Casting)-4 (70) 8145345959_page-0001.jpg";
import menRing2 from "./Gold-Rings-For-Men/GRP(Paper Casting)-4 (70) 8145345959_page-0002.jpg";
import menRing3 from "./Gold-Rings-For-Men/GRP(Paper Casting)-4 (70) 8145345959_page-0003.jpg";
import menRing4 from "./Gold-Rings-For-Men/GRP(Paper Casting)-4 (70) 8145345959_page-0004.jpg";

export default function MenRingsGold_Page1() {
   let menRings = [
      menRing1, menRing2, menRing3, menRing4
   ]
   return (<>
      <div className="Rings-page">
         {
            menRings.map((ring, index) => (< Ring_Card ring1={ring} key={ index} />))
         }
      </div>
      <div className="pagination">
         <div style={{ borderBottom: ' 2px solid white' }}><Link className="page-link" to={'/men-rings/page1'} >1</Link></div>
         <div><Link className="page-link" to={'/men-rings/page2'}>2</Link></div>
         <div><Link className="page-link" to={'/men-rings/page2'}><i className="fa-solid fa-angle-right arrow-right"></i></Link></div>
      </div >
   </>)
}

