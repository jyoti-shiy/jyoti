"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return (
    <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden px-3">
      <div className="">
        <h1 className="text-5xl mb-2 font-bold text-gray-200">Gallery</h1>
        <p className="text-[20px] text-[#858585]">
          Explore my collection of demo projects and posters, where creativity
          meets design. Each piece reflects my journey and growth as a designer,
          showcasing diverse styles and concepts.
        </p>
      </div>

      <section className="my-7">
        <p className="text-slate-50 mb-5 text-2xl">New Drops</p>
        <div className="flex flex-wrap gap-5">
          <div
            style={{ cursor: "pointer" }}
            className="w-full sm:w-[400px] group overflow-hidden bg-zinc-900 rounded-lg border-zinc-700 border cardAnimation"
            onClick={() => router.push('/gallary/art-gallary')}
          >
            <div className="h-[235px] overflow-hidden homepageCardGradient flex justify-center items-center">
              <Image
                src="/image/home/1.png"
                width={300}
                height={200}
                quality={100}
                alt="Hero"
                className="transition-transform duration-300 transform group-hover:scale-110 p-9"
              />
            </div>
            <div className="p-5 flex justify-between items-end">
              <div>
                <h1 className="text-slate-50 text-xl">Art Gallery Site</h1>
                <p className="text-zinc-600 text-md text-[13px] leading-snug">
                  This art platform landing page highlights a curated collection of global artworks. The design offers both dark and light themes, emphasizing visual appeal while guiding users to explore and discover new art.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ cursor: "pointer" }}
            className="w-full sm:w-[400px] group overflow-hidden bg-zinc-900 rounded-lg border-zinc-700 border cardAnimation"
            onClick={() => router.push('/gallary/dashboard')}
          >
            <div className="h-[235px] overflow-hidden homepageCardGradient flex justify-center items-center">
              <Image
                src="/image/home/2.png"
                width={400}
                height={270}
                quality={100}
                alt="Hero"
                className="transition-transform duration-300 transform group-hover:scale-110 p-4"
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
        </div>
      </section>

      <section className="my-7">
        <p className="text-slate-50 mb-5 text-2xl">More Drops</p>
        <div className="flex flex-wrap gap-5">
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
                height={240}
                quality={100}
                alt="Hero"
                className="transition-transform duration-300 transform group-hover:scale-110 p-11"
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

          <div
            style={{ cursor: "pointer" }}
            className="w-full sm:w-[400px] group overflow-hidden bg-zinc-900 rounded-lg border-zinc-700 border cardAnimation"
            onClick={() => router.push('/gallary/poster')}
          >
            <div className="h-[210px] overflow-hidden homepageCardGradient flex justify-center items-center">
              <Image
                src="/image/project/poster.png"
                width={500}
                height={500}
                quality={100}
                alt="Hero"
                className="transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>
            <div className="p-5 flex justify-between items-end">
              <div>
                <h1 className="text-slate-50 text-xl">Various Types Of Posters</h1>
                <p className="text-zinc-600 text-md text-[13px] leading-snug">
                  This art platform landing page highlights a curated collection of global artworks. The design offers both dark and light themes, emphasizing visual appeal while guiding users to explore and discover new art.
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
