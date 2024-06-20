import React, { useState, useEffect } from 'react';
import { getUnsplashPhotos } from '../utils/api';

const categories = ['nature', 'technology', 'people', 'architecture', 'food'];

const UnsplashDocs = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  useEffect(() => {
    getUnsplashPhotos(selectedCategory).then(data => setPhotos(data));
  }, [selectedCategory]);

  const handleDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'unsplash-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (url) => {
    if (navigator.share) {
      navigator.share({
        title: 'Unsplash Image',
        url: url,
      }).catch((error) => console.error('Error sharing', error));
    } else {
      alert('Share feature is not supported in this browser.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Unsplash Photos API</h1>
      <p className="mb-4">Here is an example of a use-case of Unsplash photo API whih retrieves photos of different categories from the Unsplash library and allows you to download or share them:</p>
      
      <div className="mb-4">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 mr-2 mb-2 rounded ${category === selectedCategory ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="overflow-hidden rounded-lg shadow-lg p-4 bg-white">
            <div className="relative" style={{ paddingBottom: '75%' }}>
              <img 
                src={photo.urls.regular} 
                alt={photo.description} 
                className="absolute w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm text-gray-600">Photo by <a href={photo.user.links.html} target="_blank" rel="noopener noreferrer" className="text-blue-500">{photo.user.name}</a> on Unsplash</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleDownload(photo.urls.full)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Download
              </button>
              <button
                onClick={() => handleShare(photo.links.html)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UnsplashDocs;
