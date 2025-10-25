import Ring_Card from "./Rings_Card";
import { Link } from "react-router-dom";

// Import Matrix Gold images individually
import matrix1 from "./Matrix-Gold/watch_230402_133933_page-0001.jpg";
import matrix2 from "./Matrix-Gold/watch_230402_133933_page-0002.jpg";
import matrix3 from "./Matrix-Gold/watch_230402_133933_page-0003.jpg";
import matrix4 from "./Matrix-Gold/watch_230402_133933_page-0004.jpg";
import matrix5 from "./Matrix-Gold/watch_230402_133933_page-0005.jpg";
import matrix6 from "./Matrix-Gold/watch_230402_133933_page-0006.jpg";
import matrix7 from "./Matrix-Gold/watch_230402_133933_page-0007.jpg";
import matrix8 from "./Matrix-Gold/watch_230402_133933_page-0008.jpg";
import matrix9 from "./Matrix-Gold/watch_230402_133933_page-0009.jpg";

export default function MatrixGold_Page1() {
   let matrixImages = [
      matrix1, matrix2, matrix3, matrix4, matrix5, matrix6, matrix7, matrix8, matrix9
   ]
   return (<>
      <div className="Rings-page">
         {
            matrixImages.map((image, index) => (< Ring_Card ring1={image} key={ index} />))
         }
      </div>
      <div className="pagination">
         <div style={{ borderBottom: ' 2px solid white' }}><Link className="page-link" to={'/matrix-gold/page1'} >1</Link></div>
         <div><Link className="page-link" to={'/matrix-gold/page2'}>2</Link></div>
         <div><Link className="page-link" to={'/matrix-gold/page3'}>3</Link></div>
         <div><Link className="page-link" to={'/matrix-gold/page4'}>4</Link></div>
         <div><Link className="page-link" to={'/matrix-gold/page2'}><i className="fa-solid fa-angle-right arrow-right"></i></Link></div>
      </div >
   </>)
}

