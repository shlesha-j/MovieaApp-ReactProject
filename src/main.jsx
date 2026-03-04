import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* When deploying under a sub‑path set `basename` so the router
        strips the prefix from location.pathname.  vite.config.js already
        uses the same base, so the URLs for assets are correct as well. */}
    <BrowserRouter basename="/MovieaApp-ReactProject">
      <App />
    </BrowserRouter>

  </StrictMode>,
)
