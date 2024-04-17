import React from "react";
import YouTube from 'react-youtube';

const Trailer = ({ showTrailer, isHovered, setShowTrailer, trailerId }) => {
  return (
    showTrailer && isHovered && (
      <div className="max-w-screen-lg mx-auto   ">
        <button
          onClick={() => setShowTrailer(false)}
          className="absolute top-4 right-4 text-white text-xl cursor-pointer"
        >
          Close
        </button>
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
          <YouTube videoId={trailerId} className="absolute w-full h-full" />
        </div>
      </div>
    )
  );
};

export default Trailer;
