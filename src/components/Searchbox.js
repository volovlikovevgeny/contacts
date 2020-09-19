import React from 'react'

const Searchbox = ({ SearchChange }) => {
    return (
        <input
            type='search'
            placeholder='Search contacts'
            className='pa3 ma2 bg-lightest-green ba b--blue dt-fixed '
            onChange={SearchChange}
        />
    )
}


export default Searchbox
