export default function AllImageCard(props) {
   return (<>
      <div className="All-Images-Card">
         <img src={props.image} alt="AllImage"  className="all-Image-img"/>
      </div>
   </>)
}