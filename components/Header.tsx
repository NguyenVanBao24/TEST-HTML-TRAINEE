"use client";
import Image from "next/image";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import HeaderItem from "./HeaderItem";
import icon from "@/utils/icon";
import Link from "next/link";

const { FaFacebookF, FaTwitter, FaSkype, FaLinkedin, FaAngleDown, FaBars } = icon;
const Header = () => {
  const pathname = usePathname();

  const routers = useMemo(
    () => [
      {
        label: "Home",
        href: "/",
        active: pathname === "/",
      },
      {
        label: "Pages",
        href: "/page",
        active: pathname === "page",
      },
      {
        label: "Features",
        href: "/feature",
        active: pathname === "feature",
      },
      {
        label: "Extentions",
        href: "/extention",
        active: pathname === "extention",
      },
      {
        label: "Tutorials",
        href: "/tutorial",
        active: pathname === "tutorial",
      },
      {
        label: "Contact us",
        href: "/contact-us",
        active: pathname === "contact-us",
      },
    ],
    [pathname]
  );

  return (
    <div
      className="w-full flex flex-col relative h-[700px] bg-cover bg-center bg-no-repeat items-start"
      style={{
        backgroundImage:
          "url(https://marketplace.canva.com/EAF0EYsYmsM/1/0/1600w/canva-dark-green-minimalist-illustrated-night-sky-city-landscape-desktop-wallpaper-TGFaNndAajw.jpg)",
      }}
    >
      <div className="flex w-full border-b-[1px] border-gray-300 justify-between">
        <div className={twMerge(`w-1/4 flex items-center justify-center py-4`)}>
          <Image
            src="https://www.slideserve.com/photo/1054873.jpeg"
            alt=""
            width={50}
            height={50}
            className="shadow-custom "
            id="custom-image"
          />
        </div>
        <div className="w-1/2 lg:flex justify-between text-white hidden ">
          {routers.map((item) => (
            <HeaderItem key={item.label} {...item} />
          ))}
        </div>
        <div className="w-1/4 lg:flex justify-start gap-4 items-center ml-4 hidden">
          <Link href="/">
            <FaFacebookF />
          </Link>
          <Link href="/">
            <FaTwitter />
          </Link>
          <Link href="/">
            <FaSkype />
          </Link>
          <Link href="/">
            <FaLinkedin />
          </Link>
        </div>
        <div className="flex items-center justify-center mr-4 lg:hidden">
          <div className="">
            <FaBars size={50} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
        <span className="text-[#f5f5f5] text-6xl font-semibold lg:text-9xl">CREATIVES</span>
        <span className="text-primary font-semibold text-xl lg:tracking-18px">
          POWER BY PSDFREEBIES.COM
        </span>
        <div className="mt-12 flex flex-col items-center justify-center gap-4">
          <span>Scroll down</span>
          <div className=" w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center">
            <FaAngleDown size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
