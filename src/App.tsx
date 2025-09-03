import './App.css';
import React from 'react';
import { useForm } from "react-hook-form"; 
import { isMobile, isTablet, isDesktop } from 'react-device-detect';

function App() {
  return (
    <div>
      {isMobile && <div>Mobile</div>}
      {isTablet && <div>Tablet</div>}
      {isDesktop && <div>Desktop</div>}
    </div>
  );
}

export default App;
