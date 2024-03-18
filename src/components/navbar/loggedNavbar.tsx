"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { BRAND_NAME, sidebarPathNames } from "@/utility/constant";
import { ThemeSwitcher } from "../themes/ThemeSwitcher";
import { signOut } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { sidebar } from "@/redux/Action";
export default function LoggedNavBar({ data }: any) {
  const [pathState, setPathState] = useState<boolean>(false);
  const state :any= useSelector((state) => state);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const sidebarHandler=()=>{
    dispatch(sidebar(!(state?.sidebar?.payload)))
  }
  useEffect(() => {
    setPathState(sidebarPathNames.includes(pathname));
  }, [state?.sidebar?.payload,pathname]);


  const logoutHandler = (e: any) => {
    signOut();
  };
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <>
       <Navbar
      isBordered
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      {pathState ? (
  <span className=" w-10 h-10 flex flex-col justify-center items-center cursor-pointer transition-all duration-300 transform hover:scale-110" onClick={sidebarHandler}>
    <span className="w-6 h-0.5 bg-gray-800 mb-1" />
    <span className="w-6 h-0.5 bg-gray-800 mb-1" />
    <span className="w-6 h-0.5 bg-gray-800" />
  </span>
) : null}

 
    
        <NavbarBrand>
          <div className="flex flex-col justify-center items-center">
            <Link color="foreground" href="/">
              <AcmeLogo />
              <p className="font-bold text-inherit">{BRAND_NAME}</p>
            </Link>
          </div>
        </NavbarBrand>
     
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className="hover:text-primary">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/dashboard" color="foreground" className="hover:text-primary">
            Your Automation
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact" className="hover:text-primary">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link  href="/buy" color="foreground" className="hover:text-primary">
            Buy Products
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={
                data?.image
                  ? data?.image
                  : `https://i.pravatar.cc/150?u=a042581f4e29026704d`
              }
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">
                {data?.name ? data?.name : "john doe"}
              </p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={logoutHandler}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        &nbsp; <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
    </>
  );
}
