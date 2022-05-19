import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import ConvertCurrency from './Components/convertcurrency';
import Homepage from './Components/pages/Homepage';
import { useDispatch } from 'react-redux';
import { supported } from './redux/api/api';
import Navbar from './Components/Navbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(supported())
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="convertion/:currency" element={<ConvertCurrency />} />
      </Routes>
    </>

  );
}

export default App;
