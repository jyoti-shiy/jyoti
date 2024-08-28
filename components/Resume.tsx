import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Resume = () => {
  return (
    <div>
      <div className="circle flex justify-center items-center">
        <Link href="/jyoti.pdf" target='_blank' download="jyoti.pdf" className=""  >
        <Image className='fixed bottom-[12px] right-[11px]' src={"/image/icon/DownloadPackage.svg"} alt='dwonlod'width={24} height={24} /> 
      

        </Link>
      </div>
    </div>
  );
};

export default Resume;
