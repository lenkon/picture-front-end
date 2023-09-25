import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageList = () => {
  // State to store the list of images
  const [pictures, setImages] = useState([]);

  // Function to fetch the list of images from the backend
  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/pictures'); // Replace with your actual backend API endpoint
      setImages(response.data);
    } catch (error) {
      // Handle error (you can display an error message or take appropriate action)
      console.error('Error fetching images:', error);
    }
  };

  // Fetch images when the component mounts
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h2>Image List</h2>
      <ul>
        {pictures.map((picture, index) => (
          <li key={index}>
            <img 
              src={`http://localhost:3000${picture.picture_url}`} 
              alt={`Image ${index}`} 
              style={{ width: '200px', height: '200px' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageList;
