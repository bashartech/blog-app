
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconArticle,
  IconTools,
  IconAddressBook,
  IconMessage,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export function Section1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
      id: "home",
    },
    {
      title: "Blogs",
      icon: <IconArticle className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#blogs",
      id: "blogs",
    },
    {
      title: "Testimonials",
      icon: <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#testimonials",
      id: "testimonials",
    },
    {
      title: "Services",
      icon: <IconTools className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#services",
      id: "services",
    },
    {
      title: "Contact",
      icon: <IconMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#footer",
      id: "footer",
    },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="home" className="w-screen md:h-screen">
      <div className="md:h-screen w-full dark:bg-black bg-black dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-start justify-start dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex items-center justify-between md:justify-center h-32 w-full">
          <h1 className="text-white text-xl md:text-2xl font-bold ml-5 md:ml-14 z-20">
            Bashar Blogs
          </h1>
          <FloatingDock
            mobileClassName="translate-y-20 hidden"
            items={links}
          />
          <div className="flex mr-6 justify-center items-center">
            <Link href="#blogs" onClick={(e) => handleSmoothScroll(e, "#blogs")}>
              <Button className="w-[100px] md:w-[130px] font-bold bg-white relative z-20 text-neutral-700 h-[35px] md:h-[35px] rounded-lg mr-2 md:mr-10 hover:text-white">
                Blogs
              </Button>
            </Link>

            <button
              className="md:hidden z-50 text-3xl h-10 w-10 rounded-full bg-neutral-800 dark:bg-neutral-800 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <IconX className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
              ) : (
                <IconMenu2 className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`fixed right-0 top-0 h-full w-64 bg-neutral-900 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="p-6">
              <ul className="text-2xl flex flex-col gap-10">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-white hover:text-gray-300 transition-colors duration-200"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-14 flex flex-col gap-4">
                <Link href="#blogs" onClick={(e) => handleSmoothScroll(e, "#blogs")}>
                  <Button className="w-full font-bold bg-white relative z-20 text-neutral-700 h-[35px] rounded-lg hover:text-white">
                    Blogs
                  </Button>
                </Link>
                <Link href="#footer" onClick={(e) => handleSmoothScroll(e, "#footer")}>
                  <Button className="w-full font-bold bg-transparent border border-white text-white relative z-20 h-[35px] rounded-lg hover:bg-white hover:text-neutral-700">
                    Contact
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>

        <div className="md:h-[80vh] flex justify-center items-center">
          <div className="w-screen lg:flex">
            <div className="left ml-5 md:ml-12 lg:w-1/2 flex flex-col gap-5 justify-center">
              <div className="flex flex-col gap-5">
                <p className="text-4xl lg:text-6xl text-white font-bold relative z-20 bg-clip-text text-transparent pt-8 lg:w-[75%]">
                  Explore the World of Ideas
                </p>
                <p className="text-white lg:w-[70%] md:text-xl">
                  Read, learn, and grow with our collection of blogs spanning
                  countless topics, curated to captivate and inform.
                </p>
                <div className="btn font-bold text-lg flex gap-5 mt-5 h-16">
                  <Link href="#blogs" onClick={(e) => handleSmoothScroll(e, "#blogs")}>
                    <Button className="w-[150px] md:w-[200px] font-bold bg-white relative z-20 text-neutral-700 h-[55px] rounded-xl">
                      Explore Blogs
                    </Button>
                  </Link>
                  <Link href="#footer" onClick={(e) => handleSmoothScroll(e, "#footer")}>
                    <Button className="w-[150px] md:w-[200px] font-bold h-[55px] rounded-xl border-[1px]">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="right md:gap-5 flex flex-col justify-end md:ml-5 lg:ml-0 md:mt-10 lg:mt-0 lg:w-1/2 lg:mr-[17px]">
              <div className="">
                <CardSpotlight className="md:h-52 md:w-[97%] w-[90%] m-5 ml-5 md:ml-10 md:m-0">
                  <p className="text-xl font-bold relative z-20 mt-1 text-white">
                    Most Popular Blogs
                  </p>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                    Blogs related to Trending Topics in the world and explore
                    the advancement and development of the world in the field of
                    artificial intelligence etc
                  </p>
                </CardSpotlight>
              </div>
              <div className="md:w-full flex flex-col md:flex-row justify-center items-center md:flex md:pr-5 md:gap-3 gap-3">
                <CardSpotlight className="h-40 md:w-30% w-[90%]">
                  <p className="text-xl font-bold relative z-20 md:mt-2 text-white">
                    Trending Topics
                  </p>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                    Explore the blogs of trending topics in the world and get
                    improve knowledge
                  </p>
                </CardSpotlight>
                <CardSpotlight className="h-40 md:w-30% mb-10 md:mb-0 w-[90%]">
                  <p className="text-xl font-bold relative z-20 md:mt-1 text-white">
                    News Blogs
                  </p>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                    Most viewed and recent news in the world and country
                  </p>
                </CardSpotlight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
