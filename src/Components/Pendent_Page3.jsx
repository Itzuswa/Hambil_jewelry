import { Link } from "react-router-dom";

const images = import.meta.glob('./Pendents/new pendent 37_page-*.jpg', { eager: true });
const imageList = Object.values(images).map((m) => m.default).slice(18, 27);

export default function Pendent_Page3() {

   return (<>
      <div className="Rings-page">
         {imageList.map((src, idx) => (
            <div className="ring-card" key={idx}>
               <img src={src} alt={`Pendent ${idx+1}`} className="ring-img" />
            </div>
         ))}
      </div>
      <div className="pagination">
         <div><Link className="page-link" to={'/pendants/page2'} > <i className="fa-solid fa-angle-left arrow-left"></i></Link></div>
         <div><Link className="page-link" to={'/pendants/page1'} >1</Link></div>
         <div><Link className="page-link" to={'/pendants/page2'}>2</Link></div>
         <div style={{ borderBottom: ' 2px solid white' }}><Link className="page-link" to={'/pendants/page3'}>3</Link></div>
         <div><Link className="page-link" to={'/pendants/page4'}>4</Link></div>
         <div><Link className="page-link" to={'/pendants/page4'}><i className="fa-solid fa-angle-right arrow-right"></i></Link></div>
      </div >
   </>);
}


