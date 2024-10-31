import Image from "next/image";
import React from "react";

const Phase = () => {
  return (
    <div>
      <div className=" flex items-center   justify-center  mt-5 ">
        <div className=" w-full pt-9 pb-11 ">
          <h1 className="text-center text-3xl uppercase mb-5 ">
            {" "}
            4. design phase{" "}
          </h1>
          <div className="flex items-center gap-3 ">
            <h2 className="text-xl  capitalize mb-1 text-start ">
              <i> high fidelity wireframes :</i>
            </h2>
            <span className="w-1/3 h-[1px] bg-white "></span>
          </div>
          <p className="  lg:mb-6 font-thin tracking-wider">
            With the data collected from the interviews, I created Two persona
            representing two ideal users of the Website. This personas helped me
            arrived at better solutions as in depth understanding of the both
            two types of users goal, frustrations and overall personality.
          </p>
        </div>
      </div>

      <div className="relative w-full lg:h-[100vh] h-[50vh] panaBG bg-[#1a1a1a]  backdrop-filter backdrop-blur-lg bg-opacity-90  rounded-2xl px-5 ">
          <Image
            src={"/image/project/Group 1261153109.png"}
            alt="flow"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            className="lg:p-7 px-4"
          />
        </div>


        <div className="relative w-full mt-7 h-[30vh] lg:h-[40vh] panaBG bg-[#1a1a1a]  backdrop-filter backdrop-blur-lg bg-opacity-90   rounded-2xl px-5 ">
          <Image
            src={"/image/project/Group 1261153096.png"}
            alt="flow"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            className="lg:p-7 px-4"
          />
        </div>

        <div className="relative w-full mt-7 lg:h-[40vh] h-[20vh] panaBG bg-[#1a1a1a]  backdrop-filter backdrop-blur-lg bg-opacity-90   rounded-2xl px-5 ">
          <Image
            src={"/image/project/Group 1261153110 (1).png"}
            alt="flow"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            className="lg:p-7 px-4"
          />
        </div>
    </div>
  );
};

export default Phase;
