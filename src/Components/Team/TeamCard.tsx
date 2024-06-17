import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  possition: string;
  name: string;
}

const TeamCard = ({ image, possition, name }: Props) => {
  return (
    <div className="">
      <Image
        src={image}
        alt={name}
        height={400}
        width={400}
        className=" rounded-md mx-auto"
      />
      <h1 className=" text-[40px] text-gray-800 mt-[1.5rem] text-center font-bold  ">
        {name}
      </h1>
      <p className="mt-[0.4rem] m-[0.4rem] px-4 py-1 bg-green-600 text-white mx-auto w-fit font-semibold ">
        {possition}
      </p>
      <p className=" text-center md:w-[70%] mx-auto text-gray-600 mt-[1rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
        aliquam?
      </p>
    </div>
  );
};

export default TeamCard;
