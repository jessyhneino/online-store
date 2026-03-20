// مسح اللغة القديمة من localStorage عند أول تحميل
localStorage.removeItem("i18nextLng");
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
