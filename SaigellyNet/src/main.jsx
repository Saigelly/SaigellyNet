import React from 'react'
import './index.css'
import state, { subscribe } from './Redux/state.js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { addPost, addMessage, updateNewPostText, updateNewMessageText } from './Redux/state.js'





const root = createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
  root.render(
    <StrictMode>
      <App
        state={state}
        addPost={addPost}
        addMessage={addMessage}
        updateNewPostText={updateNewPostText}
        updateNewMessageText = {updateNewMessageText}
      />
    </StrictMode>,
  )
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);