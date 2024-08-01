"use client";
import Loader from "@/components/Loader/Loader";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { Suspense, useCallback, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaDownload } from "react-icons/fa6";

function BecameMember() {
  const [checkApproval, setCheckApproval] = useState<any>();

  const myExtension = async (url: string) => {
    try {
      await axios.patch("/api/extensionDownloadCountUpdate");
      location.href = url;
    } catch (error) {}
  };
  const state = useSelector((state: any) => state?.sidebar?.payload);
  const [paymentStatusCheck, setPaymentStatusCheck] = useState(false);
  // const userData: any = getLocalStorageData("user");
  // const userID = userData?._id;
  const { data: session }: { data: any } = useSession();
  const checkPayment = useCallback(async () => {
    try {
      const response = await axios.post("/api/checkApproval", {
        _id: session?.user?._id,
      });
      console.log(response?.data, "paymentStatusCheck");
      setPaymentStatusCheck(response?.data?.data?.approved);
    } catch (error: any) {
      console.log(error.message);
    }
  }, [session?.user?._id]);
  useLayoutEffect(() => {
    const fetchData = async () => {
      await checkPayment();
    };
    fetchData();
  }, [session?.user?._id, checkPayment, paymentStatusCheck]);
  console.log(paymentStatusCheck, "paymentStatusCheck");
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className={`${state ? "w-screen " : ""} overflow-hidden mt-10`}>
          <div className=" my-9">
            <div className="my-8 flex flex-col justify-center items-center ">
              <div className="p-5  border border-grey-450 w-96 rounded-md">
                <h2 className="text-center">Facebook Extension</h2>
              </div>
            </div>
          </div>
          <div className="m-10 ">
            <div className="flex justify-center ">
              {/* <div className="p-4 w-full">
              <div className="text-center">
                <h3 className="text-3xl mb-2">Free Version Extension</h3>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => myExtension("/extensions/demosadkhfsakdfhask.zip")}
                >
                  Download Chrome extension
                </button>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="hidden md:block">
                <div className="h-full border-l border-gray-300 absolute top-0"></div>
              </div>
            </div> */}
              <div className="py-4 pr-4 flex justify-center items-center w-full">
                <div className="text-center">
                  {/* <h3 className="text-3xl mb-2">Paid Version Extension</h3> */}
                  <h3 className="text-3xl   mb-[60px]">
                    Pro Version Extension
                  </h3>
                  {/* add comment because free for the all chrome extension */}
                  {/* {paymentStatusCheck ? ( */}
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex"
                    onClick={() =>
                      myExtension(
                        "/extensions/pemiumxjlasjfdlasjfdoaslfjdasdfsfd.zip"
                      )
                    }
                  >
                    <FaDownload className="m-[3px]" /> &nbsp; Download Chrome
                    extension
                  </button>
                  {/* ) : ( */}
                  {/* <div className="inline-block">
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
                  </div> */}
                  {/* )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default BecameMember;
