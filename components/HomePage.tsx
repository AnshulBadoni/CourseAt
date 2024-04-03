import { Highlighter } from "@/components";
import { HomePageProps } from "@/types"

const HomePage = ({image,title,subtext}:HomePageProps) => {
  return (
    <div className="relative flex-1 w-full ">
      
      {/* <video autoPlay muted
        src={image}
        className="object-cover w-full h-[80svh]  "
      /> */}
      <img
        src={image}
        className="object-cover w-full h-[80svh]  "
      />
      <div className="absolute w-[105svw] h-[81svh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-gradient-to-b from-[#ffffff00] to-white">
      <Highlighter
          title="Be a step ahead"
          containerStyles="text-center sm:ml-[45%] ml-[25%] mt-36 lg:w-[10svw] w-[33svw] h-[2svh] text-xs font-bold duration-500 bg-amber-400 text-black rounded-full"
            />
        <h2 className="sm:text-4xl text-xl text-center font-bold mt-10">
          {title}
        </h2><br />
        <p className="mx-40 w-10/12 text-center ">{subtext}</p>
        <br />
        <Highlighter
          title="Let’s help you"
          containerStyles="text-center ml-[45%] mt-10 lg:w-[10svw] w-[33svw] h-[2svh] text-xs font-bold ml-6 duration-500 bg-teal-500 text-black rounded-full"
            />
      </div>      
    </div>
  );
};

export default HomePage;
