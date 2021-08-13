import React from 'react';
import styled from 'styled-components';

//styling
const StyledSearch = styled.div`
    width: 100%;
    .search-bar {
        width: 70%;
        height: 30px;
        border-radius: ${pr => pr.theme.boxShape};
        font-size: 1rem;
    }
`

function Search(props) {
    const { setSearchTerm } = props;
  
    const changeHandler = e => {
        setSearchTerm(e.target.value);
    }
  
    return (
        <StyledSearch>
            <input className='search-bar' type='text' placeholder='Search characters by name...' onChange={changeHandler} />
        </StyledSearch>
    )
  };

  export default Search;