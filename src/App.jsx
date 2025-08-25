import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Home from './components/Home';
import Servicios from './components/Servicios';
import Grid from './components/Grid'
import ContactoHome from './components/ContactoHome';
import WhatsAppBubble from './components/WhatsAppBubble';

import './App.css'
import Footer from './components/Footer';
import ClientCarousel from './components/ClientesCarrusel';

function App() {
  
  return (
    <>
      <Navbar />
      <WhatsAppBubble />
      <HeroSlider />
      <Home />
      <Servicios />
      <ClientCarousel />
      <Grid />
      <ContactoHome />
      <Footer />
    </>
  )
}

export default App
