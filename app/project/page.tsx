'use client'
import Project1 from "@/components/Project1";
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return (
    <div className="my-24 flex flex-col gap-7 blurAnimation">
      <div className="w-full bg-[#232121] rounded-[15px] justify-between p-5 items-center sm:p-11 gap-3 flex flex-col sm:flex-row border border-zinc-600">
        <div className="text w-full lg:w-[40%] flex flex-col gap-3 ">
          <h2 className="text-3xl font-semibold">Personal Portfolio</h2>
          <p className="text-[12px]">
            Welcome to my portfolio, where I highlight my UI/UX design expertise
            with a modern and minimalist approach. The design features dark mode
            and is fully responsive, ensuring a seamless experience across both
            mobile and desktop devices.
          </p>
          <div className="w-120px">
            <button className="bg-[#343333] hover:tracking-widest  transition-all duration-150  px-7 py-2 mt-2 rounded text-white " onClick={() => router.push('/project/portfolio')}>
              {" "}
              Explore{" "}
            </button>
          </div>
        </div>

        <div className="image w-[50%] cardAnimation">
          <Image
            src={"/image/project/iPad Pro mockup 13-inch left.png"}
            alt=""
            width={500}
            height={350}
          />
        </div>
      </div>




      <div className="w-full bg-[#232121] rounded-[15px] justify-between p-5 items-center sm:p-11 gap-3 flex flex-col sm:flex-row border border-zinc-600">
        <div className="text w-full lg:w-[40%] flex flex-col gap-3">
          <h2 className="text-3xl font-semibold">Astroknock App</h2>
          <p className="text-[12px]">
          A mobile application designed to offer users a comprehensive astrological experience, including daily horoscopes, personalized readings, compatibility reports, and detailed natal charts. 
          </p>
          <div className="w-120px">
            <button className="bg-[#343333]  px-7 hover:tracking-widest transition-all duration-150 py-2 mt-2 rounded text-white tracking-wide"  onClick={() => router.push('/project/astroknock')}>
              {" "}
              Explore{" "}
            </button>
          </div>
        </div>

        <div className="image w-[50%] cardAnimation">
          <Image
            src={"/image/project/iPad Pro mockup 13-inch left (1) 1.png"}
            alt=""
            width={500}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
