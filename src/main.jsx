// Enables Additional Development Checks and Warnings in React
import { StrictMode } from 'react'
// React 18 API for Creating the Root of the Application
import { createRoot } from 'react-dom/client'

// Main App Component that Contains Routing and Page Layout
import App from './App.jsx'

// Find the Root DOM Element and Mount the React Application into it
createRoot(document.getElementById('root')).render(
  // StrictMode Helps Identify Potential Problems During Development
  <StrictMode>
    <App />
  </StrictMode>,
);
