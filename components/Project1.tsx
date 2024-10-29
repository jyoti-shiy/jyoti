import React from 'react';
import Image from 'next/image';


const Project1 = () => {
 

  return (
    <div className="relative mt-[260px] bg-[#232121] rounded-[15px] pt-32 px-3 sm:px-11 pb-11">
      <div className="absolute -lg:top-48 -top-36 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-[#282829] projectAbsoluteShadow border border-zinc-300 flex justify-center items-center">
        <div className="w-[70px] lg:w-[122px]">
          <Image src="/image/project/Screenshot (469).png" alt="Project Overview Icon" width={300} height={200} quality={100} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-9 items-center">
        <div className="w-full sm:w-[65%] fade-in from-left">
          <h1 className="text-xl sm:text-2xl mb-3 capitalize">Project Page Overview</h1>
          <p className="text-sm font-light text-[#B7B7B7]">
            Welcome to the Project page, where you can explore detailed case studies of my design work. Each project showcases 
            my approach to problem-solving, creativity, and user-centered design. Here, you will find insights into my design 
            process, from initial research and wireframing to final implementation. Dive into the narratives behind each project 
            to understand the challenges faced and the solutions developed. Whether you are a fellow designer, a potential client, 
            or simply curious, I invite you to explore my journey and the impact of my work.
          </p>
        </div>
        <div className="flex items-center justify-center fade-in from-right">
          <Image src="/image/project/Screenshot (466).png" alt="Project Screenshot" width={200} height={200} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-9 items-center mt-10">
        <div className="flex items-center justify-center fade-in from-left">
          <Image src="/image/project/image 36.png" alt="Gallery Screenshot" width={250} height={100} />
        </div>
        <div className="w-full sm:w-[65%] fade-in from-right">
          <h1 className="text-xl sm:text-2xl mb-3 capitalize">Gallery Page</h1>
          <p className="text-sm font-light text-[#B7B7B7]">
            Welcome to the Gallery page, where you can dive into my diverse range of design projects. This section showcases 
            my work across various fields, including UI/UX design, branding, and more. Each project reflects my creative process, 
            attention to detail, and commitment to delivering user-centered solutions. Feel free to browse through and get a closer 
            look at the designs and thought processes behind each piece.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-9 items-center mt-10">
        <div className="w-full sm:w-[65%] fade-in from-left">
          <h1 className="text-xl sm:text-2xl mb-3 capitalize">Art Gallery Site Overview</h1>
          <p className="text-sm font-light text-[#B7B7B7]">
            Welcome to the Art Gallery, a curated space where creativity meets inspiration. Here, you can explore a diverse 
            collection of artworks from various artists around the world. This platform is designed to celebrate the beauty of art, 
            providing a seamless browsing experience for art enthusiasts and collectors alike. Dive into the world of creativity, 
            discover new artists, and immerse yourself in the captivating stories behind each piece. Enjoy your journey through this 
            visual showcase!
          </p>
        </div>
        <div className="flex items-center justify-center fade-in from-right">
          <Image src="/image/project/Screenshot (471).png" alt="Art Gallery Screenshot" width={200} height={200} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-9 items-center mt-10">
        <div className="flex items-center justify-center fade-in from-left">
          <Image src="/image/project/image 35.png" alt="Stack Overview Screenshot" width={200} height={200} />
        </div>
        <div className="w-full sm:w-[65%] fade-in from-right">
          <h1 className="text-xl sm:text-2xl mb-3 capitalize">Stack Page Overview</h1>
          <p className="text-sm font-light text-[#B7B7B7]">
            Welcome to the Stack page, where you can discover the tools and technologies that power my design process. Here, 
            I showcase my proficiency in various design and development tools, including Figma, Adobe Creative Suite, and more. 
            Each tool plays a crucial role in bringing my creative visions to life, allowing me to create user-friendly and visually 
            appealing designs. Explore the stack that enhances my work and contributes to my ongoing growth as a designer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project1;
