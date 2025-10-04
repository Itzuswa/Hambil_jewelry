import { Link } from "react-router-dom";

const images = import.meta.glob('./Gold-Rings-For-Men/*.jpg', { eager: true });
const imageList = Object.values(images).map((m) => m.default).slice(4);

export default function MenRings_Page2() {

   return (<>
      <div className="Rings-page">
         {imageList.map((src, idx) => (
            <div className="ring-card" key={idx}>
               <img src={src} alt={`Men Ring ${idx+5}`} className="ring-img" />
            </div>
         ))}
      </div>
      <div className="pagination">
         <div><Link className="page-link" to={'/men-rings/page1'}> <i className="fa-solid fa-angle-left arrow-left"></i></Link></div>
         <div><Link className="page-link" to={'/men-rings/page1'}>1</Link></div>
         <div style={{ borderBottom : ' 2px solid white' }}><Link className="page-link" to={'/men-rings/page2'} >2</Link></div>
      </div >
   </>);
}
