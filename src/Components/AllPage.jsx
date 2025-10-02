import Image1 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.19_09defb00.jpg";
import Image2 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.19_54a26d31.jpg";
import Image3 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.21_01bba0e1.jpg";
import Image4 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.20_20f7c421.jpg";
import Image5 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.20_5445f709.jpg";
import Image6 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.20_e33bb9b8.jpg";
import Image7 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.21_520022bc.jpg";
import Image8 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.21_a3ad66e6.jpg";
import Image9 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.22_2acff57e.jpg";
import Image10 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.22_6b803c02.jpg";
import Image11 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.22_d4f4c0c8.jpg";
import Image12 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.23_4812ade5.jpg";
import Image13 from "./All_Images/WhatsApp Image 2025-09-28 at 21.41.23_27606244.jpg";

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllImageCard from "./AllImageCard";

export default function AllPage() {
   const imgs = [
      Image1, Image2, Image3, Image4, Image5, Image6, Image7,
      Image8, Image9, Image10, Image11, Image12, Image13
   ];

   return (
      <div className="All-image-Page">
         <Carousel interval={2000} pause={false} indicators={true}>
            {imgs.map((img, idx) => (
               <Carousel.Item key={idx}>
                  <AllImageCard image={img} />
               </Carousel.Item>
            ))}
         </Carousel>
      </div>
   )
}
