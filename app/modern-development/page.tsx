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
          The universe of present day advancement is dynamic, driven by developments in coding practices, structures, and apparatuses. Designers today are not simply assembling programming; they are molding the fate of innovation. This blog investigates the patterns, instruments, and procedures changing the field of present day advancement.
          </p>
          <div className="grid gap-4">
            <Image
              src="/images/AI TOOL.png"
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
      title: "The Ascent of JavaScript Structures",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
          JavaScript keeps on overwhelming current web improvement.

Well known Structures: Respond, Precise, and Vue.js.
Server Side Delivering: Apparatuses like Next.js and Nuxt.js further develop execution and Website optimization. Part Based Engineering: Energizes reusability and seclusion.

          </p>
         
          
        </div>
      ),
    },
    {
      title: "Cloud-Local Turn of events",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
          Present day applications are progressively being intended for the cloud.

Microservices: Breaking applications into more modest, sensible administrations.
Containerization: Apparatuses like Docker and Kubernetes smooth out sending.
Serverless Designs: Spotlight on composing code without overseeing servers.
          </p>
          
          
        </div>
      ),
    },
    {
      title: "Simulated intelligence and AI Joining",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
          Simulated intelligence is changing the way in which designers approach critical thinking.

Man-made intelligence Fueled Instruments: GitHub Copilot for coding help.
Structures: TensorFlow and PyTorch for building ML models.
Reasonable Applications: Chatbots, proposal frameworks, and picture acknowledgment.

          </p>
          <div className="grid gap-4">
            <Image
              src="/images/img17.jpg"
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
      title: "Accentuation on Network protection",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
          As digital dangers develop, present day engineers focus on security.

Best Practices: Execute SSL, utilize secure APIs, and approve client input.
Apparatuses: OWASP ZAP and Burp Suite for infiltration testing.
Preparing: Remain refreshed on arising dangers and weaknesses.
          </p>

          
        </div>
      ),
    },
    {
      title: " The Fate of Present day Improvement",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
          Web3 and Blockchain: Decentralized applications building up forward momentum.
Edge Figuring: Handling information nearer to clients for decreased inactivity.
Low-Code/No Code Stages: Empowering quicker advancement cycles.
          </p>

          
        </div>
      ),
    },
    {
      title: "Conclusion",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
          Present day improvement is a thrilling and consistently advancing field. By embracing new structures, apparatuses, and approaches, designers can remain on top of things and make effective arrangements. Whether you are a carefully prepared coder or a novice, ceaseless learning is critical to flourishing in this imaginative scene.
          </p>

         
        </div>
      ),
    },
  ];
  return (
    <div className="w-screen overflow-hidden bg-zinc-800">
      <div className="w-full  bg-neutral-950">
        <h1 className=" text-xl md:text-5xl bg-neutral-950 text-center pt-24 font-bold text-neutral-300">
        Modern Development
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