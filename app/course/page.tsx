import { Enrollcard, Highlighter } from "@/components";

const page = () => {
  return (
    // bg-gradient-to-l from-white to-pink-500
    <div className="pt-[20svh] px-14">
      <div className="flex flex-wrap rounded-md ">
        <div className="">
          <img
            className="mx-24 w-36 rounded-full hover:border-4 animation-blink hover:border-indigo-700 duration-100"
            src="https://static.vecteezy.com/system/resources/previews/002/459/198/large_2x/machine-learning-icon-for-web-vector.jpg"
            alt=""
          />
        </div>
        <div>
          <text className="font-extrabold text-orange-500 uppercase ">
            Course
          </text>
          <h1 className="font-black text-blue-950 text-4xl mt-4">
            Learn Machine Learninng
          </h1>
          <p className="mt-4 text-lg sm:w-[40svw] w-full font-semibold">
            Step into the world of Data Science by boosting your program's
            computational capabilities with this beginner-friendly NumPy course.
          </p>
          <div className="flex flex-wrap gap-4 ">
            <Highlighter
              title="📘 Level: Intermediate"
              containerStyles="text-center my-6 lg:w-[13svw] w-[33svw] h-[2svh] sm:text-xs text-[10px] font-bold duration-500 bg-blue-200 text-black rounded-md hover:shadow-xl shadow-inner duration-400"
            />
            <Highlighter
              title="🕙 Duration: 3 Weeks"
              containerStyles="text-center my-6 lg:w-[13svw] w-[33svw] h-[2svh] sm:text-xs text-[10px] font-bold duration-500 bg-[#ffe8d6] text-black rounded-md hover:shadow-xl shadow-inner duration-400"
            />
          </div>
          <h1 className="font-black text-blue-950 text-2xl mt-14">
            Course Content
          </h1>
           <div>
            <div className="flex flex-wrap my-8 font-bold text-lg">
                <p className="text-[#6501e5] mr-2">Chapter 1:</p>
                <p>Introduction</p>
            </div>
            <div className="flex flex-wrap my-8 font-bold text-lg">
                <p className="text-[#6501e5] mr-2">Chapter 2:</p>
                <p>Statiscs and Data Analysis</p>
            </div>
            <div className="flex flex-wrap my-8 font-bold text-lg">
                <p className="text-[#6501e5] mr-2">Chapter 3:</p>
                <p>Learning ML Algorithms</p>
            </div>
            <div className="flex flex-wrap my-8 font-bold text-lg">
                <p className="text-[#6501e5] mr-2">Chapter 4:</p>
                <p>Making a Project</p>
            </div>
           </div>
        </div>
        <Enrollcard />
      </div>
    </div>
  );
};

export default page;
