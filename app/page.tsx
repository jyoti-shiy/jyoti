"use client"
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/navigation';


interface Thought {
  icon: string;
  title: string;
  service: string;
}

const social: Thought[] = [
  {
    icon: "/image/icon/adove.png",
    title: "Adobe Illustrator",
    service: "Designing Tool",
  },
  {
    icon: "/image/icon/ps.png",
    title: "Adobe Photoshop",
    service: "Designing Tool",
  },
  {
    icon: "/image/icon/figma.png",
    title: "Figma",
    service: "Designing Tool",
  },
  {
    icon: "/image/icon/chatgpt.png",
    title: "Chat GPT",
    service: "Artificial Intelligence",
  },
];

export default function Page() {
  const router = useRouter();

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
    <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden">
    <section className="text-slate-50 flex flex-col gap-6">
      <div className="">
        <h1 className="text-4xl sm:text-5xl mb-2 font-bold">Hey, I&rsquo;m Jyoti.</h1>
        <h1 className="text-4xl sm:text-5xl font-bold">
          I Design <span className="text-zinc-600 ">Software.</span>
        </h1>
      </div>
      <div className="text-zinc-600 text-xl sm:text-2xl font-bold">
        Simplifying tough problems to make accessible solutions .<br />
        <div className="flex items-center">
          <p className="mr-3">Previously @</p>
          <div className="flex">
            <Image
              src="/image/icon/companyIcon.svg"
              alt="companyLogo"
              width={30}
              height={30}
            />
            <Image
              src="/image/icon/companyLogo.svg"
              alt="companyLogo"
              width={100}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  
    <section className="my-7">
      <p className="text-slate-50 mb-5 text-xl sm:text-2xl">New Drops</p>
      <div className="flex flex-col sm:flex-row gap-5">
        <div
          style={{ cursor: "pointer" }}
          className="flex-1 overflow-hidden bg-zinc-900 rounded-lg border-zinc-700 border cardAnimation"
          onClick={()=>router.push('/gallary/art-gallary')}
        >
          <div className="h-[180px] sm:h-[235px] overflow-hidden homepageCardGradient flex justify-center items-center">
            <Image
              src="/image/home/1.png"
              width={300}
              height={200}
              quality={100}
              alt="Hero"
              className="hover:scale-110 transition-all duration-200 p-9"
            />
          </div>
          <div className="p-5 flex justify-between items-end">
            <div>
              <h1 className="text-slate-50 text-lg sm:text-xl">Art Gallary Site</h1>
              <p className="text-zinc-600 text-sm sm:text-md leading-snug">
                This art platform landing page highlights a curated collection of global artworks...
              </p>
            </div>
          </div>
        </div>
  
        <div
          style={{ cursor: "pointer" }}
          className="flex-1 overflow-hidden bg-zinc-900 rounded-lg border-zinc-700 border cardAnimation"
          onClick={()=>router.push('/gallary/dashboard')}
        >
          <div className="h-[180px] sm:h-[235px] overflow-hidden homepageCardGradient flex justify-center items-center">
            <Image
            
              src="/image/home/2.png"
              width={400}
              height={270}
              quality={100}
              alt="Hero"
              className="hover:scale-110 transition-all duration-200"
            />
          </div>
          <div className="p-5 flex justify-between items-end">
            <div>
              <h1 className="text-slate-50 text-lg sm:text-xl">Dashboard Design</h1>
              <p className="text-zinc-600 text-sm sm:text-md leading-snug">
                This dashboard delivers key e-commerce analytics through vibrant charts...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section className="pt-6 border border-zinc-700 rounded-lg mt-11 bg-zinc-900">
      <h2 className="font-bold px-5 text-lg sm:text-xl">Stack</h2>
      <p className="text-zinc-500 font-semibold text-xs sm:text-sm px-5">
        Software and resources I use on a regular basis.
      </p>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 my-7 px-2">
        {social.map((thought: Thought, index: number) => (
          <button
            key={index}
            className="flex gap-4 hover:bg-zinc-800 hover:border-zinc-700 border border-transparent rounded-md py-3 w-[95%] px-3 transition-all duration-300 ease-linear items-center"
          >
            <div className="w-[37px] h-[37px] rounded-lg">
              <Image
              
                src={thought.icon}
                alt={thought.service}
                width={37}
                height={37}
                className="rounded-lg"
              />
            </div>
            <div >
              <h1 className="text-slate-50 text-start font-bold text-sm sm:text-base">
                {thought.title}
              </h1>
              <p className="text-zinc-500 text-start font-semibold text-xs sm:text-sm">
                {thought.service}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  </div>
  </div>
  
  );
}
