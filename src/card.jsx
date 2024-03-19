// import React, { useState, useEffect } from "react";
// import YouTube from 'react-youtube';

// class Example extends React.Component {
//   render() {
//     const opts = {
//       height: '390',
//       width: '640',
//       playerVars: {
//         // https://developers.google.com/youtube/player_parameters
//         autoplay: 1,
//       },
//     };

//     return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />;
//   }

//   _onReady(event) {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo();
//   }
// }
// const Movie_card =({movie: { imdbID, title, vote_count, vote_average, release_date, overview, poster_path }})=>{
    
//     const year = new Date(release_date).getFullYear();
//     const [trailerLink , setTrailerLink] = useState("");
    
//     useEffect(() => {
//         const fetchTrailer = async () => {
//             try {
//                 // Fetching movie details from TMDB
//                 const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_TMDB_API_KEY&language=en-US&query=${title}`);
//                 const data = await response.json();
//                 if (data.results && data.results.length > 0) {
//                     // Fetching video details for the first movie result
//                     const videoResponse = await fetch(`https://api.themoviedb.org/3/movie/${data.results[0].id}/videos?api_key=YOUR_TMDB_API_KEY`);
//                     const videoData = await videoResponse.json();
//                     if (videoData.results && videoData.results.length > 0) {
//                         // Filtering for trailers
//                         const trailer = videoData.results.find(video => video.type === "Trailer");
//                         if (trailer) {
//                             setTrailerLink(`https://www.youtube.com/watch?v=${trailer.key}`);
//                         }
//                     }
//                 }
//             } catch (error) {
//                 console.error("Error fetching trailer:", error);
//             }
//         };
//     }, [title]);
    
    
    
    
    
    
    
//     return (

//         <div className="card" key={imdbID}>
//             <div className="year">
//                 <p>{year}</p>
//             </div>

//             <div className="poster">
//                <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'placeholder_image_url'} alt={title} />
//             </div>

//             <div className="title">
//                 {/* <span>{Type}</span> */}
//                 <h3>{title}</h3>
//             </div>

//             {/* <div className="vote">
//                 <p><strong>Vote Average:</strong> {vote_average}</p>
//                 <p><strong>Vote Count:</strong> {vote_count}</p>
//             </div> */}

//             {/* <div className="overview">
//                 <p>{overview}</p>
//             </div> */}

//             {/* {trailerLink && (
//                 <div className="trailer">
//                     <a href={trailerLink} target="_blank" rel="noopener noreferrer">Watch Trailer</a>
//                 </div>
//             )} */}

//             {/* { (
//                 <div className="trailer">
//                     <a href={trailerLink} target="_blank" rel="noopener noreferrer">Watch Trailer</a>
//                 </div>
//             )} */}


//             {/* <div className="example-component">
//                 <Example />
//             </div> */}


//         </div>
//     )

// }

// export default Movie_card;





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