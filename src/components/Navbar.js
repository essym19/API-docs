import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">Home</Link>
        <div className="flex space-x-5">
          <Link to="/unsplash" className="text-white">Unsplash API</Link>
          <Link to="/rickandmorty" className="text-white">Rick & Morty API</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
