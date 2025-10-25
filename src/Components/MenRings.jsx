import { Outlet } from "react-router-dom";

export default function MenRings() {
   return (
      <>
         <div className="rings-children">
            <Outlet />
         </div>
      </>
   );
}
