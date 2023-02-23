import React from 'react'
import { Home,Vote,Results,About,Navbar } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/vote" exact element={<Vote />} />
            <Route path="/results" exact element={<Results />} />
            <Route path="/about" exact element={<About />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App