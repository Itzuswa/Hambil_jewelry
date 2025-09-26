import CAD from './CAD workspace.jpeg'
export default function About() {
   return (<>
      <div className="About">
         <h1 className="About-title">About Hambil Jewelry CAD</h1>
         <div className="About-Section">
            <div className="About-expe">
               <p>
                  With years of experience in jewelry CAD design, we specialize in creating stunning, detailed jewelry pieces using industry-leading software like ZBrush and MatrixGold. Our expertise covers everything from classic designs to contemporary pieces, ensuring each creation meets the highest standards of craftsmanship.
               </p>
               <h2 className="expertise">Our Expertise</h2>

            </div>
            <div >
               <img src={ CAD} alt="Jewllery CAD Workspace"  className='CAD_workspace'/>
            </div>
         </div>
      </div>
      
     
   </>)
}