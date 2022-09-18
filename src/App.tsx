import React from 'react';
import Sidebar from './components/Sidebar';
import Greeting from './components/Greeting';
import People from './components/People';

export default function App() {
  return (
    <div className="App flex flex-row">
      {/* <p className='text-5xl text-center text-red-900'>Hello, world!</p> */}
      <Sidebar />
      <Greeting />
      <People />
    </div>
  );
}