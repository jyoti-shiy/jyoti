import Image from "next/image";
import React from "react";

const LastSection = () => {
  return (
    <div className=" bg-[#4f4b4b] p-7 panaBG mt-11  backdrop-filter backdrop-blur-md bg-opacity-20   shadow-md rounded-2xl">
      <div className="flex items-center gap-3 mb-3 justify-end">
        <span className="w-2/3 h-[1px] bg-white"></span>
        <h1 className="text-xl ">
          {" "}
          <i>: card sorting </i>{" "}
        </h1>
      </div>
      <p className="font-thin text-end">
        first i sketched the low fidelity wireframes on paper after making
        correction, i moved on designing the high fidelity wireframes using
        figma
      </p>

      <div className="h-[100vh] flex mt-8">
        <div className="flex-1">
        <div className="relative w-full h-[20vh]">
          <Image
            src={"/image/project/Frame 1000014577.png"}
            alt="flow"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        <div className="relative w-full h-[20vh] ">
          <Image
            src={"/image/project/Frame 1000014576.png"}
            alt="flow"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        <div className="relative lg:w-[50%] h-[20vh] ">
          <Image
            src={"/image/project/Frame 1000014575.png"}
            alt="flow"
            layout="fill"
            objectFit="contain"
            objectPosition="left start"
          />
        </div>

        <div className="relative lg:w-[20%] h-[40vh]">
          <Image
            src={"/image/project/image 356.png"}
            alt="flow"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>



        
        </div>
        <div className="relative w-[110px] h-[100vh]">
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
