import React, { useEffect } from 'react';

import Image from 'next/image';


const Project2 = () => {
 

  return (
    <div className="relative mt-[260px] bg-[#232121] rounded-[15px] pt-32 px-3 sm:px-11 pb-11">
      <div className="absolute -lg:top-48 -top-36 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-[#282829] projectAbsoluteShadow border border-zinc-300 flex justify-center items-center">
        <div className="w-[70px] lg:w-[122px]">
          <Image src="/image/project/image_30.png" alt="Astrology Icon" width={300} height={200} quality={100} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-9 items-center">
        <div className="w-full sm:w-[65%] fade-in from-left">
          <h1 className="text-xl sm:text-2xl mb-3">Unified Astrology: All Seven Principles in One Platform</h1>
          <p className="text-sm font-light text-[#B7B7B7]">
            Most astrology apps limit users to specific principles, requiring them to switch between multiple platforms for a complete experience. This platform eliminates this hassle by combining all seven astrological principles into one unified platform, delivering a comprehensive astrology experience effortlessly.
          </p>
        </div>
        <div className="flex items-center justify-center fade-in from-right">
          <Image src="/image/project/first_pic.png" alt="Astrology Features Screenshot" width={200} height={200} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-9 items-center mt-10">
        <div className="flex items-center justify-center fade-in from-left">
          <Image src="/image/project/second_block.png" alt="Astrology Matching Screenshot" width={600} height={200} />
        </div>
        <div className="w-full sm:w-[65%] fade-in from-right">
          <h1 className="text-xl sm:text-2xl mb-3">All-in-One Astrology and Compatibility Companion</h1>
          <p className="text-sm font-light text-[#B7B7B7]">
            Unlike most astrology apps, this platform combines daily horoscopes with astrology-based partner matching. Users can search for potential partners, check match percentages, and assess compatibility with their current partner, all within a distinct and personalized UI.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-9 items-center mt-10">
        <div className="w-full sm:w-[65%] fade-in from-left">
          <h1 className="text-xl sm:text-2xl mb-3">Revolutionizing Astrology</h1>
          <p className="text-sm font-light text-[#B7B7B7]">
            This platform stands out by offering real-time audio chat with astrologers, bridging the gap between daily horoscopes and personalized advice. Unlike many apps with limited interaction, this platform provides immediate, tailored guidance and a comprehensive astrological experience.
          </p>
        </div>
        <div className="flex items-center justify-center fade-in from-right">
          <Image src="/image/project/three_block.png" alt="Astrology Consultation Screenshot" width={200} height={200} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-9 items-center mt-10">
        <div className="flex items-center justify-center fade-in from-left">
          <Image src="/image/project/image_28.png" alt="Astrology Chart Screenshot" width={200} height={200} />
        </div>
        <div className="w-full sm:w-[65%] fade-in from-right">
          <h1 className="text-xl sm:text-2xl mb-3">Revolutionizing Astrology</h1>
          <p className="text-sm font-light text-[#B7B7B7]">
            This platform stands out by offering real-time audio chat with astrologers, bridging the gap between daily horoscopes and personalized advice. Unlike many apps with limited interaction, this platform provides immediate, tailored guidance and a comprehensive astrological experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project2;
