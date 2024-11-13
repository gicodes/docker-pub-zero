"use client"
import React, { useState, useEffect } from "react";

// This Component is designed to be authentic, basic and somewhat vanilla.
// However, most of the styling here is from a parent scss
// The rest is the global/default tailwind css.
const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/passion-led-us-here-src-unsplash-dest-proxy-connect.avif",
    "/web-connect-abstract-src-unsplash-dest-proxy-connect.avif",
    "/connect-platform-src-unsplash-dest-proxy-connect.avif",
    "/two-heavy-chains-connect-origin-unsplash-dest-proxyConnect.avif",    
    "/connecting-to-beauty-src-unsplash-dest-proxy-connect.avif",
  ];

  // useEffect to increment the index and update the image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-auto md:h-96 lg:h-auto img-slider">
      <img
        className="img object-cover w-full h-full"
        src={images[index]}
        alt={
          images[index]
            ? `connect to services around you`
            : `index media unavailable`
        }
      />
    </div>
  );
}

export default ImageSlider;