import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import About from './pages/about.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Route element={<RootLayout />}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Route>
    </BrowserRouter>
    <App />
  </StrictMode>
);
