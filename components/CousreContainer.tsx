"use client"

import { CourseContainerProps } from "@/types";
import { CustomButton } from ".";
import { useRouter } from 'next/navigation';

const CousreContainer = ( {image, title} : CourseContainerProps ) => {
  const router = useRouter();

    // api call  {useeffect, usestate}
    const handleClick = () => {
      // Navigate to the desired page
      router.push('/course');
    };
  return (
    <div className="bg-slate-50 text-black border-[2px] shadow-inner rounded-3xl min-w-[20svw] sm:w-[20svw] w-[200svw] h-[40svh] ">
      <div className=" px-2 pt-2 ">
        <img
          className="h-[30svh] w-full item-center rounded-3xl object-cover"
          src="https://skolar.in/static/media/courses/data-science-with-ml.png"
          // src={image}
          alt=""
        />
      </div>
      <div className="flex m">
      <h5 className="pl-4">
        <br />
        {title}
      </h5>
      <CustomButton
          title="Explore->"
          containerStyles="border-indigo-900 border-[2px] sm:ml-6 ml-16 duration-500 bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleClick}
        />
      </div>
      
    </div>
  );
};

export default CousreContainer;
