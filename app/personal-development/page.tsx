"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Timeline } from "@/components/ui/timeline";

interface CommentData {
  id: number;
  text: string;
}

export default function TimelineDemo() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<CommentData[]>([]);

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const handleButton = (e: React.FormEvent) => {
    e.preventDefault();

    if (comment.trim() !== "") {
      const newComment: CommentData = {
        id: Date.now(),
        text: comment,
      };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      setComment("");
    }
  };

  const renderComment = (commentData: CommentData) => (
    <div key={commentData.id} className="w-full relative mt-4">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-2 w-2 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>

        <h1
          id="getComment"
          className="font-bold text-xl text-white mb-4 relative z-50"
        >
          {commentData.text}
        </h1>
      </div>
    </div>
  );

  const data = [
    {
      title: "Intro",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
            In a quick moving existence where interruptions are steady,
            self-awareness and efficiency have become fundamental for making
            progress and satisfaction. From dominating using time effectively to
            developing sound propensities, the excursion of personal growth
            empowers people to open their actual potential. This blog dives into
            significant systems, apparatuses, and bits of knowledge to assist
            you with flourishing in both individual and expert life.
          </p>
          <div className="grid gap-4">
            <Image
              src="/images/product3.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 md:h-44 lg:h-[24rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Setting Clear Goals",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
            The groundwork of self-improvement lies in laying out clear and
            feasible objectives. Shrewd Objectives: Explicit, Quantifiable,
            Feasible, Important, Time-bound. Representation: Imagine your future
            to propel and direct your activities. Expert Tip: Record your
            objectives and break them into more modest, sensible assignments.
          </p>
        </div>
      ),
    },
    {
      title: "Time Usage Procedures",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
            Time is the most important asset, and overseeing it really can
            supercharge your efficiency. The Eisenhower Framework: Focus on
            assignments in view of criticalness and significance. Pomodoro
            Method: Work in centered timespans minutes with 5-minute breaks.
            Clustering Errands: Gathering comparable exercises to limit setting
            exchanging.
          </p>
        </div>
      ),
    },
    {
      title: "Building Compelling Propensities",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
            Consistency is critical to long haul achievement. Nuclear
            Propensities Approach: Begin little and develop over the long run.
            Use propensity trackers to screen progress and remain spurred. Wipe
            out vices by supplanting them with positive other options.
          </p>
        </div>
      ),
    },
    {
      title: "Utilizing Innovation for Efficiency",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
            Efficiency instruments can assist with smoothing out your work
            process. Applications: Trello, Thought, or Todoist for task the
            board. Robotization: Devices like Zapier to computerize tedious
            undertakings. Center Instruments: Applications like Focus@Will or
            Woods to limit interruptions.
          </p>
          <div className="grid gap-4">
            <Image
              src="/images/web services.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 md:h-44 lg:h-[24rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Conclusion",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
            Self-awareness and efficiency are long lasting excursions that
            require responsibility and flexibility. By defining objectives,
            dominating using time effectively, building propensities, and
            utilizing the right devices, you can open your maximum capacity and
            lead a satisfying life. Begin little, remain steady, and watch your
            endeavors compound over the long haul.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-screen overflow-hidden bg-zinc-800">
      <div className="w-full  bg-neutral-950">
        <h1 className=" text-xl md:text-5xl bg-neutral-950 text-center pt-24 font-bold text-neutral-300 overflow-hidden">
          Personal Development and Productivity
        </h1>
        <Timeline data={data} />
        <div className=" line w-screen h-[1px] bg-white"></div>
        <div className="w-screen min-h-screen p-10">
          <h1 className="text-white h-24 text-5xl font-bold p-10 text-center ">
            Comments
          </h1>

          <div className="give">
            <form className="h-40 flex flex-col justify-center lg:pl-5">
              <div className="w-screen">
                <input
                  className="bg-transparent border-b-2  w-[85%] h-16 text-white"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  type="text"
                  placeholder="Enter Your Comment"
                />
              </div>
              <button
                onClick={handleButton}
                className="border p-2 mt-5 w-32 h-12 rounded-lg  border-gray-500 text-gray-300"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="get mt-10">{comments.map(renderComment)}</div>
        </div>
      </div>
    </div>
  );
}
