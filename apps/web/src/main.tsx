import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/app'
import './styles.css'
import { AppQueryProvider } from './app/providers/query-provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppQueryProvider>
      <App />
    </AppQueryProvider>
  </React.StrictMode>
)