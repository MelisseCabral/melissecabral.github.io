import React from 'react';
import './App.css';
import Experiences from './components/Experiences';
import Header from './components/Header';
import Presentation from './components/Presentation';

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
        <Presentation/>
      </header>
      
      <Experiences />
    </div>
  );
}

export default App;
