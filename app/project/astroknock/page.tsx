"use client";
import Project2 from "@/components/Project2";
import Image from "next/image";
import React from "react";

const page = () => {
  interface IReview {
    image: string;
    review: string;
    description: string;
  }

  const project: IReview[] = [
    {
      image: "/image/project/Group 1261152941.png",
      review: "95%+",
      description:
        "of astrology apps focus on specific principles, requiring users to switch between platforms. forcing users to juggle multiple platforms for a comprehensive experience.",
    },
    {
      image: "/image/project/Group 1261152942.png",
      review: "10/12",
      description:
        "apps focus solely on daily horoscopes and don’t offer astrology-based partner matching, leaving a gap for users interested in both.",
    },
    {
      image: "/image/project/Group 1261152944.png",
      review: "80%+",
      description:
        "of astrology apps do not offer direct audio chat features, less interactions between users & astrologer. This lack of accessibility can make it difficult for users to receive immediate and tailored astrological advice.",
    },
    {
      image: "/image/project/Group 1261152945.png",
      review: "50%+",
      description:
        "50% of users want to learn astrology but struggle due to a lack of in-depth educational resources in most astrology apps.",
    },
  ];

  return (
    <div className="px-3 sm:px-0">
      <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden">
        <h1 className="text-4xl sm:text-5xl mb-2 font-bold text-gray-200">
          Projects
        </h1>

        <div className="flex flex-col sm:flex-row mt-11 gap-5 justify-between">
          <ul className="list-dis w-full sm:w-[506px]">
            <h1 className="text-2xl sm:text-[30px] mb-3">Astro Knock</h1>
            <li className="relative pl-5 mb-3">
              A mobile application designed to provide personalized astrological insights based on user data.
            </li>
            <li className="relative pl-5 mb-3 text-[#E5E3E3]">
              A mobile application designed to offer users a comprehensive astrological experience, including daily horoscopes, personalized readings, compatibility reports, and detailed natal charts.
            </li>
            <li className="relative pl-5 text-[#B0B0B0]">
              Creating profile and match with others according to astrological aspects.
            </li>
          </ul>

          <div className="flex justify-center items-center ">
            <Image src={"/image/project/1.png"} quality={100} alt="Hero" width={400} height={400} className="w-full mt-0 lg:-mt-20 max-w-sm" />
          </div>
        </div>

        <h1 className="text-2xl sm:text-[30px] mb-2 font-bold text-gray-200">Overview</h1>
        <div className="w-full bg-[#232121] rounded-[15px] p-5 sm:p-11 gap-3 flex flex-col sm:flex-row border border-zinc-600">
          <ul className="w-full sm:w-[50%]">
            <li className="mb-9">
              <h2 className="text-[18px] sm:text-[20px] mb-3">What Is Astroknock App?</h2>
              <p className="text-[#A6A5A5] text-[14px] font-light leading-snug">
                A mobile application designed to offer users a comprehensive astrological experience, including daily horoscopes, personalized readings, compatibility reports, and detailed natal charts. The project aimed to create an engaging, user-friendly interface that caters to astrology enthusiasts, providing them with insightful and interactive content based on their unique astrological profiles.
              </p>
            </li>
            <li className="mb-9">
              <h2 className="text-[18px] sm:text-[20px] mb-3">Tools</h2>
              <p className="text-[#A6A5A5] text-[14px] font-light leading-snug">
                Figma, Canva, ChatGPT
              </p>
            </li>
            <li>
              <h2 className="text-[18px] sm:text-[20px]">Timeline</h2>
              <p className="text-[#A6A5A5] text-[14px] font-light leading-snug">
                8 weeks
              </p>
            </li>
          </ul>
          <ul className="w-full sm:w-[50%]">
            <li className="mb-9">
              <h2 className="text-[18px] sm:text-[20px] mb-3">Client</h2>
              <p className="text-[#A6A5A5] text-[14px] font-light leading-snug">
                A professional astrologer looking to improve client interaction through a custom mobile app. The app, available on the Play Store, is designed for her personal use to provide daily horoscopes, personalized readings, and compatibility reports, while also expanding her reach to new users.
              </p>
            </li>
            <li>
              <h2 className="text-[18px] sm:text-[20px] mb-3">Role</h2>
              <p className="text-[#A6A5A5] text-[14px] font-light leading-snug">
                UI/UX Designer <br />
                <span className="underline">Responsibilities:</span> Designed the user interface and user experience for the astrology app, incorporating the client&rsquo;s specific needs and preferences. Developed prototypes to visualize interactions and workflows, created the app&rsquo;s logo, and worked closely with my manager for guidance throughout the project.
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-7 my-12">
          {project.map((p, i) => (
            <div
              key={i}
              className="w-full sm:w-[185px] flex flex-col items-center justify-start text-center space-y-2"
            >
              <div className="w-[150px] h-[120px] flex items-center justify-center">
                <Image
                  src={p.image}
                  alt=""
                  width={300}
                  height={100}
                  quality={100}
                />
              </div>
              <p>{p.review}</p>
              <p className="font-thin text-[13px]">{p.description}</p>
            </div>
          ))}
        </div>

        <Project2/>
      </div>
    </div>
  );
};

export default page;
