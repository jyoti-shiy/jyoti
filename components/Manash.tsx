import Image from "next/image";
import React from "react";

const Manash = () => {
  return (
    <div className="bg-[#1a1a1a] text-white rounded-xl  p-8 shadow-lg max-w-4xl mx-auto mt-11 ">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-semibold mb-2">
          {" "}
          <i> Job Seeker&apos;s Personas :</i>

        </h1>
        <span className="w-3/5 bg-white h-[1px]"></span>
      </div>
      <p className="text-sm font-light mb-6">
      With the data collected from the interviews, I created two personas
  representing two ideal users of the Website. These personas helped me
  arrive at better solutions with an in-depth understanding of the two
  types of users&apos; goals, frustrations, and overall personality.
      </p>

      <div className="flex flex-col lg:flex-row gap-11 ">
        {/* Left Section with Image and Basic Info */}
        <div className="lg:flex lg:w-[60%] gap-3">
          <div className="flex-shrink-0">
          <div className="relative w-full lg:rounded-lg overflow-hidden flex lg:flex-col lg:block items-center">
  <Image
    src="/image/project/Group 1261153008.png"
    alt="Persona"
    width={160}
    height={600}
    className="rounded-full"
  />
  <div className="lg:font-thin lg:tracking-wide ml-4 lg:ml-0 mt-2 lg:mt-0 text-sm lg:text-xs flex flex-col">
    <p className="mt-2 lg:mt-2 text-base lg:text-xs font-normal">Age : 31</p>
    <p className="mt-1 lg:mt-1 text-base lg:text-xs font-normal">Profession : Frontend</p>
    <p className="mt-1 lg:mt-1 text-base lg:text-xs font-normal">Location : West Bengal</p>
  </div>
</div>

          </div>
          <div className="flex flex-col flex-1">
            <h2 className="text-xl font-semibold mb-2">Manash Barai</h2>
            <p className="text-xs tracking-wider mb-4 bg-zinc-800 rounded p-2 shadow shadow-zinc-700 font-thin ">
              Manash is an experienced frontend developer actively searching for
              opportunities in tech companies where she can grow her skill set
              and work on innovative projects. She often struggles to find jobs
              tailored to her specific skills and spends a lot of time sorting
              through irrelevant postings on generic job portals.
            </p>

            {/* Traits Section */}
            <div className="flex gap-2 mb-2">
              <span className="bg-gradient-70 from-zinc-600 to-zinc-800  text-sm px-3 py-1 rounded font-thin tracking-wide shadow shadow-zinc-700 ">
                #confident
              </span>
              <span className="bg-gradient-70 from-zinc-600 to-zinc-800  text-sm px-3 py-1 rounded font-thin tracking-wide shadow shadow-zinc-700">
                #proactive
              </span>
              <span className="bg-gradient-70 from-zinc-600 to-zinc-800  text-sm px-3 py-1 rounded font-thin tracking-wide shadow shadow-zinc-700">
                #adaptable
              </span>
            </div>

            {/* Personality Section */}
            <h3 className="text-lg font-medium mb-2">Personality</h3>
            <div className=" gap-4 mb-4">
              <div className="flex justify-between">
                <span className="text-xs tracking-wider">Intuitive</span>
                <span className="text-xs tracking-wider">Observant</span>
              </div>
              <div className="w-full mt-1 h-1 rounded ">
                <div
                  style={{
                    background:
                      "linear-gradient(to right, #3b82f6 60%, white 40%)",
                    width: "100%",
                  }}
                  className="h-1 w-full rounded relative"
                >
                  <div className="absolute w-[10px] h-[10px] rounded-full -top-2 end-[39%] translate-y-1/2 bg-blue-700"></div>
                </div>
              </div>
            </div>

            <div className=" gap-4 mb-4">
              <div className="flex justify-between">
                <span className="text-xs tracking-wider">Extrovert</span>
                <span className="text-xs tracking-wider">Introvert</span>
              </div>
              <div className="w-full mt-1 h-1 rounded ">
                <div
                  style={{
                    background:
                      "linear-gradient(to right,  white 55%, #3b82f6 45%)",
                    width: "100%",
                  }}
                  className="h-1 w-full rounded relative"
                >
                  <div className="absolute w-[10px] h-[10px] rounded-full -top-2 end-[45%] translate-y-1/2 bg-blue-700"></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Right Section with Details */}
        <div className="lg:w-[40%]">
          {/* Goals and Frustrations */}
          <div className="">
            <div>
              <h3 className="text-lg font-medium mb-2 mt-1">Goals</h3>
              <ul className="list-disc list-inside space-y-1 tracking-wider font-light text-xs">
                <li className="mb-4">
                  Quickly find job listings relevant to her skills in frontend
                  development.
                </li>
                <li className="mb-10">
                  Track application status in real-time to avoid following up
                  multiple times.
                </li>
                <li className="mb-4">
                  Receive personalized job recommendations that align with her
                  experience and goals.
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Frustrations</h3>
              <ul className="list-disc list-inside space-y-1  font-light tracking-wider  text-xs">
                <li className="mb-4">
                  Spending too much time filtering out non-IT jobs on general
                  job portals.
                </li>
                <li className="mb-4">
                  Lack of clear application status updates, leading to
                  uncertainty.
                </li>
                <li className="mb-4">
                  Limited visibility into which jobs are a good match based on
                  her profile.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manash;
