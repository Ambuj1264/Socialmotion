"use client";
import React, { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";
import Sidebar from "@/components/sidebar/Sidebar";

function ManageExtensions() {
  const [checkApproval, setCheckApproval] = useState<any>();
  const [loginUser, setLoginUser] = useState();

  useEffect(() => {
    // Your useEffect logic here
    // Uncomment and implement as needed
  }, [loginUser, checkApproval]);

  const myExtension = (url: string) => {
    location.href = url;
  };

  // if (loading) {
  //   return <Spinner />;
  // }

  return (
    <>
      <div className="flex min-h-screen w-70 justify-center  overflow-hidden">
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
                      myExtension(
                        "/extension/Paid8523147fasdfasdf.zip"
                      )
                    }
                  >
                    Download Chrome extension
                  </button>
                ) : (
                  <div className="inline-block">
                    <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed">
                      Download Chrome extension
                    </button>
                    <div className="text-sm text-gray-500 mt-2">
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

export default ManageExtensions;
