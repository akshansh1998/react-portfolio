import Navbar from "./sections/navbar/Navbar"
import Header from './sections/header/Header';
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Testimonials from "./sections/testimonails/Testimonials";
import Faqs from "./sections/faqs/Faqs";
import Contact from "./sections/contact/Contact";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Footer from "./sections/footer/Footer";

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Faqs/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  )
}

export default App
