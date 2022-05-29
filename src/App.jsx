import './App.css';
import React from 'react';
import NavBar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Paginate from './components/Paginate';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorites />} />
        </Routes>
        <Paginate />
      </BrowserRouter>
    </>
  );
}

export default App;
