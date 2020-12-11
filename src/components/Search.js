import React, { useState, useEffect } from 'react';
import MovieCards from "./MovieCards";

const Search = () => {
    const [inputText, setInputText] = useState('')
    const [movieName, setMovieName] = useState('')
    //console.log(movie)
    const onChange = (movie) => {
        setInputText(movie)
        getMovieName(movie)
    }
    const getMovieName = (movie) => {
        setMovieName(movie)
    }

    useEffect(() => {
        const fetchData = async () => {
            console.log("use Effect fetchinimas")
            const response = await fetch(`https://www.omdbapi.com/?apikey=e4db3ced&t=${movieName}`);
            const data = await response.json();
            console.log(data);
            }

        fetchData();
    }, [movieName])


    return (
        <div>
        <section className='search'>
            <form>
                <input type='text'
                       placeholder='Search movie'
                       value={inputText}
                       onChange={(e) => onChange(e.target.value)}
                />
            </form>
        </section>
            <div>
                <MovieCards data={movieName}  />
            </div>
        </div>
    )
}

export default Search;