import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import CheckContext from './Context.jsx'

createRoot(document.getElementById('root')).render(
  <CheckContext>
  <Router>
  <StrictMode>
    <App />
  </StrictMode>,
  </Router>
  </CheckContext>
)
