import React from 'react';

const Card = ({ id, name, username, email }) => {
    return (
        <div className='bg-lightest-blue dib br3 pa3 ma2 grow tc bw2 shadow-5'>
            <img alt='photo' src={`https://robohash.org/${id}?set=set2`} />
            <div>
                <h2>{name}</h2>
                <h3>{username}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card 