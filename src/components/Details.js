import React from 'react';
import styled from 'styled-components';

//styling
const StyledDetails = styled.div`
    border: white solid 1px;
    padding: 1%;
    width: 80%;
    box-shadow: -3px 0 24px rgba(0, 0, 0, 0.5);
    margin: auto;
    padding: 1%;
    @media ${pr => pr.theme.breakpointMobile} {
        div {
            font-size: ${pr => pr.theme.mobileFontSize};
            color: red;
        }
    }

`


//********************************************* */
function Details(props) {
    const {char} = props;

    return (
        <StyledDetails className="details">
            <div className='gender'>Gender: {char.gender}</div>
            <div className='height'>Height: {char.height}</div>
            <div className='mass'>Mass: {char.mass}</div>
            <div className='birthYear'>BirthYear: {char.birth_year}</div>
            <div className='eyeColor'>Eye Color: {char.eye_color}</div>
            <div className='hairColor'>Hari Color: {char.hair_color}</div>
            <div className='skinColor'>Skin Color: {char.skin_color}</div>
        </StyledDetails>
    )
}


export default Details;