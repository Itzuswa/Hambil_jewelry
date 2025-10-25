// import Ring_Page1 from "./Ring_Page1";

import { Outlet } from "react-router-dom";



export default function Rings() {

   return (
      <>
         

         <div className="rings-children">
            <Outlet />
         </div>
        

      </>

   );
}


