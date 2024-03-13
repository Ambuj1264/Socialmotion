"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const handler =()=>{
    router.push("/")
  }
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="block">
        <div>
          {" "}
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
        </div>

        <div className="relative">
          <Button
            color="primary"
            onClick={() =>handler()}
            className="cursor-pointer"
            variant="shadow"
          >
            <svg
              aria-hidden="true"
              fill="none"
              focusable="false"
              height="1em"
              role="presentation"
              viewBox="0 0 24 24"
              width="1em"
              className="group-data-[hover=true]:translate-x-0.5 outline-none transition-transform"
            >
              <path
                d="M7.16504 17.0815L0.083374 9.99984L7.16504 2.91818"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></path>
              <path
                d="M19.9167 10H0.281738"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></path>
            </svg>
            &nbsp; Go to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
