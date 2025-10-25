import Ring_Card from "./Rings_Card";
import { Link } from "react-router-dom";

// Import Matrix Gold images individually
import matrix19 from "./Matrix-Gold/watch_230402_133933_page-0019.jpg";
import matrix20 from "./Matrix-Gold/watch_230402_133933_page-0020.jpg";
import matrix21 from "./Matrix-Gold/watch_230402_133933_page-0021.jpg";
import matrix22 from "./Matrix-Gold/watch_230402_133933_page-0022.jpg";
import matrix23 from "./Matrix-Gold/watch_230402_133933_page-0023.jpg";
import matrix24 from "./Matrix-Gold/watch_230402_133933_page-0024.jpg";
import matrix25 from "./Matrix-Gold/watch_230402_133933_page-0025.jpg";
import matrix26 from "./Matrix-Gold/watch_230402_133933_page-0026.jpg";
import matrix27 from "./Matrix-Gold/watch_230402_133933_page-0027.jpg";

export default function MatrixGold_Page3() {
   let matrixImages = [
      matrix19, matrix20, matrix21, matrix22, matrix23, matrix24, matrix25, matrix26, matrix27
   ]
   return (<>
      <div className="Rings-page">
         {
            matrixImages.map((image, index) => (< Ring_Card ring1={image} key={ index} />))
         }
      </div>
      <div className="pagination">
         <div><Link className="page-link" to={'/matrix-gold/page2'} > <i className="fa-solid fa-angle-left arrow-left"></i></Link></div>
         <div><Link className="page-link" to={'/matrix-gold/page1'} >1</Link></div>
         <div><Link className="page-link" to={'/matrix-gold/page2'}>2</Link></div>
         <div style={{ borderBottom: ' 2px solid white' }}><Link className="page-link" to={'/matrix-gold/page3'}>3</Link></div>
         <div><Link className="page-link" to={'/matrix-gold/page4'}>4</Link></div>
         <div><Link className="page-link" to={'/matrix-gold/page4'}><i className="fa-solid fa-angle-right arrow-right"></i></Link></div>
      </div >
   </>)
}

