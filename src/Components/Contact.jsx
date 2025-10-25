import Contact_Card from "./Contact_Card";

export default function Contact() {
   return (<>
      <div className="contact-section">
         <div className="Contact-title">
            <h1 className="Contact-title">Get In Touch</h1>
         </div>
         <div className="contact-cards">
            <Contact_Card />

            <Contact_Card />
         </div>
      </div>
   </>)
}