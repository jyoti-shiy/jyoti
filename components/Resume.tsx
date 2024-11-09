import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Resume = () => {
  return (
    <div>
      <div className="circle">
        <Link href="/jyoti.pdf" target='_blank' download="jyoti.pdf" className=""  >
        <Image className=' grayscale opacity-35 ' src={"/image/icon/DownloadPackage.svg"} alt='dwonlod'width={24} height={24} /> 
      

        </Link>
      </div>
    </div>
  );
};

export default Resume;
