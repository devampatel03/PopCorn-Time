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
import LoginPage from "./LoginPage";
import Upcoming_card from "./components/ui/upcoming_movies";
import { hover } from "@testing-library/user-event/dist/hover";

const API_URL = 'http://www.omdbapi.com?apikey=13a38685';

export function CarouselPlugin() {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
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
    const trendingList= ["tt2194499", "tt10872600", "tt10838180", "tt9376612", "tt9243804", "tt11095836", "tt5783956", "tt3811906", "tt1517451", "tt3501632"];
    const actionList= ["tt2381249", "tt2802144", "tt2515034", "tt1641841", "tt2199571", "tt2493486", "tt3397884"];
    const comedyList= ["tt11095836", "tt0448115", "tt5783956", "tt2704998", "tt2283362", "tt3501632", "tt6751668", "tt0118799", "tt6966692", "tt0120382"];
    const horrorList= ["tt8332922", "tt0081505", "tt0993840", "tt0185937", "tt7784604", "tt1029234", "tt3811906", "tt0167404"];

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
            <div className="">

                <ul className="grid w-[10px] gap- p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black ">
                    {components.map((component, index) => (
                        <li key={index} className="grid grid-cols-2 p-10 w-full inline-flex h-9 w-max items-center justify-center rounded-md bg-background bg-transparent px-4 py-2 text-xl font-medium transition-colors mb-4 ">
                            <a href={component.href} className="border-spacing-2 text-customColor   rounded-md hover:bg-slate-800 p-3 ">{component.description}</a>
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

                                <NavigationMenuItem><NavigationMenuLink className={navigationMenuTriggerStyle() + 'focus:bg-white'}>Movies</NavigationMenuLink></NavigationMenuItem>
                                <NavigationMenuItem><NavigationMenuLink className={navigationMenuTriggerStyle() + 'focus:bg-customColor'}>TV Shows</NavigationMenuLink></NavigationMenuItem>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="img bg-center bg-no-repeat w-56 flex mr-auto">
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
                                <div className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-white bg-opacity-50 duration-1000"></div>
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
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={
                    <div className="app bg-cover pt-20 bg-black bg-no-repeat overflow-y-auto overflow-x-hidden">
                        <div className="carousel ml-12 mt-32">
                            <CarouselPlugin className="ml-64" />
                        </div>
                        {/* trending */}
                        <div className=" overflow-x-hidden">
                        <p className="text-4xl mt-36 mb-8 font-bold  text-slate-200 ml-8">Trending Right Now !</p>
                        <div className="overflow-x-auto  overflow-y-hidden flex flex-nowrap  ml-3 mr-3  bg-black gap-7" style={{ scrollbars: 'none' }}>
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
                        <div className="overflow-x-auto overflow-y-hidden flex flex-nowrap  ml-3 mr-3  bg-black gap-7">
                            {comedyList.map((imdbID) => (
                                <div className="w-64"> {/* Adjust the width as needed */}
                                    <MovieCard key={imdbID} movie={{ imdbID }} />
                                </div>
                            ))}
                        </div>


                        {/* comdey */}
                        <p className="text-4xl mt-36 mb-8 font-bold  text-slate-200 ml-8">Horror movies</p>
                        <div className="overflow-x-auto overflow-y-hidden flex flex-nowrap  ml-3 mr-3  bg-black gap-7">
                            {horrorList.map((imdbID) => (
                                <div className="w-64"> {/* Adjust the width as needed */}
                                    <MovieCard key={imdbID} movie={{ imdbID }} />
                                </div>
                            ))}
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






