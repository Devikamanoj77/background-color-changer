import React, { useState } from 'react';
import './App.css';

function App() {

  const [bgColor, setBgColor] = useState('dark'); 

  const changeBgColor = (color) => {
    setBgColor(color);
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh' }} className={`bg-${bgColor}`}>
      <div
        style={{ height: '300px' }}
        className='text-light d-flex justify-content-center align-items-center'>
        <h2 style={{ fontSize: '40px' }} className='fw-bolder'>
          Change Background Color
        </h2>
      </div>

      <div
        style={{ width:'auto', marginLeft: '450px', marginRight: '450px' }} className='bg-light rounded p-5 d-flex'>
        <button
          style={{ width: '100px' }} className='ms-3 rounded bg-danger w-5' onClick={() => changeBgColor('danger')}>
          Red
        </button>
        <button
          style={{ background: 'orange', width: '100px' }} className='ms-3 rounded w-5'onClick={() => changeBgColor('warning')}>
          Orange
        </button>
        <button
          style={{ width: '100px' }} className='ms-3 rounded p-3'onClick={() => changeBgColor('light')}>
          White
        </button>
        <button
          style={{ width: '100px' }} className='ms-3 rounded bg-success' onClick={() => changeBgColor('success')}>
          Green
        </button>
        <button
          style={{ background: 'blue', width: '100px' }} className='ms-3 rounded w-5' onClick={() => changeBgColor('primary')}>
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;
