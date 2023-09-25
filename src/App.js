import { Route, Routes } from 'react-router-dom';
import ImageUpload from './routes/ImageUpload';
import ImageList from './routes/ImageList.js';
import Layout from './components/Layout';


const App = () => (
  <div className="App">    
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<ImageList />} />
      <Route path="image-upload" element={<ImageUpload />} /> 
      <Route path="image-list" element={<ImageList />} />        
      </Route>
    </Routes>    
  </div>
);

export default App;
