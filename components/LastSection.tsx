import Image from "next/image";
import React from "react";

const LastSection = () => {
  return (
    <div className=" bg-[#1a1a1a]  backdrop-filter backdrop-blur-lg bg-opacity-90 p-7 panaBG mt-11    shadow-md rounded-2xl">
      <div className="flex items-center gap-3 mb-3 justify-end">
        <span className="w-1/3 h-[1px] bg-white"></span>
        <h1 className="text-xl capitalize ">
          {" "}
          <i>: card sorting </i>{" "}
        </h1>
      </div>
      <p className="font-thin text-end">
        first i sketched the low fidelity wireframes on paper after making
        correction, i moved on designing the high fidelity wireframes using
        figma
      </p>

      <div className="lg:h-[100vh] h-[65vh] lg:flex mt-8">
        <div className="flex-1">
        <div className="relative w-full lg:h-[20vh] h-[15vh]">
          <Image
            src={"/image/project/Frame 1000014577.png"}
            alt="flow"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        <div className="relative w-full lg:h-[20vh] h-[15vh] ">
          <Image
            src={"/image/project/Frame 1000014576.png"}
            alt="flow"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        <div className="relative w-[50%] lg:h-[20vh] h-[12vh] ">
          <Image
            src={"/image/project/Frame 1000014575.png"}
            alt="flow"
            layout="fill"
            objectFit="contain"
            objectPosition="left start"
          />
        </div>

        <div className="relative w-[20%] h-[20vh] lg:h-[40vh]">
          <Image
            src={"/image/project/image 356.png"}
            alt="flow"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>



        
        </div>
        <div className="relative opacity-0 lg:opacity-100 w-[110px] lg:h-[100vh] h-[60vh] ">
          <Image
            src={"/image/project/click2Hires (2) 1.png"}
            alt="flow"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
};

export default LastSection;
