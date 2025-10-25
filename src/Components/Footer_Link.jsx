export default function Privacy(props) {
   return (<>
      <div className="privacy-page">
         <div className="privacy-section">
            <h3 className="privacy-title">

               {props.title}
            </h3>
            <p className="privacy-content">
               {props.content}
            </p>
         </div>
      </div>
      


   </>)
}