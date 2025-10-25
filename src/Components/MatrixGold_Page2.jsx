import Ring_Card from "./Rings_Card";
import { Link } from "react-router-dom";

// Import Matrix Gold images individually
import matrix10 from "./Matrix-Gold/watch_230402_133933_page-0010.jpg";
import matrix11 from "./Matrix-Gold/watch_230402_133933_page-0011.jpg";
import matrix12 from "./Matrix-Gold/watch_230402_133933_page-0012.jpg";
import matrix13 from "./Matrix-Gold/watch_230402_133933_page-0013.jpg";
import matrix14 from "./Matrix-Gold/watch_230402_133933_page-0014.jpg";
import matrix15 from "./Matrix-Gold/watch_230402_133933_page-0015.jpg";
import matrix16 from "./Matrix-Gold/watch_230402_133933_page-0016.jpg";
import matrix17 from "./Matrix-Gold/watch_230402_133933_page-0017.jpg";
import matrix18 from "./Matrix-Gold/watch_230402_133933_page-0018.jpg";

export default function MatrixGold_Page2() {
   let matrixImages = [
      matrix10, matrix11, matrix12, matrix13, matrix14, matrix15, matrix16, matrix17, matrix18
   ]
   return (<>
      <div className="Rings-page">
         {
            matrixImages.map((image, index) => (< Ring_Card ring1={image} key={ index} />))
         }
      </div>
      <div className="pagination">
         <div><Link className="page-link" to={'/matrix-gold/page1'} >1</Link></div>
         <div style={{ borderBottom: ' 2px solid white' }}><Link className="page-link" to={'/matrix-gold/page2'}>2</Link></div>
         <div><Link className="page-link" to={'/matrix-gold/page3'}>3</Link></div>
         <div><Link className="page-link" to={'/matrix-gold/page4'}>4</Link></div>
         <div><Link className="page-link" to={'/matrix-gold/page3'}><i className="fa-solid fa-angle-right arrow-right"></i></Link></div>
      </div >
   </>)
}

