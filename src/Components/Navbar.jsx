import { NavLink } from "react-router-dom";
import Logo from './../../src/assets/Logo.png';
export default function Navbar() {
   return (
      <>
        
      <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
               <div className="logo-section">
                  <img className="Logo" src={Logo} alt="Logo" />
                  <NavLink to={'/'} className="navbar-brand brand-title-Logo">Hambil</NavLink>
               </div>
              
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                     <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link active" aria-current="page" to="/all">All</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/rings/ring1">Rings</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/pendants/page1">Pendants</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/privacy">Policies</NavLink>
                  </li>
                  
                  
               </ul>
               
            </div>
         </div>
      </nav>
      </>
   )
}