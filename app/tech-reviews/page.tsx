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
          Innovation is steadily developing, with new contraptions, programming, and stages arising day to day. Staying aware of the furthest down the line patterns can overpower. This blog gives inside and out tech surveys and bit by bit advisers for assist perusers with settling on informed choices and address tech-related difficulties proficiently.

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
      title: "Significance of Tech Audits",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
          Prior to buying or taking on new innovation, surveys can give:

Knowledge: Grasp the elements and execution.
Examination: Consider items in contrast to contenders.
Esteem Evaluation: Decide whether it merits the speculation.
          </p>
       
        
        </div>
      ),
    },
    {
      title: "Composing Point by point Tech Audits",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
          Key components to include:

Presentation: Brief outline of the item or programming.
Elements and Details: Feature what makes it remarkable.
Execution Assessment: Test under different circumstances.
Upsides and downsides: Give a decent viewpoint.
Decision: Sum up with a proposal.
Model: Evaluating a cell phone? Cover show quality, battery duration, camera execution, and UI.
          </p>
          
          
        </div>
      ),
    },
    {
      title: " Making How-To Guides",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
          Help clients explore and dominate their tech devices.

Bit by bit Directions: Break processes into absorbable activities.
Visual Guides: Use screen captures, outlines, or recordings.
FAQs: Address normal client questions or issues.
Well known Themes:

"Instructions to Set Up a Savvy Home Framework"
"Enhancing Your PC for Gaming"
"Figuring out Distributed storage Arrangements"

          </p>

        
        </div>
      ),
    },
   
    {
      title: "Conclusion",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
          Tech audits and how-to guides engage clients to really outfit innovation. Whether you're making sense of an item's assets or directing somebody through an arrangement interaction, lucidity and detail are critical. The well informed crowd values precision and noteworthy bits of knowledge, making this a remunerating specialty for bloggers.
          </p>

         
        </div>
      ),
    },
  ];
  return (
    <div className="w-screen overflow-hidden bg-zinc-800">
      <div className="w-full  bg-neutral-950">
        <h1 className=" text-xl md:text-5xl bg-neutral-950 text-center pt-24 font-bold text-neutral-300">
        Tech Reviews and How-To Guides
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