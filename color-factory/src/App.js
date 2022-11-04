import Color from './Color';
import Colors from './Colors';
import ColorMenu from './ColorMenu';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {useState} from 'react';

import './App.css';

function App() {

  const [colors, setColors] = useState([]);

  const addColor = (text) => {
    const copyColors = [...colors];
    copyColors.push(text);
    setColors(copyColors)
  }

  return (
    <div className="App">
      <ColorMenu addColor={addColor} />
      <BrowserRouter>
        <Routes>
          <Route path="/colors" element={<Colors colors={colors} />} />
          <Route path="/colors/:color" element={<Color colors={colors} />} />
          <Route path='*' element={<Navigate to="/colors" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
