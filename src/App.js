import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Unsplash from './pages/Unsplash';
import RickAndMorty from './pages/RickAndMorty';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/unsplash" element={<Unsplash />} />
          <Route path="/rickandmorty" element={<RickAndMorty />} />
        </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
