"use client";
import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/lib/util";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <div id="footer">
        <div className=" line w-screen  h-[1px] bg-white"></div>

        
        <footer className="w-full bg-gradient-to-b from-black to-gray-900 text-white py-12 px-4 ">
      <div className="max-w-7xl mx-auto md:flex justify-between items-start ">
        <div className="left flex flex-col gap-8 justify-center md:w-[45%] mb-10 md:mb-0">
          <div>
            <h2 className="font-bold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Contact Us
            </h2>
            <p className="text-gray-400 mt-5 text-lg leading-relaxed">
              Feel free to ask about blogs, trending topics, or specific
              details you are curious about. We are here to help
            </p>
          </div>
          <div className="btn font-bold text-lg flex flex-col sm:flex-row gap-4 mt-5">
            <Link href={"#blogs"}>
              <Button className="w-full sm:w-[150px] font-bold bg-white hover:bg-gray-200 text-black transition-colors duration-300 h-[50px] rounded-xl">
                Explore Blogs
              </Button>
            </Link>
            <Link href={"#"}>
              <Button className="w-full sm:w-[150px] font-bold h-[50px] rounded-xl border-2 border-white hover:bg-white hover:text-black transition-colors duration-300">
                Go Home
              </Button>
            </Link>
          </div>
        </div>
        <div className="right md:w-[45%] rounded-lg p-6 md:p-8 bg-gray-800 border border-gray-700 shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <LabelInputContainer>
                <Label htmlFor="firstname" className="text-gray-300">First name</Label>
                <Input id="firstname" placeholder="Tyler" type="text" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname" className="text-gray-300">Last name</Label>
                <Input id="lastname" placeholder="Durden" type="text" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer>
              <Label htmlFor="email" className="text-gray-300">Email Address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </LabelInputContainer>

            <button
              className="w-full bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 text-white rounded-md py-3 font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              type="submit"
            >
              Submit &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>
      </div>
    </footer>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
