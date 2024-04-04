// // import React, { useState, useEffect } from "react";
// // import YouTube from 'react-youtube';

// // class Example extends React.Component {
// //   render() {
// //     const opts = {
// //       height: '390',
// //       width: '640',
// //       playerVars: {
// //         // https://developers.google.com/youtube/player_parameters
// //         autoplay: 1,
// //       },
// //     };

// //     return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />;
// //   }

// //   _onReady(event) {
// //     // access to player in all event handlers via event.target
// //     event.target.pauseVideo();
// //   }
// // }
// // const Movie_card =({movie: { imdbID, title, vote_count, vote_average, release_date, overview, poster_path }})=>{
    
// //     const year = new Date(release_date).getFullYear();
// //     const [trailerLink , setTrailerLink] = useState("");
    
// //     useEffect(() => {
// //         const fetchTrailer = async () => {
// //             try {
// //                 // Fetching movie details from TMDB
// //                 const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_TMDB_API_KEY&language=en-US&query=${title}`);
// //                 const data = await response.json();
// //                 if (data.results && data.results.length > 0) {
// //                     // Fetching video details for the first movie result
// //                     const videoResponse = await fetch(`https://api.themoviedb.org/3/movie/${data.results[0].id}/videos?api_key=YOUR_TMDB_API_KEY`);
// //                     const videoData = await videoResponse.json();
// //                     if (videoData.results && videoData.results.length > 0) {
// //                         // Filtering for trailers
// //                         const trailer = videoData.results.find(video => video.type === "Trailer");
// //                         if (trailer) {
// //                             setTrailerLink(`https://www.youtube.com/watch?v=${trailer.key}`);
// //                         }
// //                     }
// //                 }
// //             } catch (error) {
// //                 console.error("Error fetching trailer:", error);
// //             }
// //         };
// //     }, [title]);
    
    
    
    
    
    
    
// //     return (

// //         <div className="card" key={imdbID}>
// //             <div className="year">
// //                 <p>{year}</p>
// //             </div>

// //             <div className="poster">
// //                <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'placeholder_image_url'} alt={title} />
// //             </div>

// //             <div className="title">
// //                 {/* <span>{Type}</span> */}
// //                 <h3>{title}</h3>
// //             </div>

// //             {/* <div className="vote">
// //                 <p><strong>Vote Average:</strong> {vote_average}</p>
// //                 <p><strong>Vote Count:</strong> {vote_count}</p>
// //             </div> */}

// //             {/* <div className="overview">
// //                 <p>{overview}</p>
// //             </div> */}

// //             {/* {trailerLink && (
// //                 <div className="trailer">
// //                     <a href={trailerLink} target="_blank" rel="noopener noreferrer">Watch Trailer</a>
// //                 </div>
// //             )} */}

// //             {/* { (
// //                 <div className="trailer">
// //                     <a href={trailerLink} target="_blank" rel="noopener noreferrer">Watch Trailer</a>
// //                 </div>
// //             )} */}


// //             {/* <div className="example-component">
// //                 <Example />
// //             </div> */}


// //         </div>
// //     )

// // }

// // export default Movie_card;





// // import React from "react";

// // const Movie_card =({movie: { imdbID, title, vote_count, vote_average, release_date, overview, poster_path }})=>{
    
// //     const year = new Date(release_date).getFullYear();

// //     return (

// //         <div className="card" key={imdbID}>
// //             <div className="year">
// //                 <p>{year}</p>
// //             </div>

// //             <div className="poster">
// //                <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'placeholder_image_url'} alt={title} />
// //             </div>

// //             <div className="title">
// //                 {/* <span>{Type}</span> */}
// //                 <h3>{title}</h3>
// //             </div>

// //             <div className="vote">
// //                 <p><strong>Vote Average:</strong> {vote_average}</p>
// //                 <p><strong>Vote Count:</strong> {vote_count}</p>
// //             </div>

// //             <div className="overview">
// //                 <p>{overview}</p>
// //             </div>


// //         </div>
// //     )

// // }

// // export default Movie_card;


// import React from "react";

// const dataset = async (id)=>{
//     const response = await fetch (`https://www.omdbapi.com/?i=${id}&apikey=bc848061`);
//     const data =await response.json();
//     console.log(data);
//     return(data)
   

// }

// const Movie_card =({movie :{imdbID,Year,Poster,Title,Type,Rated,Released,Genre,Director,Actors,Plot,Language,Awards}})=>{
//     const complete_data = dataset(imdbID);
//     console.log(complete_data);
//     return (
//         <div className="card" key={imdbID}>
//             <div className="year">
//                 <p>{complete_data.Year}</p>
//             </div>

//             <div className="poster">
//                 <img src={complete_data.Poster!=="N/A"? complete_data.Poster:"https://via.placeholder.com/400"} alt={complete_data.Title} />
//             </div>

//             <div className="title">
//                 {/* <span>{Type}</span> */}
//                 <h3>{complete_data.Title}</h3>
//             </div>

//             <div className="year">
//                 <p>{complete_data.Rated}</p>
//             </div>

//             <div className="year">
//                 <p>{complete_data.Released}</p>
//             </div>

//             <div className="year">
//                 <p>{complete_data.Genre}</p>
//             </div>

//             <div className="year">
//                 <p>{complete_data.Director}</p>
//             </div>

//             <div className="year">
//                 <p>{complete_data.Actors}</p>
//             </div>

//             <div className="year">
//                 <p>{complete_data.Plot}</p>
//             </div>

//             <div className="year">
//                 <p>{complete_data.Language}</p>
//             </div>

//             <div className="year">
//                 <p>{complete_data.Awards}</p>
//             </div>


//         </div>
//     )

// }

// export default Movie_card;


import React, { useState, useEffect } from "react";

const Movie_card = ({ movie: { imdbID } }) => {
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=bc848061`);
                const data = await response.json();
                console.log(data);
                setMovieData(data);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };

        fetchMovieData();
    }, [imdbID]);

    if (!movieData) {
        return <div>Loading...</div>; // Display loading indicator while fetching data
    }

    return (
        
        <div className="card" key={imdbID}>
            {/* <div className="year">
                <p>{movieData.Year}</p>
            </div> */}

            <div className="poster">
                <img src={movieData.Poster !== "N/A" ? movieData.Poster : "https://via.placeholder.com/400"} alt={movieData.Title} />
            </div>

            {/* <div className="title">
                <h3>{movieData.Title}</h3>
            </div>

            <div className="year">
                <p>{movieData.Rated}</p>
            </div>

            <div className="year">
                <p>{movieData.Released}</p>
            </div>

            <div className="year">
                <p>{movieData.Genre}</p>
            </div>

            <div className="year">
                <p>{movieData.Director}</p>
            </div>

            <div className="year">
                <p>{movieData.Actors}</p>
            </div>

            <div className="year">
                <p>{movieData.Plot}</p>
            </div>

            <div className="year">
                <p>{movieData.Language}</p>
            </div>

            <div className="year">
                <p>{movieData.Awards}</p>
            </div> */}
        </div>
    );
};

export default Movie_card;
