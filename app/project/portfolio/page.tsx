"use client";
import Project1 from "@/components/Project1";
import ProjectContent from "@/components/ProjectContent";
import Image from "next/image";
import React from "react";

const page = () => {
  interface IReview {
    image: string;
    review: string;
    description: string;
  }
  interface ProjectContent {
    title: string;
    content: string[];
}

const projectContent: ProjectContent[] = [
  {
      title: "Solution",
      content: [
          "Designed an easy-to-navigate and unique portfolio with minimal color contrast but still visually attractive.",
          "Used dark mode, which is popular and appealing in the current market.",
          "Created an animated and visually appealing navigation bar.",
          "Added icons for Behance, LinkedIn, and email, which redirect users to the respective profiles.",
          "Included a rotating download button at the bottom right corner for both mobile and desktop views."
      ]
  },
  {
      title: "Process",
      content: [
          "Research: I analyzed over 100 portfolios and gathered insights from multiple platforms to understand best practices and common pitfalls.",
          "Wireframes & Prototyping: I sketched my initial ideas on paper, then translated them into wireframes in Figma, followed by prototyping to bring the concept to life."
      ]
  },
  {
      title: "Challenges",
      content: [
          "I encountered issues with making the navigation bar fully responsive on mobile, as it didn't fit properly at first."
      ]
  }
];

  const project: IReview[] = [
    {
      image: "/image/project/Group 1261152941.png",
      review: "80%+",
      description:
        " portfolios are overly complicated and difficult to navigate.",
    },
    {
      image: "/image/project/Group 1261152941 (3).png",
      review: "82%+",
      description:
        "High color contrast makes some portfolios visually overwhelming.",
    },
    {
      image: "/image/project/Group 1261152941 (2).png",
      review: "80%+",
      description:
        "A lack of uniqueness, with many portfolios looking similar to each other.",
    }
  ];

  return (
    <div className="px-3 sm:px-0">
      <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden">
        <h1 className="text-4xl sm:text-5xl mb-2 font-bold text-gray-200">
          Projects
        </h1>

        <div className="flex flex-col sm:flex-row mt-11 gap-5 justify-between">
          <ul className="list-disc w-full sm:w-[506px]">
            <h1 className="text-2xl sm:text-[30px] mb-3">Personal Portfolio</h1>
            <li className="relative pl-5 mb-3">
            Showcasing my UI/UX design skills with a clean, user-friendly interface.
            </li>
            <li className="relative pl-5 mb-3 text-[#E5E3E3]">
            Focused on simplicity, dark mode, and responsive design.
            </li>
            <li className="relative pl-5 text-[#B0B0B0]">
            Creating profile and match with others according to astrological aspects.
            </li>
            <li className="relative pl-5 text-[#B0B0B0]">
            Easy access to connect via Behance, LinkedIn, or email.
            </li>
          </ul>

          <div className="flex justify-center items-center ">
            <Image src={"/image/project/Group 1261152994 (1).png"} quality={100} alt="Hero" width={400} height={400} className="w-full mt-0 lg:-mt-20 max-w-sm" />
          </div>
        </div>

        <h1 className="text-2xl sm:text-[30px] mb-2 font-bold text-gray-200">Overview</h1>
        {/* <div className="w-full bg-[#232121] rounded-[15px] p-5 sm:p-11 gap-3 flex flex-col sm:flex-row border border-zinc-600">
          <ul className="w-full sm:w-[50%]">
            <li className="mb-9">
              <h2 className="text-[18px] sm:text-[20px] mb-3">What Is Astrology App?</h2>
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
                10 weeks
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
        </div> */}
       

        <div className="flex flex-col sm:flex-row gap-7 my-12">
          {project.map((p, i) => (
            <div
              key={i}
              className="w-full flex-1 sm:w-[185px] flex flex-col items-center justify-start text-center space-y-2"
            >
              <div className="  flex items-center justify-center">
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


          <div className="flex flex-col gap-9">
        <ProjectContent projectContent={projectContent} />
            
         
          </div>




       <Project1/>
      </div>
    </div>
  );
};

export default page;

