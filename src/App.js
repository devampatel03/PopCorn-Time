import React, { useState, useEffect, useRef } from "react";
import MovieCard from "./components/ui/m_card";

import { BrowserRouter as Router, Route, Routes, Link, useLocation,useNavigate } from 'react-router-dom';


import { Button } from "./components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel";
import "./index.css"; // Assuming this file contains global styles

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';


import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator,ListItem, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport ,navigationMenuTriggerStyle } from "./components/ui/navigation-menu"
import LoginPage from "./LoginPage";
import Upcoming_card from "./components/ui/upcoming_movies";
import { hover } from "@testing-library/user-event/dist/hover";

const API_URL = 'http://www.omdbapi.com?apikey=13a38685';

export function CarouselPlugin() {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    const upcomingMovies = [1,2,3,4,5,6,7];

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
    const navigate = useNavigate();

    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setListOfMovies(data.Search);
  };

  const handleKeyDown = (event) => {
      if (event.key === "Enter") {
          searchMovies(searchKeyword);
          navigate('/search');
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
                <li key={index}  className="grid grid-cols-2 p-10 w-full inline-flex h-9 w-max items-center justify-center rounded-md bg-background bg-transparent px-4 py-2 text-xl font-medium transition-colors mb-4 ">
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
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => { navigate('/');}}>
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
                            <button className="w-14 h-14 rounded-full bg-black-500 group shadow-xl flex items-center justify-center relative overflow-hidden" onClick={() => { navigate('/search');searchMovies(searchKeyword);}}>
                                <div className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-white bg-opacity-50 duration-1000"></div>
                                <div className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black bg-opacity-20 group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"></div>
                                <MagnifyingGlassIcon className="w-8 h-8 text-white"  />
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
                <Route path="/search" element={
                  <div className="flex flex-wrap justify-center mt-56 bg-customColor2 gap-7">
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






