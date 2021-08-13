import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import num from './constants/api';
// import { set } from 'msw/lib/types/context';

const App = () => {
  const [chars, setChars] = useState([]);

  useEffect( async () => {
    const charArr = [];
    for (let i = 1; i <= 6; i++) {
      let number = i;
      const char = await axios(`https://swapi.dev/api/people/${number}`);
      charArr.push(char.data);
    }

    setChars(charArr);
  }, []);
  
   
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <input className='search-bar' type='text' placeholder='Search characters by name...'/>
      <div>Star Wars Major Characters List</div>
      {chars.map(char => <Character key={char.name} char={char} />)}
    </div>
  );
}

export default App;
