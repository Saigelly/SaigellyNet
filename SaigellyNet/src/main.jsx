import React from 'react'
import './index.css'
import store from './Redux/state.js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
  root.render(
    <StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
    </StrictMode>,
  )
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree)


