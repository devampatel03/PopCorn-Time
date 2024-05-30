import React, { useState, useEffect, useRef } from "react";
import MovieCard from "./components/ui/m_card";

import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';


import { Button } from "./components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel";
import "./index.css"; // Assuming this file contains global styles

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';


import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, ListItem, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle } from "./components/ui/navigation-menu"
import Upcoming_card from "./components/ui/upcoming_movies";
import { hover } from "@testing-library/user-event/dist/hover";
import Footer from "./components/ui/footer";
import Login from "./components/login.jsx";

const API_URL = 'http://www.omdbapi.com?apikey=13a38685';

export function CarouselPlugin() {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true, loop: true, from: 0, to: 1 })
    );

    const upcomingMovies = [1, 2, 3, 4, 5, 6, 7];

    return (
        <Carousel
            plugins={[plugin.current]}
            className="box w-11/12 ml-7 -mt-5 outline-none border-stone-950"
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
        >


            {/* {upcomingMovies.map((imdbID) => (
                <CarouselItem key={imdbID}>
                    
                </CarouselItem>
            ))} */}

            <CarouselContent>
                {upcomingMovies.map((imdbID) => (


                    <CarouselItem key={imdbID}>
                        <div className=" h-[70vh] pt-0 w-full outline-none border-transparent bg-transparent">
                            <Card className="h-full w-full">
                                <CardContent className="flex items-center justify-center w-full h-full bg-transparent">
                                    <Upcoming_card movie={{ imdbID }} />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

const App = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [listOfMovies, setListOfMovies] = useState([]);
    const romgenreList = ["tt3783958", "tt5726616", "tt2209418", "tt5580390", "tt1517451", "tt2194499", "tt5462602", "tt2402927", "tt0381681", "tt2582846"];
    const trendingList = ["tt2194499", "tt10872600", "tt10838180", "tt9376612", "tt9243804", "tt11095836", "tt5783956", "tt3811906", "tt1517451", "tt3501632"];
    const actionList = ["tt2381249", "tt2802144", "tt2515034", "tt1641841", "tt2199571", "tt2493486", "tt3397884"];
    const comedyList = ["tt11095836", "tt0448115", "tt5783956", "tt2704998", "tt2283362", "tt3501632", "tt6751668", "tt0118799", "tt6966692", "tt0120382"];
    const horrorList = ["tt8332922", "tt0081505", "tt0993840", "tt0185937", "tt7784604", "tt1029234", "tt3811906", "tt0167404"];
    const movieList = ["tt0111161", "tt0468569", "tt1187043", "tt20850406", "tt0068646", "tt0110912", "tt7466810", "tt9263550", "tt23849204", "tt0108052","tt2802144","tt3397884","tt1029234","tt2194499","tt2582846","tt2515034", "tt1641841", "tt2199571", "tt2493486", "tt3397884","tt11095836", "tt0448115", "tt5783956", "tt2704998", "tt2283362","tt0185937","tt2194499", "tt10872600"];
    const tvshowList = [ "tt0944947", "tt6473300", "tt0108778", "tt6494622", "tt1475582", "tt0898266", "tt9544034", "tt9398466","tt9675460","tt1520211","tt0386676","tt4574334","tt0475784","tt8111088", "tt9426852", "tt11912196","tt12004706", "tt12392504", "tt12851396", "tt6466208", "tt5180504","tt5071412","tt4786824", "tt5834204"];
    const kidsList = ["tt0837562", "tt0121164", "tt0095489", "tt0107290", "tt0099785", "tt1142977", "tt0107688", "tt0245429", "tt1217209", "tt0110357"];
    const mysterythrillerList = ["tt3397884", "tt0119488", "tt0096438", "tt0114369", "tt0113568", "tt0073195", "tt2267998", "tt0286106", "tt3065204", "tt3235888"];
    const animeList =  ["tt0245429", "tt0095327", "tt5311514", "tt0119698", "tt5323662", "tt2374144", "tt0113799", "tt0096283", "tt0169858", "tt0347149"];
    const documentaryList =   ["tt0096257", "tt0310793", "tt0390521", "tt0497116", "tt1155592", "tt2545118", "tt5895028","tt10872600"];
    const fantasyList =  ["tt0167260", "tt0120737", "tt0167261", "tt1170358", "tt0903624", "tt1201607", "tt0926084", "tt0417741", "tt0373889", "tt0330373"];
    const sciencefictionList =  ["tt0062622", "tt0088247", "tt0063442", "tt0078748", "tt0083658", "tt0103064", "tt0133093", "tt0088763", "tt0090605", "tt0338013"];
    // const [listOfgenreMovies, setListOfgenreMovies] = useState([]);

    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setListOfMovies(data.Search);
    };

    // const genreSearch = async (genre) => {
    //     fetch(`http://www.omdbapi.com/?apikey=${API_URL}&s=${genre}&type=movie`)
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data.Search) {
    //                 // Extract IMDb IDs from the search results
    //                 const imdbIDs = data.Search.map(movie => movie.imdbID);
    //                 setListOfgenreMovies(imdbIDs);

    //                 console.log(imdbIDs);
    //             } else {
    //                 console.log('No movies found');
    //             }
    //         })
    //         .catch(error => console.error('Error fetching movies:', error));
    // }

    // useEffect(() => {
    //     // Fetch romance genre movies when component mounts
    //     genreSearch('Action, Adventure, Sci-Fi');
    // }, []);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            searchMovies(searchKeyword);
            navigate('/search');
        }
    };

    // useEffect(() => {
    //     searchMovies('batman');
    // }, []);

    const sortedMovies = listOfMovies?.length > 0 ? listOfMovies.sort((a, b) => a.Year.localeCompare(b.Year)) : [];



    const components = [
        {
            title: "Alert Dialog",
            href: "/docs/primitives/alert-dialog",
            description: "Action and adventure"
        },
        {
            title: "Alert Dialog",
            href: "/docs/primitives/alert-dialog",
            description: "Anime"
        },
        {
            title: "Alert Dialog",
            href: "/docs/primitives/alert-dialog",
            description: "Comedy"
        },
        {
            title: "Hover Card",
            href: "/docs/primitives/hover-card",
            description: "Documentary"
        },
        {
            title: "Progress",
            href: "/docs/primitives/progress",
            description: "Fantasy"
        },
        {
            title: "Scroll-area",
            href: "/docs/primitives/scroll-area",
            description: "Horror"
        },
        {
            title: "Tabs",
            href: "/docs/primitives/tabs",
            description: "Kids"
        },
        {
            title: "Tooltip",
            href: "/docs/primitives/tooltip",
            description: "Mystery and thrillers"
        },
        {
            title: "Alert Dialog",
            href: "/docs/primitives/alert-dialog",
            description: "Romance"
        },
        {
            title: "Alert Dialog",
            href: "/docs/primitives/alert-dialog",
            description: "Science fiction"
        },
    ];


    const ComponentList = () => {
        return (
            <div>
                <ul className="grid w-[10px] gap- p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black ">
                    {components.map((component, index) => (
                        <li
                            key={index}
                            className="grid grid-cols-2 p-10 w-full inline-flex h-9 w-max items-center justify-center rounded-md bg-background bg-transparent px-4 py-2 text-xl font-medium transition-colors mb-4 "
                        >
                            <a
                                className="border-spacing-2 text-customColor rounded-md hover:bg-slate-800 p-3"
                                onClick={() => {
                                    navigate(`/${component.description}`);
                                }}
                            >
                                {component.description}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };




    // Conditionally render the header based on the current route
    const renderHeader = () => {
        if (location.pathname === '/login') {
            return null; // Don't render the header on the login page
        } else {
            return (
                <header className={`fixed top-0 left-0 w-full bg-black text-white p-4 flex justify-between items-center z-50 transition-all duration-300 ${isScrolled ? 'bg-opacity-100 shadow-lg' : ''}`}>
                    <NavigationMenu>
                        <NavigationMenuList className="justify-items-stretch flex-column">
                            <NavigationMenuItem className="flex items-center justify-between">
                                {/* <NavigationMenuTrigger>Home</NavigationMenuTrigger> */}
                                <NavigationMenuItem>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => { navigate('/'); }}>
                                        Home
                                    </NavigationMenuLink>

                                </NavigationMenuItem>
                                <NavigationMenuItem><NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                                    <NavigationMenuContent>

                                        {/* {components.map((component) => (
              <ListItem 
                key={component.title}
                title={component.title}
                href={component.href}
              >
                {component.description}
              </ListItem>
            ))} */}
                                        <ComponentList />

                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => { navigate('/Movies'); }}>
                                    Movies
                                </NavigationMenuLink>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => { navigate('/TV Shows'); }}>
                                    TV Shows
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="img bg-center bg-no-repeat w-56 flex mr-auto translate-x-10">
                        <img src="titlecrop.png" alt="Logo" />
                    </div>
                    <div className="relative rounded-full overflow-hidden bg-slate-900 shadow-xl w-1/4 mr-auto ml-auto">
                        <input
                            type="text"
                            name="text"
                            placeholder="Search a movie"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            onKeyDown={handleKeyDown}
                            to="/search"
                            className="input bg-transparent pl-6 pr-10 py-5 w-full font-sans text-lg font-semibold"
                        />
                        <div className="absolute right-2 top-[0.4em]">
                            <button className="w-14 h-14 rounded-full bg-black-500 group shadow-xl flex items-center justify-center relative overflow-hidden" onClick={() => { navigate('/search'); searchMovies(searchKeyword); }}>
                                <div className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-white bg-opacity-10 duration-1000"></div>
                                <div className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black bg-opacity-20 group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"></div>
                                <MagnifyingGlassIcon className="w-8 h-8 text-white" />
                            </button>
                        </div>

                    </div>

                    <div>
                        <Link to="/login">
                            <img src="user2.svg" className="img w-16"></img>
                            <Button>Login</Button>
                        </Link>
                    </div>
                </header>
            );
        }
    };

    return (

        <div>
            {renderHeader()}
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={
                    <div className="app bg-cover pt-20 bg-black bg-no-repeat overflow-y-auto overflow-x-hidden">
                        <div className="carousel ml-12 mt-32">
                            <CarouselPlugin className="ml-64" />
                        </div>
                        {/* trending */}
                        <div className=" overflow-x-hidden">
                            <p className="text-4xl mt-36 mb-8 font-bold  text-slate-200 ml-8">Trending Right Now !</p>
                            <div className="overflow-x-auto  overflow-y-hidden flex flex-nowrap  ml-3 mr-3  bg-black gap-7 " style={{ scrollbars: 'none' }}>
                                {trendingList.map((imdbID) => (
                                    <div className="w-64"> {/* Adjust the width as needed */}
                                        <MovieCard key={imdbID} movie={{ imdbID }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* romance */}
                        <p className="text-4xl mt-36 mb-8 font-bold  text-slate-200 ml-8">Romance movies</p>
                        <div className="overflow-x-auto overflow-y-hidden flex flex-nowrap  ml-3 mr-3  bg-black gap-7">
                            {romgenreList.map((imdbID) => (
                                <div className="w-64"> {/* Adjust the width as needed */}
                                    <MovieCard key={imdbID} movie={{ imdbID }} />
                                </div>
                            ))}
                        </div>

                        {/* action */}
                        <p className="text-4xl mt-36 mb-8 font-bold  text-slate-200 ml-8">Action movies</p>
                        <div className="overflow-x-auto overflow-y-hidden flex flex-nowrap  ml-3 mr-3  bg-black gap-7">
                            {actionList.map((imdbID) => (
                                <div className="w-64"> {/* Adjust the width as needed */}
                                    <MovieCard key={imdbID} movie={{ imdbID }} />
                                </div>
                            ))}
                        </div>

                        {/* comdey */}
                        <p className="text-4xl mt-36 mb-8 font-bold  text-slate-200 ml-8">Comedy movies</p>
                        <div className="overflow-x-auto overflow-y-hidden flex flex-nowrap  ml-3 mr-3   bg-black gap-7">
                            {comedyList.map((imdbID) => (
                                <div className="w-64"> {/* Adjust the width as needed */}
                                    <MovieCard key={imdbID} movie={{ imdbID }} />
                                </div>
                            ))}
                        </div>


                        {/* comedy */}
                        <p className="text-4xl mt-36 mb-8 font-bold  text-slate-200 ml-8">Horror movies</p>
                        <div className="overflow-x-auto overflow-y-hidden flex flex-nowrap  ml-3 mr-3  bg-black gap-7 ">
                            {horrorList.map((imdbID) => (
                                <div className="w-64"> {/* Adjust the width as needed */}
                                    <MovieCard key={imdbID} movie={{ imdbID }} />
                                </div>
                            ))}
                        </div>

                        <div className="  mt-20">
                            <Footer />
                        </div>


                    </div>
                } />
                <Route path="/search" element={
                    <div className="flex flex-wrap justify-center mt-56 bg-black gap-7">
                        {sortedMovies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                } />

                <Route path="/Movies" element={
                    <div className="flex flex-wrap justify-center mt-56 bg-black gap-7">
                    {movieList.map((imdbID) => (
                        
                            <MovieCard key={imdbID} movie={{ imdbID }} />
                      
                    ))}
                </div>
                } />


                <Route path="/TV Shows" element={
                    <div className="flex flex-wrap justify-center mt-56 bg-black gap-7">
                    {tvshowList.map((imdbID) => (
                        
                            <MovieCard key={imdbID} movie={{ imdbID }} />
                        
                    ))}
                </div>
                } />

                <Route path="/Action and adventure" element={
                    <div className="flex flex-wrap justify-center mt-56 bg-black gap-7">
                        {actionList.map((imdbID) => (
                                <MovieCard key={imdbID} movie={{ imdbID }} />
                         ))}
                    </div>
                } />

<Route path="/Comedy" element={
                    <div className="flex flex-wrap justify-center mt-56 bg-black gap-7">
                        {comedyList.map((imdbID) => (
                                <MovieCard key={imdbID} movie={{ imdbID }} />
                         ))}
                    </div>
                } />


<Route path="/Romance" element={
                    <div className="flex flex-wrap justify-center mt-56 bg-black gap-7">
                        {romgenreList.map((imdbID) => (
                                <MovieCard key={imdbID} movie={{ imdbID }} />
                         ))}
                    </div>
                } />

<Route path="/Horror" element={
                    <div className="flex flex-wrap justify-center mt-56 bg-black gap-7">
                        {horrorList.map((imdbID) => (
                                <MovieCard key={imdbID} movie={{ imdbID }} />
                         ))}
                    </div>
                } />

<Route path="/Kids" element={
                    <div className="flex flex-wrap justify-center mt-56 bg-black gap-7">
                        {kidsList.map((imdbID) => (
                                <MovieCard key={imdbID} movie={{ imdbID }} />
                         ))}
                    </div>
                } />

<Route path="/Documentary" element={
                    <div className="flex flex-wrap justify-center mt-56 bg-black gap-7">
                        {documentaryList.map((imdbID) => (
                                <MovieCard key={imdbID} movie={{ imdbID }} />
                         ))}
                    </div>
                } />

<Route path="/Fantasy" element={
                    <div className="flex flex-wrap justify-center mt-56 bg-black gap-7">
                        {fantasyList.map((imdbID) => (
                                <MovieCard key={imdbID} movie={{ imdbID }} />
                         ))}
                    </div>
                } />

<Route path="/Science fiction" element={
                    <div className="flex flex-wrap justify-center mt-56 bg-black gap-7">
                        {sciencefictionList.map((imdbID) => (
                                <MovieCard key={imdbID} movie={{ imdbID }} />
                         ))}
                    </div>
                } />

<Route path="/Mystery and thrillers" element={
                    <div className="flex flex-wrap justify-center mt-56 bg-black gap-7">
                        {mysterythrillerList.map((imdbID) => (
                                <MovieCard key={imdbID} movie={{ imdbID }} />
                         ))}
                    </div>
                } />

<Route path="/Anime" element={
                    <div className="flex flex-wrap justify-center mt-56 bg-black gap-7">
                        {animeList.map((imdbID) => (
                                <MovieCard key={imdbID} movie={{ imdbID }} />
                         ))}
                    </div>
                } />





            </Routes>

        </div>

    );
};


const AppWithRouter = () => (
    <Router>
        <App />
    </Router>
);

export default AppWithRouter;






