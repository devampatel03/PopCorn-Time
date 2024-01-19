import React from "react";

const Movie_card =({movie :{imdbID,Year,Poster,Title,Type}})=>{
    return (
        <div className="card" key={imdbID}>
            <div className="year">
                <p>{Year}</p>
            </div>

            <div className="poster">
                <img src={Poster!=="N/A"? Poster:"https://via.placeholder.com/400"} alt={Title} />
            </div>

            <div className="title">
                {/* <span>{Type}</span> */}
                <h3>{Title}</h3>
            </div>


        </div>
    )

}

export default Movie_card;
