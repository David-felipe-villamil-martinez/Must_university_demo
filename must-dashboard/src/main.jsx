import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


 import { ClerkProvider } from '@clerk/react-router'
 import { BrowserRouter, Routes, Route } from 'react-router'
import SignInPage from './Pages/signin.jsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} signInUrl='/signin'>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<SignInPage />} />
          {/* Add other routes here as needed */}
        </Routes>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
)
