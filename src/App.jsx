import React from 'react'
import './App.css';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Testimonial from './components/testimonial/Testimonial';
import About from './components/about/About';
const App = () => {
  return (
    <div>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App




