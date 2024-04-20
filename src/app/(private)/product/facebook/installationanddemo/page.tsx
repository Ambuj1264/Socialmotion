"use client"
import React from 'react';

const InstallationAndDemo = () => {
  return (
    <div className=" my-8 flex flex-col justify-center items-center">
    <div className="p-5  border border-grey-600 w-96 rounded-md">
      <h2 className="text-center">
        Installation And Demo Video
      </h2>
    </div>

    <div className="flex justify-center items-center my-9">
    <iframe
            width={window?.innerWidth < 640 ? "93%" : "560"} // Adjust the breakpoint as needed
            height="315"
            src={"https://www.youtube.com/embed/sTpdgeHnZYU?si=RoM7iHqcVy1NZyqO"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
    </div>
    </div>
  )
}

export default InstallationAndDemo