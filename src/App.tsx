import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './Components/application/application';
import Skills from './Components/skills/skills';
import Counter from './Components/counter/counter';

function App() {
  const skills = ["HTML", "CSS"]
  return (
    <div className="App">
      {/* <Application/>
      <Skills skills={skills}/> */}
      <Counter/>
    </div>
  );
}

export default App;
