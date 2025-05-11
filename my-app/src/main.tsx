import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './01counter.css'
import App from './01counter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
