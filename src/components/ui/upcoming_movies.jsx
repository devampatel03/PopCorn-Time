import React, { useState, useEffect } from "react";
import "./upcoming.css";
import afterearth from "../../assests/afterearth.jpg";
import article370 from "../../assests/article370.jpg";
import dune from "../../assests/dune.jpg";
import inception from "../../assests/inception.png";
import oblivion from "../../assests/oblivion.webp";
import znmd from "../../assests/znmd.jpeg";
import avengers from "../../assests/avengers.jpg";

const poster_list = [
    { imdbID: 1, poster:znmd  },
    { imdbID: 2, poster: dune },
    { imdbID: 3, poster: afterearth },
    { imdbID: 4, poster: inception },
    { imdbID: 5, poster: avengers },
    { imdbID: 6, poster: article370 },
    { imdbID: 7, poster: oblivion }
  ];
const Upcoming_card = ({ movie: { imdbID } }) => {
    const [movieData, setMovieData] = useState(null);

    // useEffect(() => {
    //     const fetchMovieData = async () => {
    //         try {
    //             const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=bc848061`);
    //             const data = await response.json();
    //             console.log(data);
    //             setMovieData(poster_list);
    //         } catch (error) {
    //             console.error("Error fetching movie data:", error);
    //         }
    //     };

    //     fetchMovieData();
    // }, [imdbID]);

    useEffect(() => {
        const movie = poster_list.find(movie => movie.imdbID === imdbID);
        console.log("Movie:", movie);
        setMovieData(movie);
    }, [imdbID]);

    if (!poster_list) {
        return <div>Loading...</div>; // Display loading indicator while fetching data
    }

    return (
        <div className="w-full h-full outline-none bg-transparent" key={imdbID}>
            {movieData && (
                <img
                    src={movieData.poster !== "N/A" ? movieData.poster : "https://via.placeholder.com/400"}
                    className="h-full w-full outline-none border-stone-950"
                    alt=""
                />
            )}
        </div>
    );
};

export default Upcoming_card;