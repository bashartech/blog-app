"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import { useState } from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from "next/image"

interface Card {
    name: string ;
    para : string ;
    imgUrl : string;
    blogUrl : string ;

}

export default function BlogPage() {

    const [searchBar, setSearchBar] = useState<string>("");

    const [blogs] = useState<Card[]>([
        {
            name : "Personal Development and Productivity",
            para : "Information about self-improvement, mindfulness, work-life balance, and time-management hacks..",
            imgUrl : "/images/product2.jpg",
            blogUrl : "/personal-development"
        },
        {
            name : "Tech Reviews and How-To Guides",
            para : "Blog about gadgets, software, or apps and provide step-by-step guides for using them.",
            imgUrl : "/images/img1.png",
            blogUrl : "/tech-reviews"
        },
        {
            name : "Modern Development",
            para : "Modern development is an exciting and ever-evolving field. By embracing new technologies.",
            imgUrl : "/images/md1.jpg",
            blogUrl : "/modern-development"
        },
        {
            name : "Health and Wellness",
            para : "Cover topics like mental health awareness, fitness routines, healthy diets, and holistic healing practices.",
            imgUrl : "/images/img21.jpg",
            blogUrl : "/health-wellness"
        },
        {
            name : "Remote Work and Freelancing",
            para : "Share insights on working from home, freelancing tips, and building a successful online career.",
            imgUrl : "/images/img15.png",
            blogUrl : "/remote-freelancing"
        },
        {
            name : "AI And Machine Learning",
            para : "Explore advancements in AI technologies, applications in daily life, and tools like ChatGPT, MidJourney, and DALL-E.",
            imgUrl : "/images/img16.png",
            blogUrl : "/AiAndMachine"
        },
    ])
    const filteredBlogs = blogs.filter(blog =>
blog.name.toLowerCase().includes(searchBar.toLowerCase())
)

  return (

    
    <div className='bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden w-screen min-h-screen flex justify-center items-center'>
  <div className='w-[90%] max-w-7xl'>
    <div className="text text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-500 text-6xl font-bold text-center p-10">
      <h1 className="animate-fade-in-down">Blogs</h1>
    </div>
    <div className='mb-8 animate-fade-in'>
      <Input 
        value={searchBar} 
        onChange={(e) => setSearchBar(e.target.value)} 
        placeholder='Enter a blog title'
        className="bg-gray-800 text-white border-gray-700 focus:border-teal-400 transition-all duration-300"
      />
    </div>
    <div className="box w-full min-h-[80vh] grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog, index) => (
          <div key={index} className="w-full mt-10 lg:mt-0 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
            <CardContainer className="inter-var max-w-[500px] w-full">
              <CardBody className="bg-gradient-to-br from-gray-800 to-gray-900 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:scale-105">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-500"
                >
                  {blog.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-300 text-sm max-w-sm mt-2"
                >
                  {blog.para}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={blog.imgUrl}
                    height={1000}
                    width={1000}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-transform duration-300 transform group-hover:scale-105"
                    alt={blog.name}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <Link href={blog.blogUrl}>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={blog.blogUrl}
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal text-teal-400 hover:bg-teal-600 hover:text-white transition-colors duration-300"
                    >
                      Try now →
                    </CardItem>
                  </Link>
                  <Link href={blog.blogUrl}>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-amber-500 text-white text-xs font-bold hover:from-teal-600 hover:to-amber-600 transition-colors duration-300"
                    >
                      Read More
                    </CardItem>
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))
      ) : (
        <p className="text-white col-span-full text-center animate-fade-in">No blogs found</p>
      )}
    </div>
  </div>
</div>

)
}
