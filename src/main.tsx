import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import BrowserRouting from './components/BrowserRouting'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouting>
      <App />
    </BrowserRouting>
  </StrictMode>,
)
