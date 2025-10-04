import { Link } from "react-router-dom";

const images = import.meta.glob('./Gold-Rings-For-Men/*.jpg', { eager: true });
const imageList = Object.values(images).map((m) => m.default).slice(0, 4);

export default function MenRings_Page1() {

   return (<>
      <div className="Rings-page">
         {imageList.map((src, idx) => (
            <div className="ring-card" key={idx}>
               <img src={src} alt={`Men Ring ${idx+1}`} className="ring-img" />
            </div>
         ))}
      </div>
      <div className="pagination">
         <div style={{ borderBottom: ' 2px solid white' }}><Link className="page-link" to={'/men-rings/page1'}>1</Link></div>
         <div><Link className="page-link" to={'/men-rings/page2'}>2</Link></div>
         <div><Link className="page-link" to={'/men-rings/page2'}><i className="fa-solid fa-angle-right arrow-right"></i></Link></div>
      </div >
   </>);
}
