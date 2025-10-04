import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './Components/Home'
import Rings from './Components/Rings'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Ring_Page1 from './Components/Ring_Page1'
import Ring_Page2 from './Components/Ring_Page2'
import Ring_Page3 from './Components/Ring_Page3'
import Ring_Page4 from './Components/Ring_Page4'
import Pendents from './Components/Pendents'
import Pendent_Page1 from './Components/Pendent_Page1'
import Pendent_Page2 from './Components/Pendent_Page2'
import Pendent_Page3 from './Components/Pendent_Page3'
import Pendent_Page4 from './Components/Pendent_Page4'
import MatrixGold from './Components/MatrixGold'
import Matrix_Page1 from './Components/Matrix_Page1'
import Matrix_Page2 from './Components/Matrix_Page2'
import Matrix_Page3 from './Components/Matrix_Page3'
import Matrix_Page4 from './Components/Matrix_Page4'
import MenRings from './Components/MenRings'
import MenRings_Page1 from './Components/MenRings_Page1'
import MenRings_Page2 from './Components/MenRings_Page2'
import Privacy from './Components/Footer_Link'
import RegisterForm from './Components/RegisterForm'
import RegisterPage from './Components/RegisterPage'
import AllPage from './Components/AllPage'
import PageContainer from './Components/PageContainer'
import ScrollToTop from './Components/ScrollToTop'
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home className="home-page" />} />
          
          <Route path='all' element={
            <PageContainer>
              <AllPage />
            </PageContainer>
          } />
          
          <Route path='register' element={
            <PageContainer>
              <RegisterPage />
            </PageContainer>
          } />
          
          <Route path="rings" element={
            <PageContainer>
              <Rings />
            </PageContainer>
          }>
            <Route path='ring1' element={<Ring_Page1 />} />
            <Route path='ring2' element={<Ring_Page2 />} />
            <Route path='ring3' element={<Ring_Page3 />} />
            <Route path='ring4' element={<Ring_Page4 />} />
          </Route>

          <Route path="pendants" element={
            <PageContainer>
              <Pendents />
            </PageContainer>
          }>
            <Route path='page1' element={<Pendent_Page1 />} />
            <Route path='page2' element={<Pendent_Page2 />} />
            <Route path='page3' element={<Pendent_Page3 />} />
            <Route path='page4' element={<Pendent_Page4 />} />
          </Route>

          <Route path="matrix-gold" element={
            <PageContainer>
              <MatrixGold />
            </PageContainer>
          }>
            <Route path='page1' element={<Matrix_Page1 />} />
            <Route path='page2' element={<Matrix_Page2 />} />
            <Route path='page3' element={<Matrix_Page3 />} />
            <Route path='page4' element={<Matrix_Page4 />} />
          </Route>

          <Route path="men-rings" element={
            <PageContainer>
              <MenRings />
            </PageContainer>
          }>
            <Route path='page1' element={<MenRings_Page1 />} />
            <Route path='page2' element={<MenRings_Page2 />} />
          </Route>

          <Route path='privacy' element={
            <PageContainer>
              <Privacy 
                title={'Privacy Policy:'} 
                content={'We respect your privacy and are committed to protecting your personal information.Any details you share with us (such as name, email, phone number, or payment information) will only be used to provide our services.We do not share or sell your information with third parties, except when required by law.'} 
              />
            </PageContainer>
          } />

          <Route path='terms-conditions' element={
            <PageContainer>
              <Privacy 
                title={'Terms & Conditions'} 
                content={'By using our website, you agree to follow our policies and guidelines.All content on this site (text, images, designs, and logos) is the property of Hambil Jewelry Cad.You may not copy,reproduce, or use our content without written permission.We reserve the right to update or change these terms at any time without prior notice.'} 
              />
            </PageContainer>
          } />
          
          <Route path='refund-cancellation' element={
            <PageContainer>
              <Privacy 
                title={'Refund & Cancellation Policy'} 
                content={'Orders once confirmed cannot be cancelled.Refunds will only be issued in case of defective or damaged products, subject to review.To request a refund, please contact us within 7 days of receiving the product.Refunds will be processed to your original payment method within 5–7 business days after approval.'} 
              />
            </PageContainer>
          } />
          {/* Back-compat redirect for old pendents path */}
          <Route path="pendents/*" element={<Navigate to="/pendants/page1" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
