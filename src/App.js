import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'


function App() {
  return (
    <div className="w-screen top-0">
      <header className="w-full top-0">
        <Nav />
      </header>
      <Home />
    </div>
  );
}

export default App;
