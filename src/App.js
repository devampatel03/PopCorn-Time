import React from "react";
import { useEffect } from "react";

//api key :bc848061
const API_URL = 'http://www.omdbapi.com?apikey=bc848061';

const App=() =>{
    const searchmovies = async (title)=>{
        const response = await fetch (`${API_URL}&s=${title}`);
        const data =await response.json();
        console.log(data);


    }
    useEffect(()=>{
        searchmovies('batman');

    },[])

    return (
        <><div className="Search">
            <h1>POPCORN TIME</h1>
            <input
                placeholder="Search a movie"
                value="spiderman"
                type="text"
                onChange={() => { } } />
            <img class="search_icon"
                src=""
                onClick={() => { } } />
        </div>
        
        <div className="container">
            
            
        </div></>
    )
    
}

export default App;
