import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';
import Search from './components/Search';

//import styling
import styled from 'styled-components';
import './App.css';

//styling
const StyledApp = styled.div`
  border: white solid 1px;
  box-shadow: inset -1px 3px 8px 5px #6e736f;
  background-color: ${pr => pr.theme.primaryColor};
  border-radius: ${pr => pr.theme.boxShape};
  h1 {
    font-size: ${pr => pr.theme.headerSize};
  };
  #list {
    padding: 1%;
  };
  button {
    border-radius: 7px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    width: 100px;
    height: 30px;
    border-color: white;
    &:hover {
      background-color: #a5a8a5;
      color: white;
      transform: scale(1.2);
    };
  };
  #content {
    display: flex;
    flex-direction: column;
    justify-center: center;
    align-items: center;
    width: 70%;
  }

`;


const App = () => {
  const [chars, setChars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setChars(res.data);
      })
      .catch(err => {
        console.error(err);
        setError("Sorry, try again soon");
      })  
  }, []);
  
  const getFilteredChars = () => {
    const newArr = chars.filter(char => {
      return char.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    return newArr;
  };


  return (
    <StyledApp className="App">
        <h1 className="Header">Characters</h1>
        <Search setSearchTerm={setSearchTerm} />
        {error && <div>{error}</div>}
        <div id='list'>Star Wars Major Characters List</div>
        <div id='content'>
          {getFilteredChars().map(char => <Character key={char.name} char={char} />)}
        </div>
    </StyledApp>
  );
}

export default App;
