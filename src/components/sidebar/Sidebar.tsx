// Sidebar.js

import Link from "next/link";
import React, { useState, useEffect, ReactNode } from "react";

const Sidebar = ({ data }: { data: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Close sidebar automatically on low-end devices
      if (window.innerWidth < 640) {
        setIsOpen(false);
      }
    };

    // Listen for window resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="block ">
        {/* Hamburger Menu */}
        <div className="block sm:hidden ">
          <button
            onClick={toggleSidebar}
            className="fixed z-50 top-0 left-0 p-4 focus:outline-none sm: mt-14"
          >
            <svg
              className="w-8 h-8 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Sidebar */}
        <aside
          id="logo-sidebar"
          className={`mt-5 fixed top-0 left-0 z-40 lg:w-64 md:w-64 h-screen pt-20 bg-black transition-transform ${
            isOpen ? "" : "-translate-x-full"
          } border-r border-gray-200 sm:translate-x-0  sm:w-0`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="ms-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Pro
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
