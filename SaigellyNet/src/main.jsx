import React from 'react'
import './index.css'
import store from './Redux/ReduxStore'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));


const rerenderEntireTree = () => {
Window.store = store;
  root.render(
    <StrictMode>
      <App
        state={store.getState()}
        store={store}
      />
    </StrictMode>,
  )
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree)


