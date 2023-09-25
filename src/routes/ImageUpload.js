import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  // State to store the selected file
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    try {
      // Create a FormData object and append the selected file to it
      const formData = new FormData();
      formData.append('picture', selectedFile);

      // Make a POST request to your backend API to upload the image
      const response = await axios.post('http://localhost:3000/api/v1/pictures', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data for file upload
        },
      });

      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleFileChange} accept="picture/*" />
      <button 
        onClick={handleUpload}
        style={{
          backgroundColor: '#007bff', 
          color: '#fff',            
          padding: '10px 20px',      
          border: 'none',            
          borderRadius: '5px',       
          cursor: 'pointer',         
        }}
      >
        Upload
      </button>
    </div>
  );
};

export default ImageUpload;
