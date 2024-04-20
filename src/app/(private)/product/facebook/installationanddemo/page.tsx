"use client";
import React, { useState, useEffect } from 'react';

const InstallationAndDemo = () => {
  const [iframeWidth, setIframeWidth] = useState(560); // Default width for larger screens

  useEffect(() => {
    const handleResize = () => {
      // Check if window is available (it's available only in the browser)
      if (typeof window !== 'undefined') {
        // Update iframe width based on window width
        setIframeWidth(window.innerWidth < 640 ? window.innerWidth * 0.93 : 560);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the initial width
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="my-8 flex flex-col justify-center items-center">
      <div className="p-5 border border-grey-600 w-96 rounded-md">
        <h2 className="text-center">
          Installation And Demo Video
        </h2>
      </div>

      <div className="flex justify-center items-center my-9">
        <iframe
          width={iframeWidth}
          height="315"
          src="https://www.youtube.com/embed/sTpdgeHnZYU?si=RoM7iHqcVy1NZyqO"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default InstallationAndDemo;
