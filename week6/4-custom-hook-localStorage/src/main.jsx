import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import AppWithCustomHook from './AppWithCustomHook';  // 👈 use your new file


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <AppWithCustomHook /> */}
  </StrictMode>,
)
