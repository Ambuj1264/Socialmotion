import HomeButton from "@/components/button/SuccessButton";
import React from "react";

const UnsuccessfulPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <div className="content">
          <svg
            className="w-24 h-24 mx-auto"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12" y2="16" />
          </svg>
        </div>
        <div className="pb-5">
          <h1 className="text-3xl font-bold mb-2">Payment Failed</h1>
          <p className="text-lg">There was an issue processing your payment.</p>
        </div>
        <HomeButton />
      </div>
    </div>
  );
};

export default UnsuccessfulPage;
