"use client";
import ImagePop from "@/components/ImagePop";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  type Img = {
    id: number;
    src: string;
    alt: string;
  };

  const imageData: Img[] = [
    { id: 1, src: "/image/project/paper1.png", alt: "Paper 1" },
    { id: 2, src: "/image/project/paper2.png", alt: "Paper 2" },
    { id: 3, src: "/image/project/paper3.png", alt: "Paper 3" },
    { id: 4, src: "/image/project/paper4.png", alt: "Paper 4" },
  ];

  const [first, setfirst] = useState(imageData[0].src);

  return (
    <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden px-3 relative">
      <div>
        <h1 className="text-5xl mb-7 font-bold text-gray-200">
          Paper Crafting Site
        </h1>
        <p className="text-[20px] text-[#858585]">
          Experience the joy of creating and appreciating handcrafted decorative
          objects, where every piece tells a unique story crafted with care and
          creativity.
        </p>
      </div>
    <div className="mt-8">

      <ImagePop first={first} />
    </div>


      <div className="flex flex-wrap gap-5 my-14 justify-center">
        {imageData.map((src, index) => (
          <div
            key={index}
            style={{ cursor: "pointer" }}
            className="w-full sm:w-[400px] group overflow-hidden bg-zinc-900 rounded-lg my_border cardAnimation"
            onClick={() => {
              setfirst(src.src);
              window.scrollTo({ top: 80, behavior: "smooth" });
            }}
            
          >
            <div className="h-[300px] overflow-hidden homepageCardGradient flex justify-center items-center">
              <Image
                src={src.src}
                width={500}
                height={300}
                quality={100}
                alt="Gallery Image"
                className="transition-transform duration-300 transform group-hover:scale-110 p-5"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="paperCraftGradient rounded-[12px] my_border flex justify-center items-center p-5">
        <div
          style={{ cursor: "pointer" }}
          className="w-full sm:w-[400px] group overflow-hidden bg-zinc-900 rounded-lg my_border cardAnimation"
        >
          <div className="h-[250px] overflow-hidden homepageCardGradient flex justify-center items-center">
            <iframe
              width="400"
              height="250"
              src="https://www.youtube.com/embed/Rd5kY0qweC0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; picture-in-picture"
              allowFullScreen
              className="transition-transform duration-300 transform group-hover:scale-110"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
