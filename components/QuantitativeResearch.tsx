// components/QuantitativeResearch.js
"use client";
import React from "react";
import Image from "next/image";

const QuantitativeResearch = () => {
  type Seeker = {
    description: string;
    image: string;
  };

  type Recruiter = {
    description: string;
    image: string;
  };

  const seekers: Seeker[] = [
    {
      description:
        "How many job seekers find it challenging to locate relevant IT jobs on general job portals?",
      image: "/image/project/Frame 1000014496.png",
    },
    {
      description:
        "Do users prefer an application tracking system with real-time updates?",
      image: "/image/project/Frame 1000014497 (1).png",
    },
    {
      description:
        "Are job seekers more likely to use a platform with skill-specific filters and job recommendations?",
      image: "/image/project/Frame 1000014498.png",
    },
  ];

  const recruiters: Recruiter[] = [
    {
      description:
        "How many recruiters struggle to filter candidates by specific skills and experience on general job sites?",
      image: "/image/project/Frame 1000014496 (2).png",
    },
    {
      description:
        "Is there a demand for a simplified job posting process to reduce repetitive tasks?",
      image: "/image/project/Frame 1000014497 (2).png",
    },
    {
      description:
        "Do recruiters find accessible in-platform communication with candidates crucial for efficient hiring?",
      image: "/image/project/Frame 1000014498 (1).png",
    },
  ];

  return (
    <section className="bg-[rgba(35,33,33,0.17)] rounded-2xl py-11 px-9 mt-11 cuateBG">
      <div className="flex items-center justify-end gap-2">
        <span className="w-3/5 bg-white h-[1px]"></span>
        <h1 className="capitalize text-xl">
          <i>: quantitative research</i>
        </h1>
      </div>
      <p className="font-thin text-end">
        To support design decisions, I gathered quantitative data to understand
        user behavior and <br />
        preferences:
      </p>

      <div>
        <h1 className="text-lg">
          <i>For Job Seekers:</i>
        </h1>

        {/* Responsive Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {seekers.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-2  p-4 rounded-xl shadow-md items-center"
            >
              <p className="seeker-description mt-4 text-center font-thin h-16">
                {s.description}
              </p>
              <div className="w-1/2 relative h-64">
                <Image
                  src={s.image}
                  alt={`Image of ${s.description}`}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  className="rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>


      <div>
        <h1 className="text-lg">
          <i>For Recruiters :</i>
        </h1>

        {/* Responsive Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {recruiters.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-2  p-4 rounded-xl shadow-md items-center"
            >
              <p className="seeker-description mt-4 text-center font-thin h-16">
                {s.description}
              </p>
              <div className="w-1/2 relative h-64">
                <Image
                  src={s.image}
                  alt={`Image of ${s.description}`}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  className="rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuantitativeResearch;
