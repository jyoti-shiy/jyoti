import Image from "next/image";
import React from "react";

const Ideate = () => {
  return (
    <div className="mt-11">
      <h1 className="text-center text-3xl uppercase"> 3. ideate phase </h1>
      <div className=" bg-[#4f4b4b] p-7 panaBG  backdrop-filter backdrop-blur-md bg-opacity-20   shadow-md rounded-2xl">
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-xl">
            {" "}
            <i> User Flow : </i>{" "}
          </h1>
          <span className="w-2/3 h-[1px] bg-white"></span>
        </div>
        <p className="font-thin">
          I created a flow , how two types of users navigate through the website{" "}
        </p>
        <div className="relative w-full h-[100vh]">
          <Image
            src={"/image/project/Group 1261153109.svg"}
            alt="flow"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>






      <div className=" bg-[#4f4b4b] p-7 panaBG mt-7  backdrop-filter backdrop-blur-md bg-opacity-20   shadow-md rounded-2xl">
        <div className="flex items-center  gap-3 justify-end mb-3">
            <span className="w-2/3 h-[1px] bg-white"></span>
          <h1 className="text-xl ">
            {" "}
            <i>: card sorting </i>{" "}
          </h1>
         
        </div>
        <p className="font-thin text-end">
        For a job portal tailored to IT job seekers and recruiters, a card sorting exercise can help organize content intuitively for users.
        </p>
        <div className="flex items-center justify-center mt-5">
  <div className="grid gap-8 w-full max-w-4xl md:grid-cols-2 lg:grid-cols-3 text-white">

    {/* Job Seeker's Dashboard Card Sorting */}
    <div className="bg-[#1a1a1a]  backdrop-filter backdrop-blur-md bg-opacity-20   shadow-md  p-6 rounded-lg shadow-zinc-700 hover:shadow-lg transform transition duration-150 ease-in-out">
    <h2 className="text-center font-semibold text-md mb-4">Job Seeker&apos;s Dashboard Card Sorting</h2>
    <button className="w-full py-2 bg-zinc-700 shadow shadow-zinc-800  backdrop-filter backdrop-blur-md bg-opacity-50 rounded-md mb-3  hover:scale-110 duration-150 ease-in-out">Available Job</button>
      <button className="w-full py-2 bg-zinc-700 shadow shadow-zinc-800  backdrop-filter backdrop-blur-md bg-opacity-50 rounded-md mb-3  hover:scale-110 duration-150 ease-in-out">Applied Job</button>
      <button className="w-full py-2 bg-zinc-700 shadow shadow-zinc-800  backdrop-filter backdrop-blur-md bg-opacity-50 rounded-md mb-3  hover:scale-110 duration-150 ease-in-out">Job Tracking</button>
      <button className="w-full py-2 bg-zinc-700 shadow shadow-zinc-800  backdrop-filter backdrop-blur-md bg-opacity-50 rounded-md mb-3  hover:scale-110 duration-150 ease-in-out">Expired Job</button>
     
    </div>

    

    {/* Non-Logged-In User Card Sorting */}
    <div className="bg-[#1a1a1a]  backdrop-filter backdrop-blur-md bg-opacity-20   shadow-md  p-6 rounded-lg shadow-zinc-700 hover:shadow-lg transform transition duration-150 ease-in-out">
      <h2 className="text-center font-semibold text-md mb-4">Non-Logged-In User Card Sorting</h2>
      <button className="w-full py-2 bg-zinc-700 shadow shadow-zinc-800  backdrop-filter backdrop-blur-md bg-opacity-50 rounded-md mb-3  hover:scale-110 duration-150 ease-in-out">Resume Builder</button>
      <button className="w-full py-2 bg-zinc-700 shadow shadow-zinc-800  backdrop-filter backdrop-blur-md bg-opacity-50 rounded-md mb-3  hover:scale-110 duration-150 ease-in-out">Template Choose</button> <button className="w-full py-2 bg-zinc-700 shadow shadow-zinc-800  backdrop-filter backdrop-blur-md bg-opacity-50 rounded-md mb-3  hover:scale-110 duration-150 ease-in-out">Fill Up Forms</button> <button className="w-full py-2 bg-zinc-700 shadow shadow-zinc-800  backdrop-filter backdrop-blur-md bg-opacity-50 rounded-md mb-3  hover:scale-110 duration-150 ease-in-out">Download CV</button>
     
    </div>

    {/* Recruiter's Dashboard Card Sorting */}
    <div className="bg-[#1a1a1a]  backdrop-filter backdrop-blur-md bg-opacity-20   shadow-md  p-6 rounded-lg shadow-zinc-700 hover:shadow-lg transform transition duration-150 ease-in-out">
    <h2 className="text-center font-semibold text-md mb-4">Recruiter&apos;s Dashboard Card Sorting</h2>

      <button className="w-full py-2 bg-zinc-700 shadow shadow-zinc-800  backdrop-filter backdrop-blur-md bg-opacity-50 rounded-md mb-3  hover:scale-110 duration-150 ease-in-out">Dashboard</button>
      <button className="w-full py-2 bg-zinc-700 shadow shadow-zinc-800  backdrop-filter backdrop-blur-md bg-opacity-50 rounded-md mb-3  hover:scale-110 duration-150 ease-in-out">Job Post</button>
      <button className="w-full py-2 bg-zinc-700 shadow shadow-zinc-800  backdrop-filter backdrop-blur-md bg-opacity-50 rounded-md mb-3  hover:scale-110 duration-150 ease-in-out">Candidate List</button>
      <button className="w-full py-2 bg-zinc-700 shadow shadow-zinc-800  backdrop-filter backdrop-blur-md bg-opacity-50 rounded-md mb-3  hover:scale-110 duration-150 ease-in-out">Blog</button>
     
    </div>


    

  </div>
</div>

      </div>
    </div>
  );
};

export default Ideate;
