import React from 'react'
import './index.css'
import store from './Redux/ReduxStore'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContext from './storeContext.js'

const root = createRoot(document.getElementById('root'));


const rerenderEntireTree = () => {
  Window.store = store;
  root.render(
    <StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      </BrowserRouter>
    </StrictMode>,
  )
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree)


