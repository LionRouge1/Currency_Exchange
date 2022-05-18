import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ConvertCurrency from './Components/convertcurrency';
import Homepage from './Components/pages/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="convertion/:currency" element={<ConvertCurrency />} />
    </Routes>
  );
}

export default App;
