import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Port from './pages/port.jsx'
import PortIpad from './pages/port-ipad.jsx'
import PortDesktop from './pages/port-desktop.jsx'
import '/src/css/App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Port />
    <PortIpad/>
    <PortDesktop/>
  </StrictMode>,
)
