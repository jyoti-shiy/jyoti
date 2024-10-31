'use client'
import Image from "next/image";
import { useState } from "react";

export default function MagnifierImage() {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Specify the event type for mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { offsetX, offsetY, target } = e.nativeEvent;

    // Cast target to HTMLElement
    const element = target as HTMLElement;
    const { offsetWidth, offsetHeight } = element;

    // Calculate the percentage positions
    const x = (offsetX / offsetWidth) * 100;
    const y = (offsetY / offsetHeight) * 100;

    setPosition({ x, y });
  };

  // Specify the event type for touch move
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    // Calculate touch position in percentages
    const x = ((touch.clientX - left) / width) * 100;
    const y = ((touch.clientY - top) / height) * 100;

    setPosition({ x, y });
  };

  return (
    <div
      className="relative w-full lg:h-[100vh] h-[40vh] overflow-hidden "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => setIsHovering(false)}
      onTouchMove={handleTouchMove}
    >
      <Image
        src={"/image/project/Group 1261153109.svg"}
        alt="flow"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className={` transition-transform duration-300 ${
          isHovering ? "scale-150" : "scale-100"
        }`}
        style={{
          transformOrigin: `${position.x}% ${position.y}%`,
        }}
      />
    </div>
  );
}
