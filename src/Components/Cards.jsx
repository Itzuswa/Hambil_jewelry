import Card from "./Card";

export default function Cards() {
   return (<>
      <div className="cards">
         <Card 
            icon={<i className="fa-regular fa-gem"></i>} title={"ZBrush Jewelry Design"} body={"Intricate organic jewelry designs using advanced ZBrush sculpting techniques for unique and artistic pieces."} />

         <Card 
            icon={<i className="fa-solid fa-cube"></i>} title={"MatrixGold CAD"} body={"Professional parametric jewelry design with MatrixGold software for precise and customizable pieces."} />

         <Card
            icon={<i className="fa-solid fa-print"></i>}
            title={"3D Print Ready"} body={"Optimized designs ready for 3D printing and casting with proper tolerances and support structures."}
         />

      </div>
   </>
   )
}