import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden px-3">
      <div>
        <h1 className="text-5xl mb-2 font-bold text-gray-200">About Jyoti</h1>
        <p className="text-[17px] text-[#858585] font-light my-11">
          Hello, I&rsquo;m Jyoti Shikary, a passionate and dedicated UI/UX
          Designer based in Bonga. With a background in nursing, I&rsquo;ve
          transitioned into the world of design, bringing a unique perspective
          to my work. My journey into UI/UX began out of a love for creativity
          and problem-solving, which I discovered during my time at Betazen
          Infotech in Kolkata.
        </p>

        <Image
          src="/image/home/jyoti.png"
          alt="me"
          width={400}
          height={400}
          quality={100}
          className="mx-auto  rounded-full border border-zinc-600 mt-11 mb-20"
        />

        <h1 className="text-xl">Experience : </h1>

        <ul className="mb-7">
          <li className="list-disc text-[#858585] ml-11 mt-3 ">
            Junior UI/UX Designer at Betazen Infotech, Kolkata.
          </li>
          <li className="list-disc text-[#858585] ml-11 ">
            8 months of hands-on experience in UI/UX design.
          </li>
          <li className="list-disc text-[#858585] ml-11 ">
            Worked on diverse projects, focusing on both user interface and user
            experience.
          </li>
        </ul>

        <h1 className="text-xl">Strengths : </h1>

        <ul className="mb-7">
          <li className="list-disc text-[#858585] ml-11 mt-3 ">
          Creating visually appealing and user-centric designs.
          </li>
          <li className="list-disc text-[#858585] ml-11 ">
          Collaborating with cross-functional teams.
          </li>
          <li className="list-disc text-[#858585] ml-11 ">
          Translating complex requirements into effective designs.
          </li>
        </ul>

        <h1 className="text-xl">Location : </h1>

        <ul className="">
          <li className="list-disc text-[#858585] ml-11 mt-3 ">
            state of west bengal, india
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
