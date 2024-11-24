import React from 'react'
import './index.css'
import store from './Redux/ReduxStore'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

const root = createRoot(document.getElementById('root'));
  Window.store = store;

const rerenderEntireTree = () => {
  Window.store = store;
  root.render(
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
      </BrowserRouter>
    </StrictMode>,
  )
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree)


