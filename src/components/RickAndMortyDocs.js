import React, { useState, useEffect } from 'react';
import { getRickAndMortyCharacters, searchRickAndMortyCharacter } from '../utils/api';

const RickAndMortyDocs = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // Fetch all characters on component mount
  useEffect(() => {
    fetchCharacters();
  }, []);

  // Function to fetch characters
  const fetchCharacters = async () => {
    try {
      const charactersData = await getRickAndMortyCharacters();
      setCharacters(charactersData);
    } catch (error) {
      console.error('Error fetching Rick and Morty characters:', error);
    }
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle character search
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      try {
        const results = await searchRickAndMortyCharacter(searchTerm.trim());
        setCharacters(results);
      } catch (error) {
        console.error('Error searching Rick and Morty characters:', error);
      }
    } else {
      fetchCharacters();
    }
  };

  // Handle clicking on a character card to show details
  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  // Handle going back to character list
  const handleBackToCharacters = () => {
    setSelectedCharacter(null);
    fetchCharacters();
  };

  // Render character cards or character details
  const renderCharacters = () => {
    if (selectedCharacter) {
      return (
        <div className="bg-gray-200 p-4 rounded">
          <img src={selectedCharacter.image} alt={selectedCharacter.name} className="mb-4" />
          <h2 className="text-lg font-bold">{selectedCharacter.name}</h2>
          <p>Status: {selectedCharacter.status}</p>
          <p>Location: {selectedCharacter.location.name}</p>
          <button onClick={handleBackToCharacters} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Back to Characters
          </button>
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-3 gap-4">
          {characters.map(character => (
            <div key={character.id} className="bg-gray-200 p-4 rounded cursor-pointer" onClick={() => handleCharacterClick(character)}>
              <img src={character.image} alt={character.name} className="mb-4" />
              <h2 className="text-lg font-bold">{character.name}</h2>
              <p>Status: {character.status}</p>
              <p>Location: {character.location.name}</p>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Rick & Morty API</h1>
      <p className="mb-4">Here is a use-case of the Rick & Morty API that allows you to search charaacters in the show and displays their status and location.</p>

      <form onSubmit={handleSearchSubmit} className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search character by name"
          className="border border-gray-300 rounded-lg px-4 py-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
      </form>

      {renderCharacters()}
    </div>
  );
}

export default RickAndMortyDocs;
