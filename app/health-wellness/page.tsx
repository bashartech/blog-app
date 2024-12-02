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
            In todays fast-paced world, health and wellness have become
            paramount. Balancing physical fitness, mental health, and a healthy
            lifestyle can lead to a more fulfilled and energized life. This blog
            explores actionable steps to improve your overall well being while
            addressing challenges posed by modern living.
          </p>
          <div className="grid gap-4">
            <Image
              src="/images/img22.png"
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
      title: "Importance",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
            Good health is not just about being free from illness; its about
            thriving in all aspects of life. Wellness encompasses physical
            fitness, mental clarity, and emotional balance. Neglecting any of
            these aspects can lead to burnout, stress, or chronic conditions.
          </p>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
            Exercise Regularly: Aim for 30 minutes of moderate exercise, 5 days
            a week. Activities like jogging, yoga, or dancing improve
            cardiovascular health and muscle strength. Healthy Diet: Prioritize
            whole foods, fruits, vegetables, lean proteins, and healthy fats.
            Reduce processed foods and sugar intake. Hydration: Drink at least 2
            liters of water daily to keep your body functioning optimally.
            Quality Sleep: Sleep 7 to 9 hours each night to allow your body to
            repair and rejuvenate.
          </p>
          <div className="grid gap-4">
            <Image
              src="/images/img23.png"
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
      title: "Mental Health",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
            Mindfulness Practices: Meditation and deep-breathing exercises help
            reduce stress and anxiety. Therapy and Support: Seeking professional
            help is a sign of strength. Talking about mental health should be
            normalized. Digital Detox: Limit screen time, especially before bed,
            to improve focus and mental clarity. Journaling: Write down thoughts
            to process emotions and set goals.
          </p>
        </div>
      ),
    },
    {
      title: "Holistic Wellness Practices",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
            Aromatherapy: Using essential oils can enhance mood and relaxation.
            Nature Connection: Spend time outdoors to boost vitamin D levels and
            improve mental well-being. Alternative Therapies: Practices like
            acupuncture, chiropractic care, and herbal remedies can complement
            traditional medicine.
          </p>
        </div>
      ),
    },
    {
      title: "Sustainable Wellness Routine",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
            Set Realistic Goals: Start small, such as adding one extra vegetable
            to meals or walking 10 minutes a day. Stay Consistent: Its better to
            be consistent than perfect. Progress over time yields long-term
            results. Involve Loved Ones: Family and friends can be great
            accountability partners.
          </p>
        </div>
      ),
    },
    {
      title: "Conclusion",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
            Health and wellness are lifelong journeys requiring balance and
            commitment. By integrating physical fitness, mental health
            practices, and holistic approaches, you can cultivate a lifestyle
            that supports your goals and happiness. Start small, stay
            consistent, and make wellness a priority its an investment in
            yourself.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-screen overflow-hidden bg-zinc-800">
      <div className="w-full  bg-neutral-950">
        <h1 className=" text-xl  md:text-5xl bg-neutral-950 text-center pt-24 font-bold text-neutral-300">
          Health and Wellness
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
