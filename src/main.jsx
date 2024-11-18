import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.js'
// import 'bootstrap/dist/js/bootstrap.js'
// import 'bootstrap/dist/js/bootstrap.esm.js'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <script src="bootstrap/dist/js/bootstrap.js"></script>
  </StrictMode>
)
