"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Section3() {
  return (
    <div id="blogs" className=" bg-black
">
      <div className=" line w-screen h-[1px] bg-white"></div>
     
         <div className="main bg-gradient-to-br 0 min-h-screen flex flex-col justify-center px-4 py-8 xl:px-0">
      <div className="p-10 heading text-3xl md:text-5xl text-center flex justify-center font-bold h-[20px] text-white items-start mb-16 lg:mb-24">
        Explore Trending Blogs
      </div>
      
      <div className="blogs w-full flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 mt-10 mb-10 xl:mt-0 xl:mb-0">
        <div className="w-full lg:w-[calc(33.33%-1rem)] xl:w-[30%] mb-8 lg:mb-0">
          <CardContainer className="inter-var  max-w-[500px] w-full" >
            <CardBody className="bg-zinc-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border transition-all duration-300 hover:scale-105">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white dark:text-white"
              >
                AI And Machine Learning
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Explore advancements in AI technologies, applications in daily life, and tools like ChatGPT, MidJourney, and DALL-E.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/images/img17.jpg"
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="AI and Machine Learning"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
              <Link href="/AiAndMachine">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/AiAndMachine"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  Try now →
                </CardItem>
              </Link>
                <Link href="/AiAndMachine">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                  >
                    Read More
                  </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <div className="w-full lg:w-[calc(33.33%-1rem)] xl:w-[30%] mb-8 lg:mb-0">
          <CardContainer className="inter-var  max-w-[500px] w-full" >
            <CardBody className="bg-zinc-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border transition-all duration-300 hover:scale-105">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white dark:text-white"
              >
                Remote Work and Freelancing
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Share insights on working from home, freelancing tips, and building a successful online career.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/images/img15.png"
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Remote Work and Freelancing"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
            <Link href="/remote-freelancing">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/remote-freelancing"                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  Try now →
                </CardItem>
            </Link>
                <Link href="/remote-freelancing">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                  >
                    Read More
                  </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <div className="w-full lg:w-[calc(33.33%-1rem)] xl:w-[30%] mb-8 lg:mb-0">
          <CardContainer className="inter-var  max-w-[500px] w-full" >
            <CardBody className="bg-zinc-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border transition-all duration-300 hover:scale-105">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white dark:text-white"
              >
                Health and Wellness
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Cover topics like mental health awareness, fitness routines, healthy diets, and holistic healing practices.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/images/img21.jpg"
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Health and Wellness"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <Link  href="/health-wellness">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/health-wellness"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  Try now →
                </CardItem>
                </Link>
                <Link href="/health-wellness">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                  >
                    Read More
                  </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>

      <div className="w-full text-center mt-8 lg:mt-16">
        <Link href={"/blogs"}>
        <Button className="w-[200px] font-bold hover:text-white bg-white relative z-20 text-neutral-700 h-[55px] rounded-xl">
          View All
        </Button>
        </Link>
      </div>
    </div>
    </div>
      
  );
}
