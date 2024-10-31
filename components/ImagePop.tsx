import Image from 'next/image'
import React from 'react'

const ImagePop = ({first}:{first:string}) => {
  return (
    <div>
       
        <div
          
          className=" w-[100%]  h-[60vh] bg-[#1a1a1a]  backdrop-filter backdrop-blur-lg bg-opacity-90 rounded-2xl shadow shadow-zinc-700"
        >
          <div className="w-[100%] h-[100%] relative">
            <Image
              src={first} // Update the image source as needed
              alt="Centered Image"
              layout="fill"
              objectFit="cover"
              className="lg:p-7 px-2 rounded-2xl"
            />
          </div>
        </div>
     
    </div>
  )
}

export default ImagePop
