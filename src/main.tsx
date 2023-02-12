import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "@views/home/Home"
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Home />
    </BrowserRouter>
  </React.StrictMode>,
)
