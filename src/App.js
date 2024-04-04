import React, { useState, useEffect, useRef } from "react";
import MovieCard from "./m_card";

import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Button } from "./components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel";
import "./index.css"; // Assuming this file contains global styles

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "./components/ui/navigation-menu"
import LoginPage from "./LoginPage";
import Upcoming_card from "./components/ui/upcoming_movies";

const API_URL = 'http://www.omdbapi.com?apikey=bc848061';

export function CarouselPlugin() {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    const upcomingMovies = ["tt0096895", "tt0372784","tt1877830"];

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
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
        setListOfMovies(data.Search);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            searchMovies(searchKeyword);
        }
    };

    useEffect(() => {
        searchMovies('batman');
    }, []);

    const sortedMovies = listOfMovies?.length > 0 ? listOfMovies.sort((a, b) => a.Year.localeCompare(b.Year)) : [];

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Conditionally render the header based on the current route
    const renderHeader = () => {
        if (location.pathname === '/login') {
            return null; // Don't render the header on the login page
        } else {
            return (
                <header className={`fixed top-0 left-0 w-full bg-black text-white p-4 flex justify-between items-center z-50 transition-all duration-300 ${isScrolled ? 'bg-opacity-100 shadow-lg' : ''}`}>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                                <NavigationMenuTrigger>Movies</NavigationMenuTrigger>
                                <NavigationMenuTrigger>Tv Shows</NavigationMenuTrigger>
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
                            className="input bg-transparent pl-6 pr-10 py-5 w-full font-sans text-lg font-semibold"
                        />
                        <div className="absolute right-2 top-[0.4em]">
                            <button className="w-14 h-14 rounded-full bg-black-500 group shadow-xl flex items-center justify-center relative overflow-hidden">
                                <div className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-white bg-opacity-50 duration-1000"></div>
                                <div className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black bg-opacity-20 group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"></div>
                                <MagnifyingGlassIcon className="w-8 h-8 text-white" onClick={() => searchMovies(searchKeyword)} />
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
                    <div className="app bg-cover pt-20 bg-customColor2 bg-no-repeat overflow-y-auto overflow-x-hidden">
                        <div className="carousel ml-12 mt-32">
                            <CarouselPlugin className="ml-64" />
                        </div>


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






