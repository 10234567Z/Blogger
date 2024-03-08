import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/def_styles/main.sass'
import store from './Store/store.js'
import { Provider } from 'react'
import Router from './router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
