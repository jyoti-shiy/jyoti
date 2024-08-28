"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return (
    <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden px-3">
      <div className="">
        <h1 className="text-5xl mb-2 font-bold text-gray-200">
          Art Gallery Site
        </h1>
        <p className="text-[20px] text-[#858585]">
          Discover and acquire a diverse range of art while receiving
          personalized advice to perfectly match your style and space—all at
          affordable prices.
        </p>
      </div>

      <div className="flex flex-wrap gap-5 my-14 justify-center">
        <div
          style={{ cursor: "pointer" }}
          className="w-full sm:w-[400px] group overflow-hidden bg-zinc-900 rounded-lg my_border cardAnimation"
        >
          <div className="h-[300px] overflow-hidden homepageCardGradient flex justify-center items-center">
            <Image
              src="/image/project/1st box.png"
              width={500}
              height={300}
              quality={100}
              alt="Hero"
              className="transition-transform duration-300 transform group-hover:scale-110 p-5"
            />
          </div>
        </div>

        <div
          style={{ cursor: "pointer" }}
          className="w-full sm:w-[400px] group overflow-hidden bg-zinc-900 rounded-lg my_border cardAnimation"
        >
          <div className="h-[300px] overflow-hidden homepageCardGradient flex justify-center items-center">
            <Image
              src="/image/project/2nd box.png"
              width={500}
              height={300}
              quality={100}
              alt="Hero"
              className="transition-transform duration-300 transform group-hover:scale-110 p-5"
            />
          </div>
        </div>

        <div
          style={{ cursor: "pointer" }}
          className="w-full sm:w-[400px] group overflow-hidden bg-zinc-900 rounded-lg my_border cardAnimation"
        >
          <div className="h-[300px] overflow-hidden homepageCardGradient flex justify-center items-center">
            <Image
              src="/image/project/3rd box.png"
              width={500}
              height={300}
              quality={100}
              alt="Hero"
              className="transition-transform duration-300 transform group-hover:scale-110 p-5"
            />
          </div>
        </div>

        <div
          style={{ cursor: "pointer" }}
          className="w-full sm:w-[400px] group overflow-hidden bg-zinc-900 rounded-lg my_border cardAnimation"
        >
          <div className="h-[300px] overflow-hidden homepageCardGradient flex justify-center items-center">
            <Image
              src="/image/project/4th box.png"
              width={500}
              height={300}
              quality={100}
              alt="Hero"
              className="transition-transform duration-300 transform group-hover:scale-110 p-5"
            />
          </div>
        </div>
      </div>

      <h1 className="text-[30px] mb-4 font-bold text-gray-200">Overview</h1>
      <div className="w-full bg-[#232121] rounded-[15px] p-11 gap-3 border border-zinc-600">
        <ul className=" relative">
          <li className="mb-5 text-[#C8C8C8] font-light list-disc">
           <strong className="text-zinc-300 font-semibold"> Comprehensive Art Collection :</strong> Browse and explore a diverse range of art forms including paintings, photography, drawings, and sculptures.
          </li>
          <li className="mb-5 text-[#C8C8C8] font-light list-disc">
          <strong className="text-zinc-300 font-semibold"> Buy and Sell Art : </strong>    Easily purchase or sell artwork through a user-friendly platform.
          </li>
          <li className="mb-5 text-[#C8C8C8] font-light list-disc">
          <strong className="text-zinc-300 font-semibold">Art Advisory Services : </strong>   Receive personalized advice from specialists to find artwork that complements.
          </li>
          <li className="mb-5 text-[#C8C8C8] font-light list-disc">
          <strong className="text-zinc-300 font-semibold">Affordable Pricing : </strong>   Enjoy access to high-quality art at very competitive prices.
          </li>
        </ul>
      </div>

      <section className="my-7">
        <p className="text-slate-50 mb-5 text-2xl">New Drops</p>
        <div className="flex flex-wrap gap-5 justify-center">
          <div
            style={{ cursor: "pointer" }}
            className="w-full sm:w-[400px] group overflow-hidden bg-zinc-900 rounded-lg border-zinc-700 border cardAnimation"
            onClick={() => router.push('/gallary/dashboard')}
          >
            <div className="h-[235px] overflow-hidden homepageCardGradient flex justify-center items-center">
              <Image
                src="/image/home/2.png"
                width={500}
                height={270}
                quality={100}
                alt="Hero"
                className="transition-transform duration-300 transform group-hover:scale-110 p-5"
              />
            </div>
            <div className="p-5 flex justify-between items-end">
              <div>
                <h1 className="text-slate-50 text-xl">Dashboard Design</h1>
                <p className="text-zinc-600 text-md text-[13px] leading-snug">
                  This dashboard delivers key e-commerce analytics through vibrant charts, offering insights at a glance with both dark and light themes for user flexibility.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ cursor: "pointer" }}
            className="w-full sm:w-[400px] group overflow-hidden bg-zinc-900 rounded-lg border-zinc-700 border cardAnimation"
            onClick={() => router.push('/gallary/paper-craft')}
          >
            <div className="h-[235px] overflow-hidden homepageCardGradient flex justify-center items-center">
              <Image
                src="/image/home/artgallary.png"
                width={500}
                height={300}
                quality={100}
                alt="Hero"
                className="transition-transform duration-300 transform group-hover:scale-110 p-3"
              />
            </div>
            <div className="p-5 flex justify-between items-end">
              <div>
                <h1 className="text-slate-50 text-xl">Paper Crafting Site</h1>
                <p className="text-zinc-600 text-md text-[13px] leading-snug">
                  Experience the joy of creating and appreciating handcrafted decorative objects, where every piece tells a unique story crafted with care and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
