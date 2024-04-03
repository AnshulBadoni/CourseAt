"use client";
import { useState } from "react";
import { CustomButton } from ".";

const Enrollcard = () => {
  const [copied, setCopied] = useState(false);
  const linkToCopy = "https://portfolio-anshul.netlify.app/"; 

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(linkToCopy);
      setCopied(true);
    } catch (err) {
      console.error("Unable to copy link", err);
    }
  };

  return (
    <div>
      <div className="border-2 shadow-lg rounded-md w-80 mx-6">
        <h3 className="font-bold text-xl text-[#414273] mx-8 mt-16">
          Start Now!
        </h3>
        <CustomButton
          title="Enroll for FREE"
          containerStyles="bg-primary-blue text-white font-bold rounded-lg my-5 mx-8 w-64"
        />
        <hr className="w-64 mx-8" />
        <p className="font-bold text-md text-[#414273] mx-8 mt-6">
          With this course, you will:
        </p>
        <ul className="font-semibold text-sm text-[#414273] mx-8 my-6">
          <li className="my-4">✔️ Learn the fundamentals of ML</li>
          <li className="my-4">✔️ Solve Challenges</li>
          <li className="my-4">✔️ Earn a professional certificate</li>
        </ul>
        <hr className="w-64 mx-8 mb-4" />
        <text className="text-sm text-[#414273] font-bold mx-8 ">
          {" "}
          🧊 Prerequisites
        </text>
        <p className="font-bold text-md text-blue-500 mx-8 mt-2">
          Learn Python Basics & 3 more
        </p>
        <hr className="w-64 mx-8 mb-4 mt-8" />
        <p className="font-bold text-md text-grey text-center my-8"
          onClick={handleCopyClick}
          role="button"
          tabIndex={0} 
          >
          {copied ? ' 🔗 Link coppied!' : ' 🔗 Share this course'}
      </p>
      </div>
    </div>
  );
};

export default Enrollcard;
