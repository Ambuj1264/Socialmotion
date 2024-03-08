import { Button, Link } from "@nextui-org/react";
import { BANNER_HEADING, BANNER_SUB_HEADING } from "@/utility/constant";
export default function Home() {
  return (
    <div className="">
     
      <main className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-12">
          <h1 className="text-4xl font-extrabold text-center  sm:text-5xl">
           {BANNER_HEADING}
          </h1>
          <p className="mt-2 text-xl text-center text-gray-600">
          {BANNER_SUB_HEADING}
          </p>
        </div>

        <div className="relative flex items-center justify-center w-full max-w-lg">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Button
              as={Link}
              color="primary"
              href="/menu"
              className="cursor-pointer"
               variant="shadow"
            >
              Get Started 
              <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" className="group-data-[hover=true]:translate-x-0.5 outline-none transition-transform" ><path d="M16.835 6.91821L23.9166 13.9999L16.835 21.0815" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M4.08325 14H23.7183" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></path></svg>
            </Button>
          </div>
        </div>
      </main>

     
    </div>
  );
}
