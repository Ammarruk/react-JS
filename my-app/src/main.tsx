import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import React from './app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <React />
  </StrictMode>,
)
