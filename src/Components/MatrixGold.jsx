import { Outlet } from "react-router-dom";

export default function MatrixGold() {
   return (
      <>
         <div className="rings-children">
            <Outlet />
         </div>
      </>
   );
}
