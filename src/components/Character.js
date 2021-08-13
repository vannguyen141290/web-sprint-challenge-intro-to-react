// Write your Character component here
import React from 'react';
import Details from './Details';

function Character(props) {
    const {char} = props;

    
    return (
        <div>
            <div className="nameContainer">
                <div className='name'>{char.name}</div>
                <button>open/close</button>
            </div>
            <div>
                <Details char={char} />
            </div>
        </div>
    )
};

export default Character;
