import { Highlighter, HomePage, Card } from "@/components";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <div className="relative flex-1 pt-[10svh] w-full ">
        <HomePage
          //  image="https://w.wallhaven.cc/full/kx/wallhaven-kxr3vd.jpg"
          // image="https://w.wallhaven.cc/full/o3/wallhaven-o37eqm.jpg"
          // image = "vid.mp4"
          // image="https://w.wallhaven.cc/full/yj/wallhaven-yjj2pg.jpg"
          image="hero-bg.png"
          title="A team of goliaths, mammals, and students"
          subtext="Unlike regular skill development, Skolar promises a practical walkthrough and know-how of things you have vague ideas about. With Skolar, we allow the students to experience a community of like-minds, backed by an unmatched teaching style."
        />
      </div>
      <div className="flex flex-wrap mt-12 mx-12 gap-5">
        <Card
          image="https://skolar.in/static/media/about/icons/1.png"
          title="Personalized programs"
          subtext="Quite humbly, Skolar equips you with the right resources and the right training programs."
        />
        <Card
          image="https://skolar.in/static/media/about/icons/1.png"
          title="Personalized programs"
          subtext="Quite humbly, Skolar equips you with the right resources and the right training programs."
        />
        <Card
          image="https://skolar.in/static/media/about/icons/1.png"
          title="Personalized programs"
          subtext="Quite humbly, Skolar equips you with the right resources and the right training programs."
        />
        <Card
          image="https://skolar.in/static/media/about/icons/1.png"
          title="Personalized programs"
          subtext="Quite humbly, Skolar equips you with the right resources and the right training programs."
        />
        <Card
          image="https://skolar.in/static/media/about/icons/1.png"
          title="Personalized programs"
          subtext="Quite humbly, Skolar equips you with the right resources and the right training programs."
        />
        <Card
          image="https://skolar.in/static/media/about/icons/1.png"
          title="Personalized programs"
          subtext="Quite humbly, Skolar equips you with the right resources and the right training programs."
        />
      </div>
      <div className="flex flex-wrap my-16 bg-black">
        <h2 className="sm:text-5xl text-xl font-bold mx-10 sm:my-28 my-8 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text animate-gradient">
          Our members-only skill development method will prepare you for
          employment opportunities, internships, and life in overall.
        </h2>
      </div>
      <Highlighter
        title="Meet our Team"
        containerStyles="text-center  ml-[45%] lg:w-[10svw] w-[33svw] h-[2svh] text-xs font-bold ml-6 duration-500 bg-teal-500 text-black rounded-full"
      />
      <h1 className="text-5xl font-bold my-8 text-center">
        Say Hi! to our team
      </h1>
      <p className="font-semibold my-8 text-center">
        Meet the noise behind the steering wheel
      </p>
      <div className="flex flex-wrap items-center justify-center py-6">
        <div className="w-[60svh] h-[15svh] flex flex-wrap rounded-3xl bg-green-50 border-solid border-2 border-green-500 mx-16 ">
          <div className="mx-10 my-5 w-20">
            <img
              className="rounded-full"
              src="https://media.licdn.com/dms/image/C4D03AQFvA5cDf7JSWg/profile-displayphoto-shrink_100_100/0/1663160786652?e=1710374400&v=beta&t=Ysftlq7NI3-uM1gDB2tSkp_bqGyRd7HsowTc70vs678"
              alt=""
            />
          </div>
          <div className="mx-8 my-8">
            <h3 className="text-2xl font-extrabold ">Anshul Badoni</h3>
            <p className="font-semibold">CEO & Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
