import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App(){
  return(
    <div id="parent">
      <div id="child"></div>
    </div>
  ) ; 
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);