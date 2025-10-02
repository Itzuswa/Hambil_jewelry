import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Rings from './Components/Rings'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Ring_Page1 from './Components/Ring_Page1'
import Ring_Page2 from './Components/Ring_Page2'
import Ring_Page3 from './Components/Ring_Page3'
import Ring_Page4 from './Components/Ring_Page4'
import Privacy from './Components/Footer_Link'
import RegisterForm from './Components/RegisterForm'
import RegisterPage from './Components/RegisterPage'
import AllPage from './Components/AllPage'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='all' element={ <AllPage/>} />
          <Route path='register' element={<RegisterPage/>} />
          <Route path="rings" element={<Rings />} >
            <Route path='ring1' element={<Ring_Page1 />} />
            <Route path='ring2' element={<Ring_Page2 />} />
            <Route path='ring3' element={<Ring_Page3 />} />
            <Route path='ring4' element={<Ring_Page4 />} />

          </Route>


          <Route path='privacy' element={<Privacy title={
            'Privacy Policy:'} content={'We respect your privacy and are committed to protecting your personal information.Any details you share with us (such as name, email, phone number, or payment information) will only be used to provide our services.We do not share or sell your information with third parties, except when required by law.'} />}
          />

          <Route path='terms-conditions' element={<Privacy title={
            'Terms & Conditions'} content={' By using our website, you agree to follow our policies and guidelines.All content on this site (text, images, designs, and logos) is the property of Hambil Jewelry Cad.You may not copy,reproduce, or use our content without written permission.We reserve the right to update or change these terms at any time without prior notice.'} />}
          />
          <Route path='refund-cancellation' element={<Privacy title={
            'Refund & Cancellation Policy'} content={'Orders once confirmed cannot be cancelled.Refunds will only be issued in case of defective or damaged products, subject to review.To request a refund, please contact us within 7 days of receiving the product.Refunds will be processed to your original payment method within 5–7 business days after approval.'} />}
          />

        </Routes>
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App
