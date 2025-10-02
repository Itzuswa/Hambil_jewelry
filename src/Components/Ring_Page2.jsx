import { Link } from "react-router-dom";
import Ring_Card from "./Rings_Card";
import ring1 from "./Rings/IMG-20250923-WA0003.jpg";
import ring2 from "./Rings/IMG-20250923-WA0004.jpg";
import ring3 from "./Rings/IMG-20250923-WA0005.jpg";
import ring5 from "./Rings/IMG-20250923-WA0007.jpg";
import ring6 from "./Rings/IMG-20250923-WA0008.jpg";
import ring7 from "./Rings/IMG-20250923-WA0009.jpg";
import ring8 from "./Rings/IMG-20250923-WA0010.jpg";
import ring9 from "./Rings/IMG-20250923-WA0011.jpg";
import ring10 from "./Rings/IMG-20250923-WA0012.jpg";
import ring11 from "./Rings/IMG-20250923-WA0013.jpg";
import ring12 from "./Rings/IMG-20250923-WA0014.jpg";
import ring13 from "./Rings/IMG-20250923-WA0015.jpg";
import ring14 from "./Rings/IMG-20250923-WA0016.jpg";
import ring15 from "./Rings/IMG-20250923-WA0017.jpg";
import ring16 from "./Rings/IMG-20250923-WA0018.jpg";
import ring17 from "./Rings/IMG-20250923-WA0019.jpg";
import ring18 from "./Rings/IMG-20250923-WA0020.jpg";
import ring19 from "./Rings/IMG-20250923-WA0021.jpg";
import ring20 from "./Rings/IMG-20250923-WA0022.jpg";
import ring21 from "./Rings/IMG-20250923-WA0023.jpg";

export default function Ring_Page2() {
   let rings = [
      ring1, ring2, ring3,  ring5, ring6, ring7, ring8, ring9, ring10, ring11, ring12, ring13, ring14, ring15, ring16, ring17, ring18, ring19, ring20, ring21
   ]
   return (<>
      <div className="Rings-page">
         {
            rings.map((ring, index) => (< Ring_Card ring1={ring} key={index} />))
         }
      </div>
      <div className="pagination">
         <div><Link className="page-link" to={'/rings/ring1'}> <i class="fa-solid fa-angle-left arrow-left"></i></Link></div>
         <div><Link className="page-link" to={'/rings/ring1'}>1</Link></div>
         <div style={{ borderBottom: ' 2px solid white' }}><Link className="page-link" to={'/rings/ring2'}>2</Link></div>
         <div><Link className="page-link" to={'/rings/ring3'}>3</Link></div>
         <div><Link className="page-link" to={'/rings/ring4'}>4</Link></div>
         <div><Link className="page-link" to={'/rings/ring3'}><i class="fa-solid fa-angle-right arrow-right"></i></Link></div>
      </div >
   </>)
}