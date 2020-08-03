import React from 'react';
import 'tachyons';

const SearchBox = ({searchfield , searchChange}) => {
    return (
        <div className="tc pa2">
            <input 
            className="tc pa3 br3 ba30 b--green bg-lightest-blue "
            type="search" 
            placeholder="Search Robot"
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;