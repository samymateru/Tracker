import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './navigation'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Navigation />
    </BrowserRouter>
    
)
