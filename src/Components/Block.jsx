

import Logo4 from './../assets/Front4.jpg'

export default function Block() {
   return (<>
      <div className="div1">
         <div className="div3">
            <img src={Logo4} alt="Logo" className='img-logo' />
         </div>
         <div className="div2">
            <div className='brand-content'>
               <div className="heading" >
                  <h2 className='heading-title'>Professional Jewelry CAD Services</h2>
               </div>
               
               <p className="brand" >ZBrush & MatrixGold Specialists</p>
               <div className="buttons">
                  <button className="btn  top-buttons">View Portfolio</button>
                  <button className="btn  top-buttons">Get Quote</button>
               </div>
            </div>

          
         </div>
  
      </div>


   </>)
}