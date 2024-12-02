// "use client";
// import Link from "next/link";
// import React from "react";
// import { FloatingDock } from "@/components/ui/floating-dock";
// import {
//   IconHome,
//   IconArticle,
//   IconTools,
//   IconAddressBook,
//   IconMessage,
// } from "@tabler/icons-react";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { CardSpotlight } from "@/components/ui/card-spotlight";
// import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
//   SheetClose,
// } from "@/components/ui/sheet";

// export function Section1() {
//   const links = [
//     {
//       title: "Home",
//       icon: (
//         <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//       id: "home",
//     },

//     {
//       title: "Blogs",
//       icon: (
//         <IconArticle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#blogs",
//       id: "blogs",
//     },
//     {
//       title: "Testimonials",
//       icon: (
//         <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#testimonials",
//       id: "testimonials",
//     },

//     {
//       title: "Services",
//       icon: (
//         <IconTools className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#blogs",
//       id: "blogs",
//     },

//     {
//       title: "Contact",
//       icon: (
//         <IconMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#footer",
//       id: "footer",
//     },
//   ];

//   const handleSmoothScroll = (e: React.MouseEvent, id: string) => {
//     e.preventDefault();
//     const element = document.querySelector(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div id="#" className="w-screen  md:h-screen">
//       <div className="md:h-screen  w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative ">
//         {/* Radial gradient for the container to give a faded look */}
//         <div className="absolute pointer-events-none inset-0 flex items-start justify-start dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
//         <div className="flex items-center justify-between   md:justify-center h-32 w-full ">
//           <h1 className="text-white text-xl md:text-2xl font-bold ml-5 md:ml-14 z-20 ">
//             Bashar Blogs
//           </h1>
//           <FloatingDock
//             mobileClassName="translate-y-20 hidden" // only for demo, remove for production
//             items={links}
//           />
//           <div className="flex mr-6 justify-center items-center">
//             <Link href={"#blogs"}>
//               <Button className=" w-[100px] md:w-[130px] font-bold bg-white relative z-20 text-neutral-700 h-[35px] md:h-[35px] rounded-lg mr-2 md:mr-10 hover:text-white">
//                 Blogs
//               </Button>
//             </Link>

//             <div className="text-white md:hidden z-50 text-3xl">
//               <Sheet>
//                 <SheetTrigger>
//                   <button className="h-10 w-10 rounded-full bg-neutral-800 dark:bg-neutral-800 flex items-center justify-center">
//                     <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
//                   </button>
//                 </SheetTrigger>
//                 <SheetContent>
//                   <SheetHeader>
//                     <SheetTitle></SheetTitle>
//                     <SheetDescription>
//                       <nav>
//                         <ul className="text-2xl flex flex-col gap-10">
//                           <SheetClose asChild>
//                             {/* <Link href={"#"}> */}
//                             <li
//                               onClick={(e) => {
//                                 e.preventDefault();

//                                 handleSmoothScroll(e, "#");
//                               }}
//                               className="cursor-pointer"
//                             >
//                               Home
//                             </li>
//                             {/* </Link> */}
//                           </SheetClose>
//                           <SheetClose asChild>
//                             {/* <Link href={"#blogs"}> */}
//                             <li
//                               onClick={(e) => {
//                                 e.preventDefault();

//                                 handleSmoothScroll(e, "#blogs");
//                               }}
//                               className="cursor-pointer"
//                             >
//                               Blogs
//                             </li>
//                             {/* </Link> */}
//                           </SheetClose>
//                           <SheetClose asChild>
//                             {/* <Link href={"#testimonials"}> */}
//                             <li
//                               onClick={(e) => {
//                                 e.preventDefault();

