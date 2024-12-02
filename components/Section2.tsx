"use client";
 
// import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
 
export default function Section2() {
    const testimonials = [
        {
          quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
          name: "Charles Dickens",
          title: "A Tale of Two Cities",
        },
        {
          quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
          name: "William Shakespeare",
          title: "Hamlet",
        },
        {
          quote: "All that we see or seem is but a dream within a dream.",
          name: "Edgar Allan Poe",
          title: "A Dream Within a Dream",
        },
        {
          quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          name: "Jane Austen",
          title: "Pride and Prejudice",
        },
        {
          quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
          name: "Herman Melville",
          title: "Moby-Dick",
        },
      ];
  return (
    <>
    <div id="testimonials" className="">
    <div className=" line w-screen h-[1px] bg-white"></div>
    <div className="h-[600px]  w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-start justify-start dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className='w-screen h-full overflow-hidden'>
        <div className="blogs h-full flex flex-col justify-center items-center ">
      <div className="  flex flex-col gap-14">
        <div className="pt-10 heading text-5xl text-center flex justify-center items-center font-bold h-[80px] text-white pb-5 ">
            Testimonials
        </div>
        <div className=" rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>

        </div>
      </div>
    </div>
    </div>
     </div>
    </>
  )
}
