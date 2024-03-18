"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function BecameMember() {
  const [checkApproval, setCheckApproval] = useState<any>();
  const [loginUser, setLoginUser] = useState();

  useEffect(() => {

  }, [loginUser, checkApproval]);

  const myExtension = (url: string) => {
    location.href = url;
  };

  // if (loading) {
  //   return <Spinner />;
  // }
  const state = useSelector((state: any) => state?.sidebar?.payload);
  console.log(state, "facebook");

  return (
    <>
      <div className={`${state ? "w-screen " : ""} overflow-hidden mt-10`}>
        <div className="m-10 ">
          <div className="flex justify-center ">
            <div className="p-4 w-full">
              <div className="text-center">
                <h3 className="text-3xl mb-2">Free Version Extension</h3>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => myExtension("/extension/Free.zip")}
                >
                  Download Chrome extension
                </button>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="hidden md:block">
                <div className="h-full border-l border-gray-300 absolute top-0"></div>
              </div>
            </div>
            <div className="py-4 pr-4 flex justify-center items-center w-full">
              <div className="text-center">
                <h3 className="text-3xl mb-2">Paid Version Extension</h3>
                {checkApproval ? (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() =>
                      myExtension("/extension/Paid8523147fasdfasdf.zip")
                    }
                  >
                    Download Chrome extension
                  </button>
                ) : (
                  <div className="inline-block">
                    <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 00-1 1v4.07l-1.12-.67a1 1 0 10-1.02 1.72l2 1.2a1 1 0 001 0l2-1.2a1 1 0 00-.5-1.92L11 11.07V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      &nbsp; Download Chrome extension
                    </button>
                    <div className="text-sm mt-2">
                      This option will be available when you become a member
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BecameMember;
