import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

export default function App() {
  return (
    <div className="App flex flex-row w-full scroll-smooth">
      <div className='w-1/12'>
        <Sidebar />
      </div>
      <div className='w-11/12'>
        <Main />
      </div>
    </div>
  );
}