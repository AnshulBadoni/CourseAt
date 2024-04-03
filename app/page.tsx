import { CousreContainer, Hero, Highlighter } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="flex justify-center items-center">
        <Highlighter
          title="Let's get introduced"
          containerStyles="text-center lg:w-[12svw] w-[45svw] h-[2svh] text-xs font-bold ml-6 duration-500 bg-amber-400 text-black rounded-full mb-8"
        />
      </div>
      <div className="mx-auto w-[65svw] text-center">
        <h3 className="sm:text-5xl text-2xl font-bold">
          An unmatched skill development program, meant for all
        </h3>
        <p className="mt-8">
          CourseAt, unlike regular skill development, also introduces you to
          relevant opportunities in your career. This means extensive training
          programs, comprehensive skill development programs, regular placement
          training, and of course, resources to help you prepare.
        </p>{" "}
        <br />
        <p> 📓 15+ comprehensive courses</p>
        <br />
        <p> 🎯 Skill development programs for all domains</p>
      </div>

      <div className="mt-12 padding-y max-width" id="courses">
        <h1 className="lg:text-4xl text-2xl text-center font-bold">
          Find the course that you like.
        </h1>
        <div className="flex justify-center items-center mt-8">
          <Highlighter
            title="Explore Us"
            containerStyles="text-center lg:w-[9svw] w-[30svw] h-[2svh] text-xs font-bold ml-6 duration-500 bg-amber-400 text-black rounded-full"
          />
        </div>
        <div className="py-16 items-center justify-center gap-16 flex flex-wrap sm:w-[1440px] w-96 sm:mx-0 mx-16">
          <CousreContainer
            image="pattern.png"
            title="Foundation Of AI"
          />
          <CousreContainer
            image="pattern.png"
            title="Foundation Of AI"
          />
          <CousreContainer
            image="pattern.png"
            title="Foundation Of AI"
          />
          <CousreContainer
            image="pattern.png"
            title="Foundation Of AI"
          />
        </div>
      </div>
    </main>
  );
}
