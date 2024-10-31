"use client";
import Image from 'next/image';
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import ImagePop from '@/components/ImagePop';

const Page = () => {
  const router = useRouter();
  type Img = {
    id: number;
    src: string;
    alt: string;
    width: number;
    height: number;
  };

  const imageData: Img[] = [
    { id: 1, src: "/image/project/food zone 1.png", alt: "Food Zone 1", width: 300, height: 300 },
    { id: 2, src: "/image/project/food.png", alt: "Food", width: 300, height: 300 },
  ];
  const [first, setfirst] = useState(imageData[0].src);

  return (
    <div className="px-3 ">
      <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden">
        <div>
          <h1 className="text-5xl mb-2 font-bold text-gray-200">
            Food Zone Site
          </h1>
          <p className="text-[20px] text-[#858585] mt-7">
            Welcome to Food Zone, where culinary artistry meets convenience—explore and order exquisite dishes crafted to satisfy your cravings, from breakfast to dinner.
          </p>
        </div>

        <div className="mt-8">
        <ImagePop first={first} />
      </div>

        <div className="flex gap-5 flex-wrap my-14 justify-center">
      {imageData.map((image) => (
        <div
          key={image.id}
          style={{ cursor: "pointer" }}
          className="w-full sm:w-[400px] group overflow-hidden bg-zinc-900 rounded-lg my_border cardAnimation"
          onClick={() => {
            setfirst(image.src);
            window.scrollTo({ top: 80, behavior: "smooth" });
          }}
        >
          <div className="h-[300px] overflow-hidden homepageCardGradient flex justify-center items-center">
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              quality={100}
              alt={image.alt}
              className="transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default Page;
