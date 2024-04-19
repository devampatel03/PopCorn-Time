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








// import React, { useState, useEffect } from "react";

// const Movie_card = ({ movie: { imdbID } }) => {
//     const [movieData, setMovieData] = useState(null);
//     const [isHovered, setIsHovered] = useState(false);

//     useEffect(() => {
//         const fetchMovieData = async () => {
//             try {
//                 const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=bc848061`);
//                 const data = await response.json();
//                 console.log(data);
//                 setMovieData(data);
//             } catch (error) {
//                 console.error("Error fetching movie data:", error);
//             }
//         };

//         fetchMovieData();
//     }, [imdbID]);

//     if (!movieData) {
//         return <div>Loading...</div>; // Display loading indicator while fetching data
//     }


//   const handleMouseEnter = () => {
//     setIsHovered(true);
//     // Perform any action when the mouse enters the div
//     console.log('Mouse entered');
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     // Perform any action when the mouse leaves the div
//     console.log('Mouse left');
//   };

//     return (

//         <div onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave} className="card p-0 hover:scale-[1.08] hover:transition transition-transform " key={imdbID} >
//             {/* <div className="year">
//                 <p>{movieData.Year}</p>
//             </div> */}

//             <div className="poster rounded-md " >
//                 <img className="rounded-xl" src={movieData.Poster !== "N/A" ? movieData.Poster : "https://via.placeholder.com/400"} alt={movieData.Title} />
//                 {/* <h3 className="text-lg font-semibold">{movieData.Title}</h3> */}

//             </div>
//             {
//                 isHovered && (
//                     <div className="info bg-customColor2 p-0 shadow shadow-md shadow-white">
//                                     <div className=" bg-customColor2   "><h3 className="text-lg font-semibold">{movieData.Title}</h3></div>

//                         <div className="year">
//                             <p>{movieData.Year}</p>
//                         </div>

//                         <div className="year">
//                             <p>{movieData.Rated}</p>
//                         </div>

//                         <div className="year">
//                             <p>{movieData.Released}</p>
//                         </div>

//                         <div className="year">
//                             <p>{movieData.Genre}</p>
//                         </div>

//                         <div className="year">
//                             <p>{movieData.Director}</p>
//                         </div>

//                         <div className="year">
//                             <p>{movieData.Actors}</p>
//                         </div>

//                         <div className="year">
//                             <p>{movieData.Plot}</p>
//                         </div>

//                         <div className="year">
//                             <p>{movieData.Language}</p>
//                         </div>

//                         <div className="year">
//                             <p>{movieData.Awards}</p>
//                         </div>
//                     </div>
//                 )
//             }
//             {/* { hov && (

//             )

//             } */}

//             <div className="info transform-all">
//             </div>

//             {/* <div className="title">
//                 <h3>{movieData.Title}</h3>
//             </div>

//             <div className="year">
//                 <p>{movieData.Rated}</p>
//             </div>

//             <div className="year">
//                 <p>{movieData.Released}</p>
//             </div>

//             <div className="year">
//                 <p>{movieData.Genre}</p>
//             </div>

//             <div className="year">
//                 <p>{movieData.Director}</p>
//             </div>

//             <div className="year">
//                 <p>{movieData.Actors}</p>
//             </div>

//             <div className="year">
//                 <p>{movieData.Plot}</p>
//             </div>

//             <div className="year">
//                 <p>{movieData.Language}</p>
//             </div>

//             <div className="year">
//                 <p>{movieData.Awards}</p>
//             </div> */}
//         </div>
//     );
// };

// export default Movie_card;


import React, { useState, useEffect } from "react";
import trailer from "../../assests/video-camera.gif";
import YouTube from 'react-youtube';

