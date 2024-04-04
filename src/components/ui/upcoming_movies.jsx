import React, { useState, useEffect } from "react";
import "./upcoming.css";
import test from "../../assests/background.png"
const Upcoming_card = ({ movie: { imdbID } }) => {
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
        <div className=" w-full h-full outline-none bg-transparent" key={imdbID} >
            {/* <img src={test} alt="" className="" /> */}
            <img src={movieData.Poster !== "N/A" ? movieData.Poster : "https://via.placeholder.com/400"} alt={movieData.Title} className="h-full w-full outline-none border-stone-950" />

        </div>

    );
};

export default Upcoming_card;