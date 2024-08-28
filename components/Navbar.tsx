"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IFirstMenu {
  imageIcon: string;
  imageIcon2: string;
  nameOfItem: string;
  path?:string;
  id: string;
}

interface NavbarProps {
  widthsubstract: (v: boolean) => void;
  menubar:boolean
}

export default function Navbar({ widthsubstract ,menubar}: NavbarProps) {
  const [menuWidth, setMenuWidth] = useState<boolean>(true);
  const [menuName, setMenuName] = useState<string>("Explore");
  const [menuId, setMenuId] = useState<string>("Explore");
  const [hoverId, setHoverId] = useState<string | null>(null);

  const firstMenu: IFirstMenu[] = [
    {
      imageIcon: "/image/icon/explore.svg",
      imageIcon2: "/image/icon/Explore_gray.svg",
      nameOfItem: "Explore",
      path:"",
      id: "1",
    },
    {
      imageIcon: "/image/icon/Gallery_White.svg",
      imageIcon2: "/image/icon/galary.svg",
      nameOfItem: "Gallery",
      path:"gallary",
      id: "2",
    },
    {
      imageIcon: "/image/icon/projects_white.svg",
      imageIcon2: "/image/icon/projects.svg",
      nameOfItem: "Projects",
      path:"project",
      id: "3",
    },
    {
      imageIcon: "/image/icon/Stack_white.svg",
      imageIcon2: "/image/icon/stack.svg",
      nameOfItem: "Stack",
      path:"stack",
      id: "4",
    },
    {
      imageIcon: "/image/icon/about_white.svg",
      imageIcon2: "/image/icon/about.svg",
      nameOfItem: "About",
      path:"about",
      id: "5",
    },
  ];

  const contact: IFirstMenu[] = [
    {
      imageIcon: "/image/icon/email.svg",
      imageIcon2: "/image/icon/email.svg",
      nameOfItem: "Email",
      id: "6",
    },
    {
      imageIcon: "/image/icon/linkdin.svg",
      imageIcon2: "/image/icon/linkdin.svg",
      nameOfItem: "Linkdin",
      id: "7",
    },
    {
      imageIcon: "/image/icon/behance.svg",
      imageIcon2: "/image/icon/behance.svg",
      nameOfItem: "Behance",
      id: "8",
    },
  ];

  const [mobileNavbar, setMobileNavbar] = useState<boolean>(false)
  useEffect(()=>{
    menubar && setMobileNavbar(true)
    menubar ? setMenuWidth(true):setMenuWidth(false)
  },[menubar,mobileNavbar])

  return (
    <div
      className={`${menubar?'h-[100vh]':'h-[90vh] border-b-2 shadow-black shadow-2xl rounded-br-full'} fixed top-0 start-0  bg-zinc-900 border-r-2 border-zinc-600 z-40 ${mobileNavbar?"fixed  mobileexpand ":'fixed mobilesquez  '}  ${
        menuWidth ? "bounce-width" : "width-expand"
      } shadow`}
      style={{
        width: menuWidth ? "280px" : "80px",
      }}
    >
      <div className="flex flex-col h-screen justify-between py-4 relative">
        {menubar ?  <button
          className="expand rounded-full overflow-hidden  absolute -end-[15px] bg-zinc-900 text-white px-2 py-0 border border-zinc-600  flex jus items-center pb-1"
          onClick={() => {
            setMenuWidth(!menuWidth);
            widthsubstract(!menuWidth);
          }}
          onMouseEnter={() => setHoverId("toggle")}
          onMouseLeave={() => setHoverId(null)}
        >
          {menuWidth ? (
           "<"
          ) : (
            '>'
          )}
        </button> :<button className={`text-white bg-zinc-900 border-2 px-1 ${mobileNavbar?'text-[14px]':'text-[18px]'} rounded-full py-0 border-zinc-600 z-50"   ${mobileNavbar ?'absolute -right-3':'fixed top-2 start-1'}  `}  onClick={()=>setMobileNavbar(!mobileNavbar)} >
          {mobileNavbar?'<-':'->'}
          
        </button> }
        <div className="menu">
          <ul className="flex flex-col items-center">
            <li
              className={`flex items-center mt-1 ${menuWidth?"mb-7":"mb-3"} gap-3`}
              style={{
                width: menuWidth ? "255px" : "60px",
              }}
            >
              <Image
              quality={100}
                src="/image/home/jyoti.png"
                alt="ProfileImage"
                width={menuWidth ? 50 : 40}
                height={menuWidth ? 50 : 40}
                className={`rounded-full ${menuWidth ? "m-0" : "m-auto"}`}
              />
              {menuWidth && (
                <div className="profileName">
                  <p className="font-bold m-0 p-0 text-gray-300">Jyoti Shikary</p>
                  <p className=" m-0  p-0 font-thin text-gray-400">
                  UI/ UX designer
                  </p>
                </div>
              )}
            </li>
            {firstMenu.map((menuItem: IFirstMenu) => (
              <li
                key={menuItem.id}
                className={`flex justify-center relative  text-[14px] ${
                  menuName === menuItem.nameOfItem
                    ? "border border-zinc-700 rounded bg-zinc-800"
                    : "border-0"
                }  `}
                onMouseEnter={() => setMenuId(menuItem.id)}
                onMouseLeave={() => setMenuId("")}
                onClick={() => setMenuName(menuItem.nameOfItem)}
              >
                <Link
                  href={`/${menuItem.path}`} 
                  style={{
                    width: menuWidth ? "255px" : "60px",
                  }}
                  className={`flex rounded px-4 py-2  justify-between items-center  ${
                    menuWidth ? "bounce-widthFm" : "width-expandFm"
                  }`}
                >
                  <div className={`flex items-center justify-between ${menuWidth?'m-0':'m-auto'} gap-3`} >
                    <Image
                      src={
                        menuId === menuItem.id ||
                        menuName === menuItem.nameOfItem
                          ? menuItem.imageIcon
                          : menuItem.imageIcon2
                      }
                      alt="ProfileImage"
                      width={17}
                      quality={100}
                      height={17}
                      className={`rounded-pill `}
                    />
                    {menuWidth ? (
                      <p
                        className={`m-0 p-0  ${
                          menuId === menuItem.id ||
                          menuName === menuItem.nameOfItem
                            ? "text-white"
                            : "menuColor"
                        }`}
                      >
                        {menuItem.nameOfItem}
                      </p>
                    ):(
                      <>{(menuId===menuItem.id && menuName !== menuItem.nameOfItem) && <p
                        className={`m-0 p-0 border bg-zinc-800 textAnimation overflow-hidden border-zinc-700 px-4  absolute top-1 rounded-full start-[50px] ${
                          menuId === menuItem.id ||
                          menuName === menuItem.nameOfItem
                            ? "text-white"
                            : "menuColor"
                        }`}
                      >
                        {menuItem.nameOfItem}
                      </p>}</>
                    )}
                  </div>
                  {menuWidth && (
                    <div className="border border-zinc-500 rounded px-1 text-sm ">
                      <p
                        className={`m-0 p-0 ${
                          menuId === menuItem.id ||
                          menuName === menuItem.nameOfItem
                            ? "text-white"
                            : "menuColor"
                        }`}
                      >
                        {menuItem.id}
                      </p>
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col items-center">
            {menuWidth && (
              <li className={`flex justify-center relative mt-7 mb-4 `}>
                <button
                  style={{
                    width: menuWidth ? "255px" : "60px",
                  }}
                  className={`flex rounded px-4 py-2  justify-between items-center  ${
                    menuWidth ? "bounce-widthFm" : "width-expandFm"
                  }`}
                >
                  <div className="flex items-center gap-3 m-0 p-0">
                    <span className="text-[16px] text-zinc-400">CONTACT</span>
                  </div>
                </button>
              </li>
            )}

            {contact.map((menuItem: IFirstMenu) => (
              <li
                key={menuItem.id}
                className={`flex justify-center relative  ${
                  menuName === menuItem.nameOfItem
                    ? "border border-zinc-500 rounded bg-zinc-800"
                    : "border-0"
                }  `}
                onMouseEnter={() => setMenuId(menuItem.id)}
                onMouseLeave={() => setMenuId("")}
                onClick={() => {menuItem.id==='6' &&( window.location.href = "mailto:jyotishikary400@gmail.com?subject=Subject%20Here&body=Body%20Here");
                  menuItem.id==='7' &&( window.location.href = "https://www.linkedin.com/in/jyotishikary/");
                  menuItem.id==='8' &&( window.location.href = "https://www.behance.net/jyotishikary400_s")



                }
              
              
              }
              >
                <Link
                  href={"/"}
                  style={{
                    width: menuWidth ? "255px" : "60px",
                  }}
                  className={`flex rounded px-4 py-2  justify-between items-center  ${
                    menuWidth ? "bounce-widthFm" : "width-expandFm"
                  }`}
                >
                  <div className={`flex items-center gap-3 ${menuWidth?'m-0':'m-auto'} p-0`}>
                    <Image
                      src={
                        menuId === menuItem.id ||
                        menuName === menuItem.nameOfItem
                          ? menuItem.imageIcon
                          : menuItem.imageIcon2
                      }
                      alt="ProfileImage"
                      quality={100}
                      width={25}
                      height={25}
                      className="rounded-pill w-[20px]"
                    />
                    {menuWidth ? (
                      <p
                        className={`m-0 p-0  text-[14px] ${
                          menuId === menuItem.id ||
                          menuName === menuItem.nameOfItem
                            ? "text-white"
                            : "menuColor"
                        }`}
                      >
                        {menuItem.nameOfItem}
                      </p>
                    ):(
                      <>{(menuId===menuItem.id && menuName !== menuItem.nameOfItem) && <p
                        className={`m-0 p-0 border bg-zinc-800 textAnimation overflow-hidden border-zinc-700 px-4  absolute top-1 rounded-full start-[50px] ${
                          menuId === menuItem.id ||
                          menuName === menuItem.nameOfItem
                            ? "text-white"
                            : "menuColor"
                        }`}
                      >
                        {menuItem.nameOfItem}
                      </p>}</>
                    )}
                  </div>
                  {menuWidth && (
                    <div className="border border-zinc-500 rounded px-1 text-sm ">
                      <p
                        className={`m-0 p-0 ${
                          menuId === menuItem.id ||
                          menuName === menuItem.nameOfItem
                            ? "text-white"
                            : "menuColor"
                        }`}
                      >
                        {menuItem.id}
                      </p>
                    </div>
                  )}
                </Link>
              </li>
            ))}

            
          </ul>
        </div>
       
      </div>
    </div>
  );
}
