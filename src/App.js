import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={< Landing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App