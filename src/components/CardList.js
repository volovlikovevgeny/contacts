import React from 'react'
import Card from './Card'


const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map((user, i) => {
                return (
                    <Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                        // Api
                        username={robots[i].username}
                    //robots
                    // tel={robots[i].tel}
                    />
                )
            })}
        </div>
    );
}

export default CardList