// src/main.jsx
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 👈 importa el router
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App.jsx';
import { initGA, logPageView } from './analytics';

const Root = () => {
  useEffect(() => {
    // Inicializa Google Analytics
    initGA();
    // Registra la primera página visitada
    logPageView(window.location.pathname + window.location.search);
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Root />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
