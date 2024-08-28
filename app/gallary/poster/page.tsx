import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
     <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden px-3 ">
      <div className="">
        <h1 className="text-5xl mb-2 font-bold text-gray-200">
        Various Type Of Posters
        </h1>
        <p className="text-[20px] text-[#858585] mt-7">
        Posters focused on digital services, highlighting API integration, automation, analytics, and security with modern visuals and clear, professional design.
        </p>
      </div>

      <div className="my-14">
        <div
          style={{ cursor: "pointer" }}
          className=" group overflow-hidden bg-zinc-900 rounded-lg my_border cardAnimation"
        >
          <div className=" overflow-hidden  homepageCardGradient flex justify-center items-center py-4 ">
            <Image
              src="/image/project/poster.png"
              width={800}
              height={300}
              quality={100}
              alt="Hero"
              className="transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>
          
        </div>

        

        



        
      </div>
      </div>
      </div>
  )
}

export default page
