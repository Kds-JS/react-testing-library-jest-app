import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './Components/application/application';
import Skills from './Components/skills/skills';
import Counter from './Components/counter/counter';
import { AppProviders } from './providers/AppProviders';
import { MuiMode } from './Components/mui/mui-mode';
import { Users } from './Components/Users/Users';



function App() {
  const skills = ["HTML", "CSS"]
  return (
  //  <div className="App">
  //      <Application/>
  //     <Skills skills={skills}/> 
  //     <Counter/> 
  //   </div>

    <AppProviders>
      <div className='App'>
        <MuiMode/>
        <Users/>
      </div>
    </AppProviders>
  );
}

export default App;
