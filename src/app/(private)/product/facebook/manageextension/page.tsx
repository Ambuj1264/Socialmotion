// "use client";
// import React from "react";
// import { useSelector } from "react-redux";

// const ManageExtension = () => {
//   const state = useSelector((state: any) => state?.sidebar?.payload);
//   console.log(state, "facebook");

//   return (
//     <>
//       <div
//         className={`${state ? "w-screen " : ""} overflow-hidden mt-10`}
//       ></div>
//     </>
//   );
// };

// export default ManageExtension;

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FacebookTool } from "@/utility/constant";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={FacebookTool} />
    </div>
  );
}

