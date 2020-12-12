import React from "react";

const Movie = ({result, openPopup}) => {
    console.log(result);
    return (

            <div className="result" onClick={() => openPopup(result.imdbID)}>
                <img src={result.Poster}/>
                <h3 className="text-white fs-4 fw-bolder bg-secondary p-2">{result.Title}</h3>
            </div>
    )
}

export default Movie;