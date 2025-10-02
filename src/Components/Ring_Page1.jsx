import Ring_Card from "./Rings_Card";
import { Link } from "react-router-dom";

import ring1 from "./Rings/B-35_page-0001.jpg";
import ring2 from "./Rings/B-35_page-0002.jpg";
import ring3 from "./Rings/B-35_page-0003.jpg";
import ring4 from "./Rings/B-35_page-0004.jpg";
import ring5 from "./Rings/B-35_page-0005.jpg";
import ring6 from "./Rings/B-35_page-0006.jpg";
import ring7 from "./Rings/B-35_page-0007.jpg";
import ring8 from "./Rings/B-35_page-0008.jpg";
import ring9 from "./Rings/B-35_page-0009.jpg";
import ring10 from "./Rings/B-35_page-0010.jpg";
import ring11 from "./Rings/B-35_page-0011.jpg";
import ring12 from "./Rings/B-35_page-0012.jpg";
import ring13 from "./Rings/B-35_page-0013.jpg";
import ring14 from "./Rings/B-35_page-0014.jpg";
import ring15 from "./Rings/B-35_page-0015.jpg";
import ring16 from "./Rings/B-35_page-0016.jpg";
import ring17 from "./Rings/B-35_page-0017.jpg";
import ring18 from "./Rings/B-35_page-0018.jpg";
import ring19 from "./Rings/B-35_page-0019.jpg";
import ring20 from "./Rings/B-35_page-0020.jpg";
import ring21 from "./Rings/B-35_page-0021.jpg";
import ring22 from "./Rings/B-35_page-0022.jpg";
import ring23 from "./Rings/B-35_page-0023.jpg";
import ring24 from "./Rings/B-35_page-0024.jpg";
import ring25 from "./Rings/B-35_page-0025.jpg";
import ring26 from "./Rings/B-35_page-0026.jpg";
import ring27 from "./Rings/B-35_page-0027.jpg";
import ring28 from "./Rings/B-35_page-0028.jpg";
import ring29 from "./Rings/B-35_page-0029.jpg";
import ring30 from "./Rings/B-35_page-0030.jpg";
import ring31 from "./Rings/B-35_page-0031.jpg";
import ring32 from "./Rings/B-35_page-0032.jpg";
import ring33 from "./Rings/B-35_page-0033.jpg";
import ring34 from "./Rings/B-35_page-0034.jpg";
import ring35 from "./Rings/B-35_page-0035.jpg";
export default function Ring_Page1() {
   let rings = [
      ring1, ring2, ring3, ring4, ring5, ring6, ring7, ring8, ring9, ring10, ring11, ring12, ring13, ring14, ring15, ring16, ring17, ring18, ring19, ring20, ring21, ring22, ring23, ring24, ring25, ring26, ring27, ring28, ring29, ring30, ring31, ring32, ring33, ring34, ring35
   ]
   return (<>
      

      <div className="Rings-page">
         {
            rings.map((ring, index) => (< Ring_Card ring1={ring} key={ index} />))
         }
      </div>
      <div className="pagination">
         <div style={{ borderBottom: ' 2px solid white' }}><Link className="page-link" to={'/rings/ring1'} >1</Link></div>
         <div><Link className="page-link" to={'/rings/ring2'}>2</Link></div>
         <div><Link className="page-link" to={'/rings/ring3'}>3</Link></div>
         <div><Link className="page-link" to={'/rings/ring4'}>4</Link></div>
         <div><Link className="page-link" to={'/rings/ring2'}><i class="fa-solid fa-angle-right arrow-right"></i></Link></div>
      </div >
   </>)
}