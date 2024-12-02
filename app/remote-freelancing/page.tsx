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
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const handleButton = (e: React.FormEvent) => {
    e.preventDefault();


    if (comment.trim() !== "") {
        const newComment: CommentData = {
          id: Date.now(),
          text: comment
        };
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        localStorage.setItem('comments', JSON.stringify(updatedComments));
        setComment("");
      }
    };

    const renderComment = (commentData : CommentData) => (
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
          Remote work and outsourcing have upset how we view business. With progressions in innovation and changing work societies, experts overall are getting away from customary office arrangements to additional adaptable plans. Whether you're thinking about taking the jump toward remote work or investigating outsourcing, this guide will give bits of knowledge, advantages, challenges, and noteworthy hints to assist you with prevailing in this developing pattern.
          </p>
          <div className="grid gap-4">
            <Image
              src="/images/img15.png"
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
      title: "Remote Working",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
          Innovation: Apparatuses like Zoom, Slack, and undertaking the board stages like Trello and Asana empower consistent correspondence and joint effort.
Worldwide Network: High velocity web and distributed computing permit groups to cooperate paying little heed to area.
Representative Inclinations: A review uncovers that 74% of laborers favor remote or half and half work for better balance between serious and fun activities.
Cost Reserve funds: Organizations save money on office space and utilities, while representatives save money on driving expenses.  </p>
         
        </div>
      ),
    },
    {
      title: "Advantages Of Remote Work",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
          Adaptability: Workers can configuration plans around private and expert responsibilities.
Expanded Efficiency: Many report being more useful without office interruptions.
More extensive Open doors: Laborers can take occupations across borders without migrating.
Natural Effect: Remote work decreases driving, bringing down carbon impressions.
          </p>
          
        
        </div>
      ),
    },
    {
      title: "Challenges in Remote Work",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
          Detachment: Telecommuting can feel desolate without face to face communications.
Balance between fun and serious activities: Obscured limits might prompt workaholic behavior.
Correspondence Holes: Miscommunication might emerge without eye to eye conversations.
          </p>

          
        </div>
      ),
    },
    {
      title: "Freelencing",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
          Outsourcing goes past remote work — it's tied in with working for yourself. Stages like Upwork, Fiverr, and Toptal have made it simpler than at any other time to track down gigs recorded as a hard copy, plan, programming, and the sky is the limit from there.

Key Benefits of Outsourcing
Command Over Tasks: Pick work lined up with your abilities and interests.
Monetary Development: Consultants can set rates and acquire more than fixed-compensation jobs.
Worldwide Organization: Work with clients across businesses and nations. Ways to flourish in Remote Work and Outsourcing
Set Up a Committed Work area: Guarantee an expert climate, even at home.
Use Efficiency Devices: Instruments like Idea, Clockify, and research Work area can smooth out undertakings.
Remain Associated: Customary virtual registrations with partners or clients keep up with great correspondence.
Upskill Continually: Continue to figure out how to stay serious in a quickly evolving market.
Balance is Critical: Use procedures like time-obstructing to keep up with limits among work and life.
          </p>

          <div className="grid gap-4">
            <Image
              src="/images/img24.jfif"
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
          Remote work and outsourcing are presently not simply drifts; they are reshaping the worldwide labor force. By embracing adaptability, utilizing innovation, and consistently further developing abilities, experts can flourish in this powerful workplace. It's not just about working contrastingly — about working more brilliant and planning a lifelong accommodates your way of life.
          </p>

         
        </div>
      ),
    },
  ];
  return (
    <div className="w-screen overflow-hidden bg-zinc-800">
      <div className="w-full  bg-neutral-950">
        <h1 className=" text-xl md:text-5xl bg-neutral-950 text-center pt-24 font-bold text-neutral-300">
        Remote Work and Freelancing
        </h1>
        <div className="overflow-hidden  ">
        <Timeline data={data} />
        </div>
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
