// Write your Character component here
import React, { useState } from 'react';
import Details from './Details';
import styled from 'styled-components';

//styling
const StyledCharacter = styled.div`
    border: white solid 1px;
    padding: 1%;
    width: 100%;
    box-shadow: -3px 0 24px rgba(0, 0, 0, 0.5);
    border-radius: ${pr => pr.theme.boxShape};
    .name {
        padding: 2%;
        color: black;
    }
    margin: 5px 0;
    @media ${pr => pr.theme.breakpointMobile} {
        font-size: ${pr => pr.theme.mobileFontSize};
    }

`



//*************************************** */
function Character(props) {
    const {char} = props;
    const [show, setShow] = useState(false);
    const [label, setLabel] = useState('Show Details');

    const changeHandler = () => {
        setShow(!show);
        show === true ? setLabel('Show Details') : setLabel('Close');
    }

    return (
        <StyledCharacter className='nameContainer'>
            <div className='name'>{char.name}</div>
            <button onClick={changeHandler}>{label}</button>
            {show && <Details char={char} />}
        </StyledCharacter>
    )
};

export default Character;
