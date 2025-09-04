
//import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Filmes from './pages/Filmes.jsx'
import Pesquisar from './pages/Pesquisar.jsx'

import './index.css'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="filmes/:id" element={<Filmes />} />
          <Route path="pesquisar" element={<Pesquisar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
