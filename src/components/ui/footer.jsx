import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import Logo from "../../assests/popcorn.png";
import FooterImg from "../../assests/footer-bg.webp";

const Footer = () => {
  const footerLinks = [
    "home",
    "live",
    "you must watch",
    "contact us",
    "FAQ",
    "Recent release",
    "term of services",
    "premium",
    "Top IMDB",
    "About us",
    "Privacy policy",
  ];

  return (
    <footer
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.075), rgba(0,0,0,0.075)), url(${FooterImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="dark:bg-black lg:py-16 sm:py-10 xs:py-8 py-[30px] w-full"
    >
      <div
        className={cn(
          
          `flex flex-col items-center lg:gap-14 md:gap-12 sm:gap-8 xs:gap-[30px] gap-6 w-max`
        )}
      >
        
        <ul className="grid grid-cols-3  items-center ml-28 translate-x-96   font-medium  text-lg text-gray-300 capitalize md:gap-x-16 md:gap-y-4 md:gap-4 sm:gap-2 xs:gap-[6px] gap-1">
          {footerLinks.map((title, index) => (
            <li key={index} className="text-center">
              <Link
                to="/"
                className="hover:text-primary transition-all duration-300 md:text-[17px] sm:text-[14.75px] xs:text-[12.75px] text-[12px] font-nunito hover:text-gray-500"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
