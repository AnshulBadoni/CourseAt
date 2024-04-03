"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import { useEffect, useRef, useState } from "react";
import Banner from "./Banner";
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/course');
  };
  const handleabout = () => {
    router.push('/about');
  };

  const [changingText, setChangingText] = useState<string>("Your Journey");
  useEffect(() => {
    const replaceWord = ["With Data science", "With Mern Stack", "With Data Structure"];
    let index = 0;
    const intervalId = setInterval(() => {
      setChangingText(`${replaceWord[index]}`);
      index = (index + 1) % replaceWord.length;
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero">
      <div className="flex-1 pt-[24svh] padding-x">
        <h1 className="text-[40px] font-extrabold animate-pulse duration-1000">
          Ready to start{" "}
          {changingText}
        </h1>
        <br />
        <text className="hero_subtitle">
          Make your learning experience easy and enjoyable.
        </text>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore amet quam voluptates inventore illo doloremque possimus repellendus animi nobis eius, cumque qui ducimus veniam unde, repellat excepturi delectus placeat!</p>
        <div className="flex">
        <CustomButton
          title="Explore Courses"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 mx-1"
          handleClick={handleClick}
        />
        <CustomButton
          title="About Us"
          containerStyles="border-blue-900 border-[2px] duration-500 hover:bg-primary-blue hover:text-white text-black rounded-full mt-10"
          handleClick={handleabout}
        /></div>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        {/* <div className="hero__image-overlay absolute top-0 right-0 " /> */}
        
      </div>
    </div>
    
  );
};
export default Hero;