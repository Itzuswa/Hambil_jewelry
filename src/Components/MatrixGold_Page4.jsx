import Ring_Card from "./Rings_Card";
import { Link } from "react-router-dom";

// Import Matrix Gold images individually
import matrix28 from "./Matrix-Gold/watch_230402_133933_page-0028.jpg";
import matrix29 from "./Matrix-Gold/watch_230402_133933_page-0029.jpg";
import matrix30 from "./Matrix-Gold/watch_230402_133933_page-0030.jpg";
import matrix31 from "./Matrix-Gold/watch_230402_133933_page-0031.jpg";
import matrix32 from "./Matrix-Gold/watch_230402_133933_page-0032.jpg";
import matrix33 from "./Matrix-Gold/watch_230402_133933_page-0033.jpg";
import matrix34 from "./Matrix-Gold/watch_230402_133933_page-0034.jpg";
import matrix35 from "./Matrix-Gold/watch_230402_133933_page-0035.jpg";

export default function MatrixGold_Page4() {
   let matrixImages = [
      matrix28, matrix29, matrix30, matrix31, matrix32, matrix33, matrix34, matrix35
   ]
   return (<>
      <div className="Rings-page">
         {
            matrixImages.map((image, index) => (< Ring_Card ring1={image} key={ index} />))
         }
      </div>
      <div className="pagination">
         <div><Link className="page-link" to={'/matrix-gold/page3'}> <i className="fa-solid fa-angle-left arrow-left"></i></Link></div>
         <div><Link className="page-link" to={'/matrix-gold/page1'}>1</Link></div>
         <div><Link className="page-link" to={'/matrix-gold/page2'}>2</Link></div>
         <div><Link className="page-link" to={'/matrix-gold/page3'}>3</Link></div>
         <div style={{ borderBottom : ' 2px solid white' }}><Link className="page-link" to={'/matrix-gold/page4'} >4</Link></div>
      </div >
   </>)
}

