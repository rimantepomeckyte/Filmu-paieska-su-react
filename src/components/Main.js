import React, {useState} from 'react';
import Search from "./Search";
import Header from "./Header";
import MoviesCards from "./MoviesCards";
import Popup from "./Popup";


const Main = () => {
const [state, setState] = useState({
    s: "",
    results:[],
    selected:{}
});
    const fetchUrl = 'https://www.omdbapi.com/?apikey=e4db3ced';
    const search = (e) => {
        if(e.key === "Enter"){
            const fetchData = async () => {
              //  console.log("use Effect fetchinimas")
                const response = await fetch(fetchUrl+"&s="+state.s);
                const data = await response.json();
                //console.log(data);
                const results = data.Search;
                setState(prevState => {
                    return{ ...prevState, results: results}
                })
            }
fetchData()
        }
    }

    //this is where we handle our value , when we press enter
    const handleInput = (e) => {
        let s = e.target.value;
        setState(prevState => {
            return{...prevState, s: s}
        });
        //console.log(state.s)
    }

    const openPopup = (id) =>{
        const fetchData = async () => {
            const response = await fetch(fetchUrl+"&i="+id);
            const data = await response.json();
            const result = data;
            console.log(result);

            setState(prevState => {
            return { ...prevState, selected: result}
        })
    }
    fetchData()}

    const closePopup = () => {
        setState(prevState => {
            return{ ...prevState, selected: {}}
        })
    }

    return (
        <div>
            <Header/>
            <Search handleInput={handleInput} search={search}/>
            <MoviesCards results={state.results} openPopup={openPopup}/>
            {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
        </div>
    )
}

export default Main;