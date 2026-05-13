import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import "./index.css"

// ✅ React Query imports
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// ✅ Create Query Client instance
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)