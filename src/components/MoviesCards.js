import React from 'react';
import Movie from "./Movie";

const MoviesCards = ({ results, openPopup }) => {
    console.log(results)
    return (
        <section className="results mx-2">
            {results.map(result => (
              <Movie key={result.imdbID} result={result} openPopup={openPopup} />
            ))}
        </section>
    );
}
export default MoviesCards;