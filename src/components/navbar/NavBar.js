"use client";
import "./Navbar.scss";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "/public/assets/tntlogo.svg";
import { getServices } from "@/data/api/Api";
import { Button } from "flowbite-react";

const NavBar = () => {
  const [selectedUrl, setSelectedUrl] = useState("");
  const [services, setServices] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Added state to control mobile menu
  const pathname = usePathname();

  const trendingCourses = [
    { name: "Courses", url: `/courses` },  
    ...services.map((item) => {
      return { name: item.training.name, url: `/services/${item.id}` };
    })
  ];

  const getAllServices = async () => {
    const allServices = await getServices();
    setServices(allServices);
  };

  useEffect(() => {
    getAllServices();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Home", url: "/", routerName: "home" },
    {
      name: "IT Services",
      url: "/#",
      routerName: "it-services",
      dropdown: true,
      dropdownItems: trendingCourses,
    },
    { name: "Blogs", url: "/blogs", routerName: "blogs" },
    { name: "Trainings", url: "/upcoming-trainings", routerName: "trainings" },
    { name: "About Us", url: "/about-us", routerName: "about" },
    { name: "Contact Us", url: "/contact-us", routerName: "contact" },
  ];

  const desktopLinkClassName =
    "block py-2 px-3 text-gray-100 rounded hover:bg-gray-100  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white ";

  const renderToogleBtn = () => {
    return (
      <button
        id="toggleMenuBtn"
        data-collapse-toggle="navbar-multi-level"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
        aria-controls="navbar-multi-level"
        aria-expanded="false"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    );
  };

  return (
    <nav
      className={`page-navigation text-black border-gray-200 sticky w-full top-0 z-50 transition-all duration-300  ${
        isScrolled ? "bg-gray-100 shadow-lg" : "bg-grey-100"
      }`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" onClick={() => { setSelectedUrl("/"); setIsMobileMenuOpen(false); }}>
          <Image src={Logo.src} alt="TNT Logo" width={170} height={170} />
        </Link>
        {renderToogleBtn()}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full lg:block lg:w-auto`}
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-2 md:p-0 border border-gray-100 rounded-lg md:space-x-8 lg:flex-row md:mt-0 md:border-0">
            {links.map((item, index) => (
              <li key={index} className="relative group text-black">
                {item.dropdown ? (
                  <>
                    <Link
                      href={item.url}
                      onClick={() => {
                        setSelectedUrl(item.url);
                        setIsMobileMenuOpen(false); // Close menu on link click
                      }}
                      className={`${desktopLinkClassName} ${
                        selectedUrl === item.url ? "active" : ""
                      } flex items-center text-black`}
                    >
                      {item.name}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>
                    <ul className="absolute left-0 mt-1 w-[20rem] bg-zinc-300 shadow-md py-2 z-10 hidden group-hover:block">
                      {item.dropdownItems.map((dropdownItem, i) => (
                        <li key={i}>
                          <Link
                            href={dropdownItem.url}
                            onClick={() => {
                              setSelectedUrl(dropdownItem.url);
                              setIsMobileMenuOpen(false); // Close menu on dropdown item click
                            }}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                          >
                            {dropdownItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.url}
                    onClick={() => {
                      setSelectedUrl(item.url);
                      setIsMobileMenuOpen(false); // Close menu on link click
                    }}
                    className={`${desktopLinkClassName} ${
                      selectedUrl === item.url ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li>


<Button

  className=" !text-white "
>
  <Link
    href="/enroll-now"
    onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu
    className="!text-white no-underline"
  >
    Enroll Now
  </Link>
</Button>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
