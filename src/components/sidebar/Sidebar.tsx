import { FacebookData } from "@/types/interface";
import Link from "next/link";
import React from "react";

const Sidebar = ({ data }: { data: FacebookData[] }) => {
  return (
    <div className="bg-black min-h-full w-64  left-0 overflow-y-auto z-10 border-r border-white">
      <div className="px-4 py-6">
        <ul className="mt-8">
          {data?.map((value: FacebookData, index: number) => (
            <li key={index} className="mb-4">
              <Link href="#" passHref>
                <Link href="#" className="text-gray-300 hover:text-white block hover:bg-slate-600 p-2 rounded">
                  {value.name}
                </Link>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
