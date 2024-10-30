import Image from "next/image";
import React from "react";

const Phase = () => {
  return (
    <div>
      <div className=" flex items-center   justify-center  mt-5 ">
        <div className="max-w-4xl w-full pt-9 pb-11 px-8">
          <h1 className="text-center text-3xl uppercase mb-5 ">
            {" "}
            4. design phase{" "}
          </h1>
          <div className="flex items-center gap-3 ">
            <h2 className="text-xl  text-center mb-1  ">
              <i> high fidelity wireframes :</i>
            </h2>
            <span className="w-3/5 h-[1px] bg-white "></span>
          </div>
          <p className="  mb-6 font-thin">
            With the data collected from the interviews, I created Two persona
            representing two ideal users of the Website. This personas helped me
            arrived at better solutions as in depth understanding of the both
            two types of users goal, frustrations and overall personality.
          </p>
        </div>
      </div>

      <div className="relative w-full h-[100vh] panaBG bg-[#232323]  rounded-2xl px-5 ">
          <Image
            src={"/image/project/Group 1261153109.png"}
            alt="flow"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            className="lg:p-7"
          />
        </div>


        <div className="relative w-full mt-7 h-[40vh] panaBG bg-[#232323]  rounded-2xl px-5 ">
          <Image
            src={"/image/project/Group 1261153096.png"}
            alt="flow"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            className="lg:p-7"
          />
        </div>

        <div className="relative w-full mt-7 h-[40vh] panaBG bg-[#232323]  rounded-2xl px-5 ">
          <Image
            src={"/image/project/Group 1261153110 (1).png"}
            alt="flow"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            className="lg:p-7"
          />
        </div>
    </div>
  );
};

export default Phase;
