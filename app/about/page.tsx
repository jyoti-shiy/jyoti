import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden px-3">
      <div>
        <h1 className="text-5xl mb-2 font-bold text-gray-200">About Jyoti</h1>
        <p className="text-[17px] text-[#858585] font-light my-11">
          Hello, I&rsquo;m Jyoti Shikary, a passionate and dedicated UI/UX Designer based in Bonga. With a background in nursing, I&rsquo;ve transitioned into the world of design, bringing a unique perspective to my work. My journey into UI/UX began out of a love for creativity and problem-solving, which I discovered during my time at Betazen Infotech in Kolkata.
        </p>

        <Image src="/image/home/jyoti.png" alt='me' width={400} height={400} quality={100} className='mx-auto  rounded-full border border-zinc-600 mt-11 mb-20' />

        <p className="text-[17px] text-[#858585] font-light my-11">
          Over the past 7 months, I&rsquo;ve gained hands-on experience in both UI and UX design, working on a diverse range of projects. From crafting intuitive user interfaces to enhancing user experiences, I strive to create designs that are not only visually appealing but also user-centric. My ability to collaborate with cross-functional teams and translate complex requirements into effective designs has been a key asset in my role as a Junior UI/UX Designer.
        </p>
        <p className="text-[17px] text-[#858585] font-light my-11">
          I&rsquo;m proficient in tools like Photoshop, Figma, Illustrator, and Canva, which allow me to bring ideas to life with precision and creativity. My approach to design is both analytical and artistic, ensuring that each project I undertake is grounded in a deep understanding of user needs and business goals.
        </p>
        <p className="text-[17px] text-[#858585] font-light my-11">
          When I&rsquo;m not designing, I enjoy exploring new design trends, learning about the latest advancements in the field, and continuously improving my skill set. I&rsquo;m always eager to take on new challenges and contribute to projects that push the boundaries of design. Feel free to browse through my portfolio to see some of the work I&rsquo;ve done, and don&rsquo;t hesitate to reach out if you&rsquo;d like to collaborate!
        </p>
      </div>
    </div>
  );
};

export default Page;
