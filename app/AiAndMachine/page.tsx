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
          The tech upheaval has reshaped how we live, work, and collaborate with the world. From the introduction of the web to the appearance of man-made reasoning computer based intelligence and brilliant gadgets, innovation has turned into an indistinguishable piece of our day to day routines. This blog dives into key parts of this change, investigating what the computerized age has meant for different spaces and what's on the horizon for work and schooling.
          </p>
          <div className="grid gap-4">
            <Image
              src="/images/img14.webp"
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
      title: "Internet",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
            The internet has been the cornerstone of the tech revolution. It has
            transformed the way we access information, connect with others, and
            conduct business. The rise of broadband, 5G, and fiber optics
            ensures faster, more reliable connectivity, enabling innovations
            like cloud computing, e-commerce, and remote work.
          </p>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
          Correspondence Upheaval: Online entertainment stages, texting, and video conferencing apparatuses like Zoom and Microsoft Groups have reclassified how we associate.
Web based business Development: Organizations like Amazon and Shopify have made internet shopping a worldwide peculiarity, reshaping retail.
Data Readily available: Web indexes like Google have transformed the web into the world's biggest library, open whenever.
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
      title: "Artificial Intelligence",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
          Man-made intelligence is at the center of the tech upset, driving headways across ventures.

Computerization and Proficiency: simulated intelligence driven devices smooth out errands in medical care, money, and assembling, saving time and assets.
Customized Encounters: Calculations in stages like Netflix and Spotify dissect client conduct to convey custom-made proposals.
Medical services Headways: simulated intelligence further develops diagnostics, drug disclosure, and patient consideration through prescient models and advanced mechanics.
Challenges: Moral worries, information security, and the expected loss of occupations because of robotization are critical issues that need tending to.
          </p>
          {/* <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div> */}
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
      title: "Smart Devices",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
          Savvy gadgets have brought innovation into our homes and pockets, making ordinary errands more helpful.

Cell phones: These are scaled down PCs, permitting admittance to applications, route, correspondence, and diversion.
Wearables: Gadgets like smartwatches and wellness trackers screen wellbeing measurements and assist with keeping up with wellness objectives.
Savvy Homes: IoT-empowered apparatuses like indoor regulators, security frameworks, and voice associates (e.g., Alexa and Google Collaborator) work on day to day existence.
Associated Biological system: The consistent coordination of gadgets through IoT networks improves efficiency and solace.
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
      title: "The Future of Work and Education",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
          The tech unrest is reshaping work environments and homerooms, driving changes by they way we work and learn.

Work environment Change
Remote Work: Devices like Leeway, Trello, and Zoom empower groups to team up across borders.
Robotization: simulated intelligence and advanced mechanics handle dreary assignments, permitting people to zero in on imagination and methodology.
Gig Economy: Stages like Upwork and Fiverr enable specialists to chip away at their terms.
Abilities Over Degrees: Bosses progressively esteem pragmatic abilities in coding, computerized promoting, and information examination over conventional capabilities.
Instructive Development
E-Learning Stages: Locales like Coursera, Udemy, and Khan Foundation offer reasonable admittance to quality schooling.
Computer generated Reality (VR) and man-made intelligence: Vivid opportunities for growth reenact true situations, upgrading ability obtaining.
Customized Learning: computer based intelligence adjusts instructive substance to individual learning styles and speeds.
Worldwide Homerooms: Online training associates understudies from various regions of the planet, encouraging social trade.
          </p>

          <div className="grid gap-4">
            <Image
              src="/images/img2.jpg"
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
          The tech upset keeps on pushing the limits of what humankind can accomplish. The web, artificial intelligence, and shrewd gadgets have changed correspondence, trade, and day to day existence, while additionally presenting new difficulties like security concerns and moral quandaries.

Looking forward, the joining of innovation into work and instruction will characterize the following period of this unrest. Embracing development while tending to its difficulties will be basic in building a future where innovation improves human potential without compromising qualities. The excursion is progressing, and the conceivable outcomes are boundless.
          </p>

          <div className="grid gap-4">
            <Image
              src="/images/img1.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 md:h-44 lg:h-[24rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-screen overflow-hidden bg-zinc-800">
      <div className="w-full  bg-neutral-950">
        <h1 className=" text-xl md:text-5xl bg-neutral-950 text-center pt-24 font-bold text-neutral-300">
          AI And Machine Learning
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



