"use client";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import BuyNow from "./BuyNow";
import axios from "axios";
import Loader from "@/components/Loader/Loader";

const DemoVideoDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true); // Add loading state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/findtoolsdetails/${id}`);
        setData(result?.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="min-h-screen">
        <div className="my-8 flex flex-col justify-center items-center ">
          <div className="p-5  border border-grey-450 w-96 rounded-md">
            <h2 className="text-center">{data?.toolName}</h2>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-center lg:px-44 md:px-20 px-5">
            {" "}
            {data?.toolDetails}
          </p>
        </div>
        <div className="flex mt-8 flex-col justify-center items-center sm:w-full">
          <iframe
            width={window?.innerWidth < 640 ? "93%" : "560"} // Adjust the breakpoint as needed
            height="315"
            src={data?.videoLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex my-8 flex-col justify-center items-center ">
          <BuyNow />
        </div>
      </div>
    </>
  );
};

export default DemoVideoDetails;
