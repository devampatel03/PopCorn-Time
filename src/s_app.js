// import React, { useState, useEffect } from "react";
// import MovieCard from "./card";

// import { Button } from "./components/ui/button";
// import Autoplay from "embla-carousel-autoplay"
// import { Card, CardContent } from "./components/ui/card"
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel"
// // import "./index.css";
// const API_URL = 'http://www.omdbapi.com?apikey=bc848061';

// // Define CarouselPlugin outside of the App component
// export function CarouselPlugin() {
//     const plugin = React.useRef(
//         Autoplay({ delay: 2000, stopOnInteraction: true })
//     )

//     return (
//         <Carousel
//             plugins={[plugin.current]}
//             className="w-full max-w-xs"
//             onMouseEnter={plugin.current.stop}
//             onMouseLeave={plugin.current.reset}
//         >
//             <CarouselContent>
//                 {Array.from({ length: 5 }).map((_, index) => (
//                     <CarouselItem key={index}>
//                         <div className="p-1">
//                             <Card>
//                                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                                     <span className="text-4xl font-semibold">{index + 1}</span>
//                                 </CardContent>
//                             </Card>
//                         </div>
//                     </CarouselItem>
//                 ))}
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//         </Carousel>
//     )
// }

// const App =()=>{

// }




import React, { useState, useEffect } from "react";
import MovieCard from "./components/ui/m_card";

import { Button } from "./components/ui/button";
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "./components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel"
// import "./index.css";
const API_URL = 'http://www.omdbapi.com?apikey=bc848061';

// Define CarouselPlugin outside of the App component
export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6 al">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

const App = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [listOfMovies, setListOfMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
        setListOfMovies(data.Search);
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            searchMovies(searchKeyword);
        }
    }

    useEffect(() => {
        searchMovies('batman');
    }, []);

    const sortedMovies = listOfMovies?.length > 0 ? listOfMovies.sort((a, b) => a.Year.localeCompare(b.Year)) : [];

    return (
        <div className="app">
            <pre><span className="heading"><span>P</span>O<span>P</span>CO<img src="popcorn.png" className="popcorn" />N  TIME</span></pre>
            <div className="search">
                <input
                    className="search_bar"
                    placeholder="Search a movie"
                    value={searchKeyword}
                    type="text"
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <img
                    className="search_icon"
                    src="search.svg"
                    alt="Search"
                    onClick={() => searchMovies(searchKeyword)}
                />
                <Button variant="secondary" size="sm" onClick={() => searchMovies(searchKeyword)}>Search</Button>

                {/* Render CarouselPlugin component */}
                <CarouselPlugin />
            </div>
            <button className="left_cursor">Left</button>
            <div className="list_of_movies">
                {sortedMovies?.length > 0 ? (
                    <div className="container">
                        {sortedMovies.map((eachMovie) => (
                            <MovieCard key={eachMovie.imdbID} movie={eachMovie} />
                        ))}
                    </div>
                ) : (
                    <div className="notfound">
                        <h2>No Movies Found</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
