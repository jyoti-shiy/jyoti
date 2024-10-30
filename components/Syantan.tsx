import Image from "next/image";
import React from "react";

const Sayantan = () => {
  return (
    <div className="bg-[#1a1a1a] text-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto mt-11">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-semibold mb-2">
          <i>Recruiter's Personas :</i>
        </h1>
        <span className="w-3/5 bg-white h-[1px]"></span>
      </div>
      <p className="text-sm font-light mb-6">
        With the data collected from the interviews, I created two personas
        representing two ideal users of the Website. These personas helped me
        arrive at better solutions with an in-depth understanding of both types
        of users' goals, frustrations, and overall personality.
      </p>

      <div className="flex flex-col lg:flex-row gap-11">
        {/* Left Section with Image and Basic Info */}
        <div className="lg:flex lg:w-[60%] gap-3">
          <div className="flex-shrink-0">
            <div className="relative w-full rounded-lg overflow-hidden">
              <Image
                src="/image/project/Group 1261153106.png"
                alt="Persona"
                width={160}
                height={600}
                className="rounded-full"
              />
              <div className="font-thin tracking-wide">
                <p className="mt-2 text-xs">Age: 35</p>
                <p className="mt-1 text-xs">Profession: Recruiter <br /> of Betazen Info <br /> Tech Pvt Ltd</p>
                <p className="mt-1 text-xs">Location: West Bengal</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <h2 className="text-xl font-semibold mb-2">Sayantan Kar</h2>
            <p className="text-xs font-light mb-4 bg-zinc-800 rounded p-2 shadow shadow-zinc-700">
              Sayantan is responsible for recruiting IT talent for a rapidly
              growing tech startup. He's focused on hiring developers, data
              scientists, and other tech roles but finds general job portals
              lacking in candidate filtering specific to technical skills. His
              team is small, and efficiency is key.
            </p>

            {/* Traits Section */}
            <div className="flex gap-2 mb-2">
              <span className="bg-gradient-70 from-zinc-600 to-zinc-800 text-sm px-3 py-1 rounded font-thin tracking-wide shadow shadow-zinc-700">
                #decisive
              </span>
              <span className="bg-gradient-70 from-zinc-600 to-zinc-800 text-sm px-3 py-1 rounded font-thin tracking-wide shadow shadow-zinc-700">
                #strategic
              </span>
              <span className="bg-gradient-70 from-zinc-600 to-zinc-800 text-sm px-3 py-1 rounded font-thin tracking-wide shadow shadow-zinc-700">
                #empathetic
              </span>
            </div>

            {/* Personality Section */}
            <h3 className="text-lg font-medium mb-2">Personality</h3>
            <div className="gap-4 mb-4">
              <div className="flex justify-between">
                <span className="text-xs tracking-wider">Intuitive</span>
                <span className="text-xs tracking-wider">Observant</span>
              </div>
              <div className="w-full mt-1 h-1 rounded">
                <div
                  style={{
                    background: "linear-gradient(to right, #3b82f6 60%, white 40%)",
                    width: "100%",
                  }}
                  className="h-1 w-full rounded relative"
                >
                  <div className="absolute w-[10px] h-[10px] rounded-full -top-2 end-[39%] translate-y-1/2 bg-blue-700"></div>
                </div>
              </div>
            </div>

            <div className="gap-4 mb-4">
              <div className="flex justify-between">
                <span className="text-xs tracking-wider">Extrovert</span>
                <span className="text-xs tracking-wider">Introvert</span>
              </div>
              <div className="w-full mt-1 h-1 rounded">
                <div
                  style={{
                    background: "linear-gradient(to right, white 55%, #3b82f6 45%)",
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
          <div>
            <div>
              <h3 className="text-lg font-medium mb-2 mt-1">Goals</h3>
              <ul className="list-disc list-inside space-y-1 tracking-wider font-light text-xs">
                <li className="mb-4">
                  Quickly filter candidates by specific skills and experience levels.
                </li>
                <li className="mb-10">
                  Post job listings with minimal effort using a streamlined interface.
                </li>
                <li className="mb-4">
                  Communicate efficiently with candidates through a dedicated in-platform messaging system.
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Frustrations</h3>
              <ul className="list-disc list-inside space-y-1 font-light tracking-wider text-xs">
                <li className="mb-4">
                  Wasting time reviewing irrelevant applications due to lack of filtering.
                </li>
                <li className="mb-4">
                  Difficulty managing multiple postings and tracking application progress.
                </li>
                <li className="mb-4">
                  Limited tools for easy communication with promising candidates.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sayantan;
