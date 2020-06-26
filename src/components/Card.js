import React from 'react';


// Api
const Card = ({ id, name, username, email }) => {
    //(props)
    // const { id, name, email, username } = props //---
    return (
        <div className='bg-lightest-blue dib br3 pa3 ma2 grow tc bw2 shadow-5'>
            <img alt='photo' src={`https://robohash.org/${id}?set=set5`} />
            <div>
                <h2>{name}</h2>
                <h3>{username}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}


//robots
// const Card = ({ id, name, tel, email }) => {      //(props)
//     // const { id, name, email, username } = props //---
//     return (
//         <div className='bg-lightest-blue dib br3 pa3 ma2 grow tc bw2 shadow-5'>
//             <img alt='photo' src={`https://robohash.org/${id}?set=set5`} />
//             <div>
//                 <h2>{name}</h2>
//                 <h3>{email}</h3>
//                 <p>{tel}</p>
//             </div>
//         </div>
//     )
// }




export default Card 