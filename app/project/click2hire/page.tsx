"use client";
import Ideate from "@/components/Ideate";
import LastSection from "@/components/LastSection";
import Manash from "@/components/Manash";
import ManashEmptyMap from "@/components/ManashEmptyMap";
import Phase from "@/components/Phase";
import Project1 from "@/components/Project1";
import ProjectContent from "@/components/ProjectContent";
import QuantitativeResearch from "@/components/QuantitativeResearch";
import Syantan from "@/components/Syantan";
import SyanTanEmptyComponent from "@/components/SyanTanEmptyComponent";
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
        "Included a rotating download button at the bottom right corner for both mobile and desktop views.",
      ],
    },
    {
      title: "Process",
      content: [
        "Research: I analyzed over 100 portfolios and gathered insights from multiple platforms to understand best practices and common pitfalls.",
        "Wireframes & Prototyping: I sketched my initial ideas on paper, then translated them into wireframes in Figma, followed by prototyping to bring the concept to life.",
      ],
    },
    {
      title: "Challenges",
      content: [
        "I encountered issues with making the navigation bar fully responsive on mobile, as it didn't fit properly at first.",
      ],
    },
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
    },
  ];

  return (
    <div className="px-3 sm:px-0">
      <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden">
        <Image src={"/image/project/logo.png"} alt="" width={300} height={30} />

        <div className="flex flex-col sm:flex-row mt-11 gap-5 justify-center items-center">
          <div className="list-disc w-full sm:w-[506px]">
            <h1 className="text-2xl sm:text-[30px] mb-3">UX case study </h1>

            <p>
              {" "}
              Click2Hires is a IT Based job portal site. use the site Job seeker
              get hired & Companies can hire Candidates
            </p>
          </div>

          <div className="flex justify-center items-center ">
            <Image
              src={"/image/project/bro.png"}
              quality={100}
              alt="Hero"
              width={400}
              height={400}
              className="w-full mt-0 lg:-mt-20 max-w-sm"
            />
          </div>
        </div>

        <h1 className="text-2xl sm:text-[30px] mb-2 font-bold text-gray-200">
          Overview
        </h1>
        <div className="w-full  bg-[#1a1a1a]  backdrop-filter backdrop-blur-md bg-opacity-80 rounded-[15px] p-5 sm:p-11 gap-3 flex flex-col sm:flex-row shadow">
          <ul className="w-full sm:w-[50%]">
            <li className="mb-9">
              <h2 className="text-[18px] sm:text-[20px] mb-3">
                {" "}
                <i> What Is Click2Hires ? </i>{" "}
              </h2>
              <p className=" text-[14px]  tracking-wider leading-snug">
                The IT job portal streamlines hiring with tailored dashboards:
                job seekers find relevant roles, track applications, and get
                recommendations, while recruiters post jobs, filter candidates,
                and manage selections—offering a seamless experience for both in
                the tech industry.
              </p>
            </li>
            <li className="mb-9">
              <h2 className="text-[18px] sm:text-[20px] mb-3">Tools</h2>
              <p className=" text-[14px]  tracking-wider leading-snug">
                Figma, Canva, ChatGPT
              </p>
            </li>
            <li>
              <h2 className="text-[18px] sm:text-[20px]">Timeline</h2>
              <p className=" text-[14px]  tracking-wider leading-snug">
                8 weeks
              </p>
            </li>
          </ul>
          <ul className="w-full sm:w-[50%]">
            <li className="mb-9">
              <h2 className="text-[18px] sm:text-[20px] mb-3">Purpose</h2>
              <p className=" text-[14px]  tracking-wider leading-snug">
                Designed for IT job seekers and tech recruiters, this project
                aims to simplify the hiring process with a platform tailored to
                the tech industry’s needs.
              </p>
            </li>
            <li>
              <h2 className="text-[18px] sm:text-[20px] mb-3">My Role</h2>
              <p className=" text-[14px]  tracking-wider leading-snug">
                UI/UX Designer <br />
                <br />
                As the UI/UX Designer, I led the design process, focusing on
                user research, wireframing, prototyping, and creating distinct,
                intuitive dashboards for both job seekers and recruiters. My
                role included defining user flows, ensuring usability, and
                crafting a cohesive visual style tailored to the tech industry’s
                needs.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h1 className=" capitalize text-3xl mt-9">problem statement</h1>
          <p className="mt-4">
            General job portals often fail to meet the unique needs of the tech
            industry, where job seekers struggle to find relevant IT roles, and
            recruiters need precise candidate filtering for specific skills.
            This project addresses these challenges by creating a dedicated
            platform with tailored dashboards, enabling a smoother, more
            efficient experience for both IT job seekers and recruiters in the
            hiring process.
          </p>
        </div>

        <div>
          <h1 className=" capitalize text-3xl mt-9">possible solution</h1>
          <p className="mt-4 ">
            The proposed solution is an IT-focused job portal featuring distinct
            dashboards for job seekers and recruiters
          </p>
          <ul className="mt-5 list-disc bg-[#1a1a1a]  backdrop-filter backdrop-blur-md bg-opacity-80 rounded-[15px] p-5">
            <li className="relative text-sm text-[#e0e0e0] ml-5 project-item">
              <i className="font-semibold text-white"> For Job Seekers:</i> The platform
              offers advanced search filters specific to IT roles, personalized
              job recommendations, and an application tracker to streamline the
              job search and application process.
            </li>

            <li className="relative text-sm text-[#e0e0e0] ml-5 project-item mt-3">
              <i className="font-semibold text-white"> For Recruiters:</i> The dashboard
              includes efficient job posting tools, targeted candidate filtering
              by skills and experience, and management features for reviewing
              applications and communicating with candidates.
            </li>
          </ul>
          <p className="mt-4  ml-1 text-md">
            This dual-focused design ensures that both user groups can navigate
            the hiring process seamlessly, meeting their unique needs and
            enhancing overall efficiency in the tech industry.{" "}
          </p>
        </div>

        <div className="my-5">
          <h1 className=" capitalize text-3xl ">design process</h1>
        </div>

        <div className="grid grid-cols-4 my-12 relative">
          {/* Second Box */}
          <div className="w-full flex-1 sm:w-[185px] flex flex-col items-center justify-start text-center space-y-2">
            <div className="flex items-center justify-center relative">
              <Image
                src={"/image/project/Group 1261152996.png"}
                alt=""
                width={110}
                height={100}
                quality={100}
              />

              <Image
                src={"/image/project/Line 70.png"}
                alt=""
                width={100}
                height={110}
                className="absolute top-1/2 -translate-y-1/2 -end-24"
              />
            </div>
            <p className="text-xl capitalize">discover</p>
            <p className="font-thin capitalize">
              {" "}
              user research <br /> competitive analysis{" "}
            </p>
          </div>

          {/* First Box */}
          <div className="w-full flex-1 sm:w-[185px] flex flex-col items-center justify-start text-center space-y-2">
            <div className="flex items-center justify-center relative">
              <Image
                src={"/image/project/Group 1261152997.png"}
                alt=""
                width={110}
                height={100}
                quality={100}
              />

              <Image
                src={"/image/project/Line 70.png"}
                alt=""
                width={100}
                height={110}
                className="absolute top-1/2 -translate-y-1/2 -end-24"
              />
            </div>
            <p className="text-xl capitalize">define</p>
            <p className="font-thin capitalize">
              {" "}
              personas <br /> empathy map{" "}
            </p>
          </div>

          {/* Third Box */}
          <div className="w-full flex-1 sm:w-[185px] flex flex-col items-center justify-start text-center space-y-2">
            <div className="flex items-center justify-center relative">
              <Image
                src={"/image/project/Group 1261152996.png"}
                alt=""
                width={110}
                height={100}
                quality={100}
              />
              <Image
                src={"/image/project/Line 70.png"}
                alt=""
                width={100}
                height={110}
                className="absolute top-1/2 -translate-y-1/2 -end-24"
              />
            </div>
            <p className="text-xl capitalize">ideate</p>
            <p className="font-thin capitalize">
              {" "}
              user flow <br /> card sorting{" "}
            </p>
          </div>

          {/* Arrow Between Third and Fourth Box */}

          {/* Fourth Box */}
          <div className="w-full flex-1 sm:w-[185px] flex flex-col items-center justify-start text-center space-y-2">
            <div className="flex items-center justify-center">
              <Image
                src={"/image/project/Group 1261152999.png"}
                alt=""
                width={110}
                height={100}
                quality={100}
              />
            </div>
            <p className="text-xl capitalize">design</p>
            <p className="font-thin capitalize">
              {" "}
              wireframes <br /> visual design{" "}
            </p>
          </div>
        </div>

        <section className=" ">
          <div className="">
            <h1 className="text-3xl font-semibold mb-4 text-center ">
              1. DISCOVER PHASE
            </h1>
            <div className="cuateBG rounded-2xl ">
              <div className="text-lg backdrop-blur-5xl shadow shadow-zinc-700     mb-4 bg-[#1a1a1a]  backdrop-filter backdrop-blur-md bg-opacity-80 w-full py-11 px-9 rounded-2xl ">
                <div className="flex items-center gap-2">
                  <h2 className="mb-2 ">
                    {" "}
                    <i> Qualitative Research :</i>{" "}
                  </h2>
                  <span className=" h-[1px] w-1/3 bg-white"> </span>
                </div>
                <p className="mb-4  tracking-wider">
                  To understand the needs of IT job seekers and recruiters, I
                  conducted user interviews and analyzed feedback from tech
                  industry professionals:
                </p>

                <div>
                  <h3 className="font-semibold mb-2">Job Seekers:</h3>
                  <ul className="list-disc list-inside space-y-2 tracking-wider text-sm">
                    <li>
                      How can they find relevant IT roles more easily on a
                      dedicated platform?
                    </li>
                    <li>
                      Can job descriptions be clearer and include skill-specific
                      filters?
                    </li>
                    <li>
                      How can the application process be streamlined to provide
                      status updates?
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Recruiters:</h3>
                  <ul className="list-disc list-inside space-y-2 tracking-wider text-sm">
                    <li>
                      How can they quickly filter candidates based on technical
                      skills and experience?
                    </li>
                    <li>
                      Can the job posting and application review process be more
                      efficient?
                    </li>
                    <li>
                      How can candidate communication be simplified for better
                      accessibility?
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-lg mb-4  bg-[#1a1a1a]  backdrop-filter backdrop-blur-md bg-opacity-80 w-full py-11 px-9 rounded-2xl shadow shadow-zinc-700">
              <div className="flex items-center gap-2">
                  <h2 className="mb-2 ">
                    {" "}
                    <i>Key Insights Derived from Interviews :</i>{" "}
                  </h2>
                  <span className=" h-[1px] w-1/3 bg-white"> </span>
                </div>
                

                <div>
                  <h3 className="font-semibold mb-2">For Job Seekers :</h3>
                  <ul className="list-disc list-inside space-y-2 tracking-wider text-sm">
                    <li>
                      There is a strong need for advanced filters to help
                      quickly identify relevant IT roles.
                    </li>
                    <li>
                      Users value a clear, streamlined application tracking
                      system to stay updated on application progress.{" "}
                    </li>
                    <li>
                      Personalized job recommendations can significantly enhance
                      their experience.
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Recruiters :</h3>
                  <ul className="list-disc list-inside space-y-2 tracking-wider text-sm">
                    <li>
                      Recruiters require detailed filtering options to assess
                      candidates&apos; technical skills effectively.
                    </li>
                    <li>
                      An efficient job posting process and streamlined
                      application management are essential.
                    </li>
                    <li>
                      Direct, accessible communication tools with applicants can
                      improve hiring timelines.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <QuantitativeResearch />

        <div className="text-lg mb-4 bg-[#1a1a1a]  backdrop-filter backdrop-blur-lg bg-opacity-90 w-full py-11 px-9 rounded-2xl shadow mt-11 cuateBG shadow-zinc-700">
          <h2 className="mb-2 ">
            {" "}
            <i>Key Insights from Quantitative Research :</i>{" "}
          </h2>

          <div>
            <h3 className="font-semibold mb-2">For Job Seekers :</h3>
            <ul className="list-disc list-inside space-y-2 tracking-wider text-sm">
              <li>
                Most users find it difficult to locate relevant IT jobs on
                standard platforms, highlighting the need for a specialized
                IT-focused job portal.{" "}
              </li>
              <li>
                A majority want real-time application tracking, indicating the
                importance of transparency in the hiring process.{" "}
              </li>
              <li>
                High demand for skill-specific filters and personalized job
                recommendations suggests these are essential features.{" "}
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Recruiters :</h3>
            <ul className="list-disc list-inside space-y-2 tracking-wider text-sm">
              <li>
                Difficulty in filtering candidates by technical skills
                emphasizes the need for advanced filtering tools.{" "}
              </li>
              <li>
                A simplified job posting process is valued, pointing to the need
                for efficiency in recruiter workflows.{" "}
              </li>
              <li>
                Recruiters highly prioritize in-platform communication, showing
                that direct candidate engagement is key to a smoother hiring
                process.{" "}
              </li>
            </ul>
          </div>
        </div>
        <Manash />
        <ManashEmptyMap />
        <Syantan />
        <SyanTanEmptyComponent />
        <Ideate />
        <Phase />
        <LastSection />
      </div>
    </div>
  );
};

export default page;