const Movie_card = ({ movie: { imdbID } }) => {
  const [movieData, setMovieData] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [trailerId, setTrailerId] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${imdbID}&apikey=bc848061`
        );
        const data = await response.json();
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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddToFavorites = () => {
    setIsFavorite(!isFavorite);
    console.log(isFavorite ? "Added to favorites:" : "Removed from favorites:", movieData.Title);
  };

  // const handleWatchTrailer = () => {
  //   // Add logic to watch the movie trailer
  //   console.log("Watching trailer for:", movieData.Title);
  // };


  const handleWatchTrailer = async () => {
    try {
      const response = await fetch(
        //AIzaSyCck6yC0Jmw0x4_6FJ2W1hlO2-dPyv34AE
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${movieData.Title} Official Trailer&key=AIzaSyCck6yC0Jmw0x4_6FJ2W1hlO2-dPyv34AE`
      );
      const data = await response.json();
      const videoId = data.items[0].id.videoId;
      setTrailerId(videoId);
      setShowTrailer(true);
    } catch (error) {
      console.error("Error fetching YouTube video:", error);
    }
  };


  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`card p-0 rounded-md shadow-md ${isHovered
          ? "scale-[1.08] transition-transform duration-1000 ease-in-out"
          : ""
        }`}
      key={imdbID}

    >
      <div className="poster rounded-md">
        <img
          className="rounded-md"
          src={movieData.Poster !== "N/A" ? movieData.Poster : "https://via.placeholder.com/400"}
          alt={movieData.Title}
        />
      </div>
      {isHovered && (
        <div className="info p-4 shadow-md shadow-white rounded-md -mt-96 text-white backdrop-blur-lg backdrop-contrast-100 backdrop-brightness-50    duration-1000">
          <h3 className="text-xl font-bold mb-2  ml-2">{movieData.Title}</h3>
          <div className="flex items-center mb-4 ">
            <div className="relative w-12 h-12 mr-2 mt-3">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-md font-medium">
                  {parseFloat(movieData.imdbRating).toFixed(1)}
                </span>
              </div>
              <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
              </div>
            </div>
            <div className="flex justify-end mt-4">
              
              <button
                className="bg-customColor hover:bg-black hover:text-white text-black  font-semibold py-2  px-4 w-48 rounded-full ml-2"
                onClick={handleWatchTrailer}
              >
                <img
    src={trailer}
    alt="Trailer GIF"
    className="cursor-pointer w-12  scale-150 rounded-full  inline-flex -ml-7 p-2 mr-2  "
    onClick={handleWatchTrailer}
  />
                Watch Trailer
              </button>
              
            </div>
            
          </div>
          
          <div className="flex items-center mb-2 text-white bg-gray-600 rounded-lg w-14  justify-center">
            
            <p>{movieData.Rated}</p>
          </div>
          <div className="flex items-center mb-2 -mt-8 ml-20">

            <p>{movieData.Released.substring(movieData.Released.length - 4)}</p>          </div>
          
          <div className="flex items-center mb-5 mt-3">
            <p>{movieData.Genre}</p>
          </div>
          
          {/* <div className="flex items-center mb-2">
            <span className="mr-2 font-medium">Director:</span>
            <p>{movieData.Director}</p>
          </div> */}
          {/* <div className="flex items-center mb-2">
            <span className="mr-2 font-medium">Actors:</span>
            <p>{movieData.Actors}</p>
          </div> */}
          <div className="mt-9">
  <p className="whitespace-pre-line h-20 overflow-y-hidden">{movieData.Plot}</p>
</div>

          <div>
          <input
                value="favorite-button"
                name="favorite-checkbox"
                id="favorite"
                checked={isFavorite}
                type="checkbox"
                className="hidden"
              />
              <label
                className="container bg-gray-900  inline-flex items-center cursor-pointer select-none rounded-lg shadow-lg text-white  "
                htmlFor="favorite"
                onClick={handleAddToFavorites}
              >
                <svg
                  className={`feather feather-heart stroke-current ${isFavorite ? "fill-current text-red-500" : "fill-none"} w-6 h-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <div className="action relative overflow-hidden grid animate-in ml-6 mt-4 ">
                  <span
                    className={`option-1 transition-all duration-500 ${isFavorite ? "translate-y-full opacity-0" : ""
                      }`}
                  >
                    Add to Favorites
                  </span>
                  <span
                    className={`option-2 -translate-y-5 transition-all duration-1000 ${isFavorite ? "translate-y-0 opacity-1" : "translate-y-full opacity-0"
                      }`}
                  >
                    Added to Favorites
                  </span>
                </div>
              </label>
          </div>
          {/* <div className="flex items-center mb-2">
            <span className="mr-2 font-medium">Language:</span>
            <p>{movieData.Language}</p>
          </div> */}
          {/* <div className="flex items-center mb-2">
            <span className="mr-2 font-medium">Awards:</span>
            <p>{movieData.Awards}</p>
          </div> */}

        </div>
      )}
      {showTrailer && isHovered &&
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
    <div className="max-w-screen-lg mx-auto relative">
      
      <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
        <YouTube videoId={trailerId} className="absolute top-0 left-0  -mt-32 w-full h-full" />
      </div>
      <button
        onClick={() => setShowTrailer(false)}
        className="absolute top-5  translate-x-[570px] bg-customColor2 rounded-xl p-2 -mt-36 text-white text-xl cursor-pointer"
      >
        Close
      </button>
    </div>
  </div>
}
    </div>
  );
};

export default Movie_card;

