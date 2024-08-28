import Image from 'next/image';
import React from 'react';

const Page = () => {
  interface Thought {
    icon: string;
    title: string;
    service: string;
  }

  const social: Thought[] = [
    {
      icon: "/image/icon/ps.png",
      title: "Adobe Photoshop",
      service: "Designing Tool",
    },
    {
      icon: "/image/icon/adove.png",
      title: "Adobe Illustrator",
      service: "Designing Tool",
    },
    {
      icon: "/image/icon/canva.png",
      title: "Canva",
      service: "Designing Tool",
    },
    {
      icon: "/image/icon/figma.png",
      title: "Figma",
      service: "Designing Tool",
    },
  ];

  return (
    <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden px-3">
      <div className="">
        <h1 className="text-5xl mb-2 font-bold text-gray-200">Stack</h1>
        <p className="text-[20px] text-[#858585]">
          Tools and resources I use daily.
        </p>
      </div>

      <div className='border border-zinc-700 p-5 rounded-2xl mt-10'>
        <h1 className='text-xl mb-4 pl-4'>Design</h1>
        <div className="flex flex-wrap gap-4">
          {social.map((thought: Thought, index: number) => (
            <button
              key={index}
              className={`flex gap-4 border border-transparent rounded-md py-3 px-4 items-center ${
                index % 2 === 0 ? "w-full sm:w-[45%]" : "w-full sm:w-[45%]"
              }`}
            >
              <div className="w-[37px] h-[37px] rounded-lg overflow-hidden">
                <Image
                  src={thought.icon}
                  alt={thought.service}
                  width={37}
                  height={37}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-slate-50 font-bold text-start text-sm my-0 p-0">
                  {thought.title}
                </h1>
                <p className="text-zinc-500 font-semibold text-[14px] text-start m-0 p-0">
                  {thought.service}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className='border border-zinc-700 p-5 rounded-2xl mt-10'>
        <h1 className='text-xl mb-4 pl-4'>Artificial Intelligence</h1>
        <div className="flex flex-wrap gap-4">
          <button
            className='flex gap-4 border border-transparent rounded-md py-3 px-4 items-center'
          >
            <div className="w-[37px] h-[37px] rounded-lg overflow-hidden">
              <Image
                src={"/image/icon/chatgpt.png"}
                alt={"Chat GPT"}
                width={39}
                height={39}
                className="rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-slate-50 font-bold text-start text-sm my-0 p-0">
                Chat GPT
              </h1>
              <p className="text-zinc-500 font-semibold text-[14px] text-start m-0 p-0">
                Open AI
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
