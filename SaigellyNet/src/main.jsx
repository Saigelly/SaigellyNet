import React from 'react'
import './index.css'
import { rerenderEntireTree } from './render.jsx'
import state from './Redux/state.js'


rerenderEntireTree(state);