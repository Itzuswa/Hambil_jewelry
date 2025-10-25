import Ring_Card from "./Rings_Card";
import { Link } from "react-router-dom";

// Import Men Rings images individually
import menRing5 from "./Gold-Rings-For-Men/GRP(Paper Casting)-4 (70) 8145345959_page-0005.jpg";
import menRing6 from "./Gold-Rings-For-Men/GRP(Paper Casting)-4 (70) 8145345959_page-0006.jpg";
import menRing7 from "./Gold-Rings-For-Men/GRP(Paper Casting)-4 (70) 8145345959_page-0007.jpg";
import menRing8 from "./Gold-Rings-For-Men/GRP(Paper Casting)-4 (70) 8145345959_page-0008.jpg";

export default function MenRingsGold_Page2() {
   let menRings = [
      menRing5, menRing6, menRing7, menRing8
   ]
   return (<>
      <div className="Rings-page">
         {
            menRings.map((ring, index) => (< Ring_Card ring1={ring} key={ index} />))
         }
      </div>
      <div className="pagination">
         <div><Link className="page-link" to={'/men-rings/page1'}> <i className="fa-solid fa-angle-left arrow-left"></i></Link></div>
         <div><Link className="page-link" to={'/men-rings/page1'}>1</Link></div>
         <div style={{ borderBottom : ' 2px solid white' }}><Link className="page-link" to={'/men-rings/page2'} >2</Link></div>
      </div >
   </>)
}

