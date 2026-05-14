import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from "./App.jsx"
import "./index.css"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

// ✅ Dynamic basename for Vercel vs GitHub Pages
const basename = import.meta.env.PROD && import.meta.env.VITE_DEPLOY_TARGET === 'github-pages'
  ? '/Tnetra-trading'
  : '/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)