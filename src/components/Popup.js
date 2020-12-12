import React from "react";

const Popup = ({ selected, closePopup }) => {
    return (
        <section className="popup">
            <div>
                <h2 className="row w-25 d-flex justify-content-center text-white font-weight-bold">{selected.Title}<span className="font-weight-lighter"> ({selected.Year})</span>
                </h2>
                <p className="row w-25 d-flex justify-content-center text-white font-weight-bolder">Imdb rating: {selected.imdbRating}</p>
                <div className="row mt-3">
                    <img src={selected.Poster} className="col-12 col-md-3"/>
                    <div className="col-md-7 col-12">
                        <p className="row text-white">{selected.Plot}</p>
                        <p className="row text-white"><span className="font-weight-bolder">Director:</span> {selected.Director}</p>
                        <p className="row text-white"><span className="font-weight-bolder">Main actors:</span> {selected.Actors}</p>
                    </div>
                </div>
                <div className="row w-25 d-flex justify-content-center">
                    <button className="text-white my-3 btn btn-info btn-lg" onClick={closePopup}>Go back</button>
                </div>
            </div>

        </section>
    )
}

export default Popup;