import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Use the same base that Vite knows about (import.meta.env.BASE_URL).
        That value comes from `vite.config.js` and will be "/MovieaApp-ReactProject/"
        in your local dev/testing scenario but just "/" in production on Vercel.
        When the router sees a basename it strips it off before matching routes. */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>

  </StrictMode>,
)
