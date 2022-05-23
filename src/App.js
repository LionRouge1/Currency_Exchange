import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import screenContext from './Components/screenContex';
import ConvertCurrency from './Components/convertcurrency';
import Homepage from './Components/pages/Homepage';
import { supported } from './redux/api/api';
import Navbar from './Components/Navbar';

function App() {
  const dispatch = useDispatch();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth < 650);

  useEffect(() => {
    dispatch(supported());

    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth < 650);
    });

    return () => (
      window.removeEventListener('resize', () => {
        setScreenWidth(window.innerWidth < 650);
      }));
  }, [dispatch]);

  return (
    <>
      <screenContext.Provider value={screenWidth}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="convertion/:currency" element={<ConvertCurrency />} />
        </Routes>
      </screenContext.Provider>
    </>

  );
}

export default App;
