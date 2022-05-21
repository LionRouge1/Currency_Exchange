import React from 'react';

const screenContext = React.createContext(window.innerWidth < 700);
export default screenContext;
