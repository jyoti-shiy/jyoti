"use client"
import Link from "next/link";
import React from "react";
import Clock from "./Clock";
interface NavbarProps {
  menuWidth: boolean;
}

export default function Footer({ menuWidth }: NavbarProps) {
  return (
    <div
      className={`bg-zinc-900 ${
        menuWidth ? "lg:px-52 px-10" : "px-20 lg:px-72"
      }  border-zinc-600 border-t`}
    >
      <div className="lg:flex  py-11 w-full ">
        <ul className="text-gray-200 flex flex-wrap  text-[16px] lg:text-[22px] justify-start lg:justify-between lg:gap-9 gap-3    text    ">
         
          <li className="hover:text-white  pr-5 border-r transition-all duration-150 w-auto ">
            {" "}
            <Link href={"/"}>Explore</Link>{" "}
          </li>
          <li className="hover:text-white  pr-5 border-r transition-all duration-150 w-auto ">
            {" "}
            <Link href={"/gallary"}>Gallary
            </Link>{" "}
          </li>
          <li className="hover:text-white  pr-5 border-r transition-all duration-150 w-auto ">
            {" "}
            <Link href={"project"}>Project</Link>{" "}
          </li>
          <li className="hover:text-white  pr-5 border-r transition-all duration-150 w-auto ">
            {" "}
            <Link href={"/stack"}>Stack</Link>{" "}
          </li>
          <li className="hover:text-white  transition-all duration-150 w-auto ">
            {" "}
            <Link href={"#"}>About</Link>{" "}
          </li>
        </ul>

        
      </div>

      <div className=" ">
        <ul className="flex justify-between border-b w-full gap-10 ">
             <div className="flex-1 py-11 ">

            <div className="flex items-center gap-2 text-gray-300 ">
              Currently 🧑🏼‍💻 working <div className="activeWorking"></div>{" "}
            </div>
            <button
              onClick={()=>window.location.href = "mailto:jyotishikary400@gmail.com?subject=Subject%20Here&body=Body%20Here"}
              className="text-zinc-700 hover:text-white transition-all duration-150"
            >
              Reach Out {"-->"}
            </button>
           </div>

          <div className="flex-1 text-zinc-700 py-11">
            <Clock />
          </div>
        </ul>

        
      </div>
      
    </div>
  );
}
