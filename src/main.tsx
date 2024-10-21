import { Profiler, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import BrowserRouting from './library/components/BrowserRouting'
import { getProfiling } from './library/utils'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Profiler id='elementary.js' onRender={getProfiling}>
      <BrowserRouting>
        <App />
      </BrowserRouting>
    </Profiler>
  </StrictMode>,
)
