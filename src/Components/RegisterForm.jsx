export default function RegisterForm() {

   
   return (<>
      <div className="container-fluid row justify-content-center d-flex align-items-center  p-2 mt-5">
         <div className="col-lg-6 col-md-8 col-sm-10">
            <h3 className="register-form-heading row justify-content-center align-items-center mb-5" >Register For Free Trial</h3>
            <form className="p-3 rounded shadow register-form form-bg mb-5 ">
               <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Name*"/>
               </div>
               
               
               <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Company Name*" />
               </div>
               
               
               
               <div className="mb-3">
                  <input type="email" className="form-control"
                     placeholder="Email id*"/>
               </div>



               <div className="mb-3">
                  <input type="text" className="form-control"
                     placeholder="Phone no*"/>
               </div>



               
               <div className="form-floating mb-3">
                  <textarea className="form-control" placeholder="Comments"></textarea>
                  
               </div>

               <button type="submit" className="btn regitser-button w-100">Submit</button>
            </form>
         </div>

      </div>


   </>)
}