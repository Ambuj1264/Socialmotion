import { Button, Link } from "@nextui-org/react";
import { BANNER_HEADING, CompanyImages, CompanySlogan, SlickSettings, TestimonialDetails } from "@/utility/constant";

import { SparklesPreview } from "@/components/ui/SparklesPreview";
import { TypewriterEffectDemo } from "@/components/ui/TypewriterEffectDemo";
import Image from "next/image";
import BackgroundGradientDemo from "@/components/ui/GlowingCard";

export default async function Home() {
  return (
    <>
      <div>
        <main className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8" data-aos="fade-down">
          <div className="flex flex-col items-center justify-center mb-12">
            <h1 className="text-4xl font-extrabold text-center  sm:text-5xl">{BANNER_HEADING}</h1>
            <p className="mt-2 text-xl text-center text-gray-600">
              <TypewriterEffectDemo />
            </p>
          </div>

          <div className="relative flex items-center justify-center w-full max-w-lg">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Button as={Link} color="primary" href="/dashboard" className="cursor-pointer" variant="shadow">
                Get Started
                <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" className="group-data-[hover=true]:translate-x-0.5 outline-none transition-transform">
                  <path d="M16.835 6.91821L23.9166 13.9999L16.835 21.0815" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"></path>
                  <path d="M4.08325 14H23.7183" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"></path>
                </svg>
              </Button>
            </div>
          </div>
        </main>
        <div className="flex flex-col justify-center mb-12">
          <h5 className="text-xl font-extrabold text-center sm:text-3xl">{CompanySlogan}</h5>
          <div className="flex  justify-evenly mt-5 flex-wrap">
            {CompanyImages.map((value, index) => {
              return <Image key={index} src={value} alt="Company image" className="rounded-xl border" width={"177"} height={"87"} data-aos="zoom-in" />;
            })}
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly mt-28 w-full mb-28">
          <div className="  flex flex-col items-center justify-center pt-4 " style={{ width: "500px" }} data-aos="fade-right">
            <h5 className="text-md text-center text-primary-400 font-bold" color="primary">
              YOUR SALES, ONE CLICK AWAY
            </h5>
            <p className="text-center text-4xl font-bold break-normal py-3">See how your business is performing at all times</p>
            <p className="text-center py-3 px-10">
              How about saving hundreds of leads with a simple click?
              <span className="font-bold"> Social Motion simplifies your sales, removing manual tasks while boosting your productivity.</span>
            </p>
          </div>
          <div className=" flex" data-aos="fade-left">
            <div>
              <Image src="https://assets-global.website-files.com/64e7a82a958b23a5a1d6babd/65b2cac11f1294265787bee6_pexels-cowomen-2041627-p-800.jpg" className="rounded-xl object-contain" alt="services" width={594} height={393} />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flex flex-col items-center justify-center">
        <div className="p-5  border border-grey-600 w-96 rounded-md">
          <h2 className="text-center">Testimonial</h2>
        </div>
       
          <SparklesPreview />
        </div>
      </div>
    </>
  );
}
