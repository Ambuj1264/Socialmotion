import React from "react";
import "./success.css"
import HomeButton from "../../../components/button/SuccessButton";

const SuccessPage = () => {

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <div className="content">
          <svg className="w-24 h-24 mx-auto">
            <circle
              fill="none"
              stroke="#68E534"
              strokeWidth="10"
              cx="50%"
              cy="50%"
              r="40"
              strokeLinecap="round"
              transform="rotate(-90 100 100)"
              className="circle"
            />
            <polyline
              fill="none"
              stroke="#68E534"
              points="18,57 46,76 82,38"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tick"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
          <p className="text-lg">Thank you for your payment.</p>
         <HomeButton />
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
