import React from 'react';


function Details(props) {
    const {char} = props;

    return (
        <div>
            <div className='gender'>Gender: {char.gender}</div>
            <div className='height'>Height: {char.height}</div>
            <div className='mass'>Mass: {char.mass}</div>
            <div className='birthYear'>BirthYear: {char.birth_year}</div>
            <div className='eyeColor'>Eye Color: {char.eye_color}</div>
            <div className='hairColor'>Hari Color: {char.hair_color}</div>
            <div className='skinColor'>Skin Color: {char.skin_color}</div>
        </div>
    )
}


export default Details;