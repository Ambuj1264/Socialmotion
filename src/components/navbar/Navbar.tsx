"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { BRAND_NAME } from "@/utility/constant";
import { ThemeSwitcher } from "../themes/ThemeSwitcher";

export default function FullNavbar() {
  const [isMenuOpen] = useState(false);

  const menuItems = [
    {name: "Home", href:"/"},
    { name: "Your Automation", href:"/dashboard"},
    {name:  "Contact Us", href:"/contact"},
   ];
  return (
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
        <NavbarMenuToggle
     aria-label={isMenuOpen ? "Close menu" : "Open menu"}
     className="sm:hidden"
   />
      <NavbarBrand>
        <Link color="foreground" href="/">
          <AcmeLogo />
          <p className="font-bold text-inherit">{BRAND_NAME}</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className="hover:text-primary">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/dashboard" className="hover:text-primary">
            Your Automation
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact" className="hover:text-primary" >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="/login" variant="flat">
            Login | Sign Up
          </Button>
          &nbsp; <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 1 ? "primary" : "foreground"
              }
              className="w-full"
              href={item?.href}
              size="lg"
            >
              {item?.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
