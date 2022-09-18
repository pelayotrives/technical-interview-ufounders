import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

export default function App() {
  return (
    <div className="App flex flex-row">
      <Sidebar />
      <Main />
    </div>
  );
}