import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AuthProvider from './components/auth/authProvider.tsx'
import { BrowserRouter } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
