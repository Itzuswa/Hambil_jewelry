import Circle from "../Circle";

export default function StepProcess() {
   return (<>
      <div className="step-process">

         <ul className="step-list">
            <h2>
               Our Process
            </h2>
            <li >

               <Circle number={<i class="fa-solid fa-1"></i>} />
               <span>

                  Register for Free Trial
               </span>

            </li>
            <li>
               <Circle number={<i class="fa-solid fa-2"></i>} />
               <span>

                  We will contact you via Email
               </span>
            </li>
            <li>
               <Circle number={<i class="fa-solid fa-3"></i>} />
               <span>
                  You can respond with the jewelry image/sketch and dimension details
               </span>
            </li>
            <li>
               <Circle number={<i class="fa-solid fa-4"></i>} />
               <span>
                  We will send you the CAD images for Approval.

               </span>
            </li>
            <li>
               <Circle number={<i class="fa-solid fa-5"></i>} />

               <span>
                  Once approved we will submit the 3dm file, stl file and 4 rendered images of the jewelry
               </span>
            </li>




         </ul>



      </div>

   </>)
}