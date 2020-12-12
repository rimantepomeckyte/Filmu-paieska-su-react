import React from 'react';


const Search = ({handleInput, search}) => {

    return (
        <section className="row">
            <input type="text"
                   placeholder="Search for a movie..."
                   className="searchbox col-7 mx-auto mt-1"
                   onChange={handleInput}
                   onKeyPress={search}
            />
        </section>
    )
}

export default Search;