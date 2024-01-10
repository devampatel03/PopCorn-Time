import React from "react";
import { useState,useEffect } from "react";
import Movie_card from "./card";
import "./App.css";


//api key :bc848061
const API_URL = 'http://www.omdbapi.com?apikey=bc848061';

const App=() =>{

    const [searchkeyword,setsearchkeyword]=useState('');
    const [ list_of_movies,setlist_of_movies]=useState([]);

    const searchmovies = async (title)=>{
        const response = await fetch (`${API_URL}&s=${title}`);
        const data =await response.json();
        setlist_of_movies(data.Search);


    }
    useEffect(()=>{
        searchmovies('batman');

    },[])

   

    return (
        <div className="app">
            <h1 className="heading">POPCORN TIME</h1>
            <div className="search">
                <input
                    placeholder="Search a movie"
                    value={searchkeyword}
                    type="text"
                    onChange={(e) => setsearchkeyword(e.target.value)} />
                <img className="search_icon"
                    src="search.svg"
                    onClick={() => searchmovies(searchkeyword)} 
                    />
            </div>
        
        
        {list_of_movies?.length > 0 ? (
        <div className="container">
            {list_of_movies.map((each_movie)=>(
                <Movie_card movie={each_movie}/>
            ))}


        </div>
        ) :(
            <div className="notfound">
                <h2>No Movies Found</h2>
            </div>
        )}
        </div>
    );

    
};

export default App;
