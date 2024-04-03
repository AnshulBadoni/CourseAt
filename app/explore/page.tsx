"use client"
import { useRef } from "react";
import { CousreContainer } from "@/components";

const Page = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 500; // Adjust the scroll amount as needed
      const currentScrollLeft = scrollContainerRef.current.scrollLeft;
      const newScrollLeft =
        direction === "left"
          ? currentScrollLeft - scrollAmount
          : currentScrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth", // Add smooth scrolling animation
      });
    }
  };

  return (
    <>
        <div className="pt-36">
      <div className="mb-16 mx-20 ">
        <h1 className="font-bold text-xl mb-6 text-[#172554]">
          Learning AI {"->"}
        </h1>
        <div
          className="relative overflow-x-auto flex flex-row overflow-y-hidden h-[45svh] gap-8 scrollhide"
          ref={scrollContainerRef}
        >
          {[...Array(10)].map((_, index) => (
            <CousreContainer
              key={index}
              image="/pattern.png"
              title="Foundation Of AI"
            />
          ))}
        </div>
        <div className="absolute gap-[85svw] -translate-y-64 -translate-x-6 flex justify-between items-center text-white">
          <button
            className="mr-2 px-2 py-1 bg-blue-900 rounded-full w-16 h-16 border-2 border-green-100"
            onClick={() => handleScroll("left")}
          >
            L
          </button>
          <button
            className="px-2 py-1 border bg-blue-900 rounded-full w-16 h-16"
            onClick={() => handleScroll("right")}
          >
            R
          </button>
        </div>
      </div>
    </div>
    <div className="pt-3">
      <div className="mb-16 mx-20 ">
        <h1 className="font-bold text-xl mb-6 text-[#172554]">
          Learning Web Development {"->"}
        </h1>
        <div
          className="relative overflow-x-auto flex flex-row overflow-y-hidden h-[45svh] gap-8 scrollhide"
          ref={scrollContainerRef}
        >
          {[...Array(10)].map((_, index) => (
            <CousreContainer
              key={index}
              image="/pattern.png"
              title="Foundation Of AI"
            />
          ))}
        </div>
        <div className="absolute gap-[85svw] -translate-y-64 -translate-x-6 flex justify-between items-center text-white">
          <button
            className="mr-2 px-2 py-1 bg-blue-900 rounded-full w-16 h-16 border-2 border-green-100"
            onClick={() => handleScroll("left")}
          >
            L
          </button>
          <button
            className="px-2 py-1 border bg-blue-900 rounded-full w-16 h-16"
            onClick={() => handleScroll("right")}
          >
            R
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;
