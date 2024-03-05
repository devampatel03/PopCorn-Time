import React from "react";

const Movie_card =({movie: { imdbID, title, vote_count, vote_average, release_date, overview, poster_path }})=>{
    
    const year = new Date(release_date).getFullYear();

    return (

        <div className="card" key={imdbID}>
            <div className="year">
                <p>{year}</p>
            </div>

            <div className="poster">
               <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'placeholder_image_url'} alt={title} />
            </div>

            <div className="title">
                {/* <span>{Type}</span> */}
                <h3>{title}</h3>
            </div>

            <div className="vote">
                <p><strong>Vote Average:</strong> {vote_average}</p>
                <p><strong>Vote Count:</strong> {vote_count}</p>
            </div>

            <div className="overview">
                <p>{overview}</p>
            </div>


        </div>
    )

}

export default Movie_card;
