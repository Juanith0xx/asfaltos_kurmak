// src/App.jsx
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import Home from './components/Home'
import Servicios from './components/Servicios'
import Grid from './components/Grid'
import ContactoHome from './components/ContactoHome'
import WhatsAppBubble from './components/WhatsAppBubble'
import Footer from './components/Footer'
import ClientCarousel from './components/ClientesCarrusel'
import Proyectos from './Pages/Proyectos'
import Contacto from "./Pages/Contacto"
import './App.css'


function App() {
  return (
    <>
      <Navbar />
      <WhatsAppBubble />

      <Routes>
        {/* Página principal */}
        <Route path="/" element={
          <>
            <HeroSlider />
            <Home />
            <Servicios />
            <ClientCarousel />
            <Grid />
            <ContactoHome />
          </>
        } />

        {/* Páginas */}
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
