import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TanstackProvider } from './lib/tanstackprovider/TanstackProvider.js'

createRoot(document.getElementById('root')).render(
  <TanstackProvider>
      <BrowserRouter>
        <App />
        </BrowserRouter>
    </TanstackProvider>
)
