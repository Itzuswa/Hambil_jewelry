import About from './About'
import Cards from './Cards'
// import Contact from './Contact'

import Head from './Head'
import Portfolio from './PortFolio'
import Work from './Work'

export default function Home() {
   return (<>
      <Head />
      <Cards />
      <Work/>
      <Portfolio />
      <About />
      {/* <Contact /> */}
      
      
   </>)
}