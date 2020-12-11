import React from 'react';

const MovieCards = (props) => {
    console.log(props.data)
    return (
       <div className="mt-2">
           <h1 className="text-white">{props.data.Title}</h1>
        </div>
    );
}
export default MovieCards;