//                                 handleSmoothScroll(e, "#testimonials");
//                               }}
//                               className="cursor-pointer"
//                             >
//                               About us
//                             </li>
//                             {/* </Link> */}
//                           </SheetClose>
//                           <SheetClose asChild>
//                             {/* <Link href={"#footer"}> */}
//                             <li
//                               onClick={(e) => {
//                                 e.preventDefault(); // Prevent default behavior
//                                 handleSmoothScroll(e, "#footer");
//                               }}
//                               className="cursor-pointer"
//                             >
//                               Contact
//                             </li>
//                             {/* </Link> */}
//                           </SheetClose>
//                         </ul>
//                         <div className=" mt-14">
//                           <Link href={"#blogs"}>
//                             <Button
//                               onClick={(e) => handleSmoothScroll(e, "#blogs")}
//                               className=" w-[100px] font-bold bg-white relative z-20 text-neutral-700 h-[35px] md:h-[35px] rounded-lg mr-2 md:mr-10 hover:text-white"
//                             >
//                               Blogs
//                             </Button>
//                           </Link>
//                           <Link href={"#footer"}>
//                             <Button
//                               onClick={(e) => handleSmoothScroll(e, "#footer")}
//                               className=" w-[100px] font-bold bg-white relative z-20 text-neutral-700 h-[35px] md:h-[35px] rounded-lg mr-2 md:mr-10 hover:text-white"
//                             >
//                               Contact
//                             </Button>
//                           </Link>
//                         </div>
//                       </nav>
//                     </SheetDescription>
//                   </SheetHeader>
//                 </SheetContent>
//               </Sheet>
//             </div>
//           </div>
//         </div>
        // <div className="md:h-[80vh] flex justify-center items-center">
        //   <div className="w-screen  lg:flex  ">
        //     <div className="left ml-5 md:ml-12 lg:w-1/2 flex flex-col gap-5 justify-center">
        //       <div className="flex flex-col gap-5">
        //         <p className="text-4xl  lg:text-6xl text-white  font-bold  relative z-20 bg-clip-text text-transparent  pt-8 lg:w-[75%]">
        //           Explore the World of Ideas
        //         </p>
        //         <p className="text-white lg:w-[70%]  md:text-xl ">
        //           Read, learn, and grow with our collection of blogs spanning
        //           countless topics, curated to captivate and inform.
        //         </p>
        //         <div className="btn font-bold text-lg flex gap-5 mt-5 h-16">
        //           <Link href={"#blogs"}>
        //             <Button className="w-[150px]  md:w-[200px] font-bold bg-white relative z-20 text-neutral-700  h-[55px] rounded-xl">
        //               Explore Blogs
        //             </Button>
        //           </Link>
        //           <Link href={"#footer"}>
        //             <Button className="w-[150px] md:w-[200px] font-bold h-[55px] rounded-xl border-[1px]">
        //               Contact Us
        //             </Button>
        //           </Link>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="right md:gap-5 flex flex-col justify-end md:ml-5 lg:ml-0 md:mt-10 lg:mt-0 lg:w-1/2 lg:mr-[17px]">
        //       <div className="">
        //         <CardSpotlight className=" md:h-52 md:w-[97%]  w-[90%] m-5 ml-5  md:ml-10 md:m-0">
        //           <p className="text-xl font-bold relative z-20 mt-1 text-white">
        //             Most Popular Blogs
        //           </p>
        //           <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        //             Blogs related to Trending Topics in the world and explore
        //             the advancement and development of the world in the field of
        //             artificial intelligence etc
        //           </p>
        //         </CardSpotlight>
        //       </div>
        //       <div className=" md:w-full flex flex-col md:flex-row justify-center items-center md:flex md:pr-5 md:gap-3 gap-3">
        //         <CardSpotlight className="h-40 md:w-30% w-[90%] ">
        //           <p className="text-xl font-bold relative z-20 md:mt-2 text-white">
        //             Trending Topics
        //           </p>

        //           <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        //             Explore the blogs of trending topics in the world and get
        //             improve knowledge
        //           </p>
        //         </CardSpotlight>
        //         <CardSpotlight className="h-40 md:w-30% mb-10 md:mb-0 w-[90%]">
        //           <p className="text-xl font-bold relative z-20 md:mt-1 text-white">
        //             News Blogs
        //           </p>

        //           <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        //             Most viewed and recent news in the world and country
        //           </p>
        //         </CardSpotlight>
        //       </div>
        //     </div>
        //   </div>
        // </div>
//       </div>
//     </div>
//   );
// }

// const Step = ({ title }: { title: string }) => {
//   return (
//     <li className="flex gap-2 items-start">
//       <CheckIcon />
//       <p className="text-white">{title}</p>
//     </li>
//   );
// };

// const CheckIcon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path
//         d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
//         fill="currentColor"
//         strokeWidth="0"
//       />
//     </svg>
//   );
// };
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
