"use client";
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  return (
    <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden px-3">
      <div className="">
        <h1 className="text-5xl mb-2 font-bold text-gray-200">
          Dashboard Design
        </h1>
        <p className="text-[20px] text-[#858585]">
          Discover and acquire a diverse range of art while receiving personalized advice to perfectly match your style and space—all at affordable prices.
        </p>
      </div>

      <div className="flex flex-wrap gap-5 my-14 justify-center">
        <div
          style={{ cursor: "pointer" }}
          className="w-full sm:w-[400px] group overflow-hidden bg-zinc-900 rounded-lg my_border cardAnimation"
        >
          <div className="h-[300px] overflow-hidden homepageCardGradient flex justify-center items-center">
            <Image
              src="/image/home/dahboard.png"
              width={500}
              height={300}
              quality={100}
              alt="Hero"
              className="transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>
        </div>

        <div
          style={{ cursor: "pointer" }}
          className="w-full sm:w-[400px] group overflow-hidden bg-zinc-900 rounded-lg my_border cardAnimation"
        >
          <div className="h-[300px] overflow-hidden homepageCardGradient flex justify-center items-center">
            <Image
              src="/image/project/darkdashboard.png"
              width={600}
              height={300}
              quality={100}
              alt="Hero"
              className="transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      <h1 className="text-[30px] mb-4 font-bold text-gray-200">Overview</h1>
      <div className="w-full bg-[#232121] rounded-[15px] p-11 gap-3 border border-zinc-600">
        <ul className=" relative">
          
          <li className="mb-5 text-[#C8C8C8] font-light list-disc ">
          Dashboard design for seller management.
          </li>
          <li className="mb-5 text-[#C8C8C8] font-light list-disc">
            Features an intuitive interface with charts for sales and analytics.
          </li>
          <li className="mb-5 text-[#C8C8C8] font-light list-disc">
            Includes key metrics like visitors, orders, product views, and conversion rate.
          </li>
          <li className="mb-5 text-[#C8C8C8] font-light list-disc">
            Side navigation for easy access to products, orders, customers, and sales data.
          </li>
          <li className="mb-5 text-[#C8C8C8] font-light list-disc">
            To-do list and balance overview integrated for efficient workflow management.
          </li>
        </ul>
      </div>

      <section className="my-7">
        <p className="text-slate-50 mb-5 text-2xl">New Drops</p>
        <div className="flex flex-wrap gap-5 justify-center">
          <div
            style={{ cursor: "pointer" }}
            className="w-full sm:w-[400px] group overflow-hidden bg-zinc-900 rounded-lg border-zinc-700 border cardAnimation"
            onClick={() => router.push('/gallary/paper-craft')}
          >
            <div className="h-[235px] overflow-hidden homepageCardGradient flex justify-center items-center">
              <Image
                src="/image/home/artgalary.png"
                width={500}
                height={300}
                quality={100}
                alt="Hero"
                className="transition-transform duration-300 transform group-hover:scale-110 p-5"
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

          <div
            style={{ cursor: "pointer" }}
            className="w-full sm:w-[400px] group overflow-hidden bg-zinc-900 rounded-lg border-zinc-700 border cardAnimation"
            onClick={() => router.push('/gallary/food')}
          >
            <div className="h-[235px] overflow-hidden homepageCardGradient flex justify-center items-center">
              <Image
                src="/image/home/foodZone.png"
                width={500}
                height={270}
                quality={100}
                alt="Hero"
                className="transition-transform duration-300 transform group-hover:scale-110 p-16"
              />
            </div>
            <div className="p-5 flex justify-between items-end">
              <div>
                <h1 className="text-slate-50 text-xl">Food Zone Site</h1>
                <p className="text-zinc-600 text-md text-[13px] leading-snug">
                  Welcome to Food Zone, where culinary artistry meets convenience—explore and order exquisite dishes crafted to satisfy your cravings, from breakfast to dinner.
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
