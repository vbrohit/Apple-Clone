import React from "react";
import { IoLogoApple } from "react-icons/io5";
import Button from "../MainComp/Button";

const Product = () => {
  const data = [
    {
      id: "1",
      heading: "AirPods Pro 3",
      heading2: "",
      info1: "The world best in-ear",
      info2: "Active Noise Cancellation.",
   
      tCol: "black",
    },
    {
      id: "2",
      heading: (
        <span className="flex items-center">
          <IoLogoApple /> Watch
        </span>
      ),
      heading2: "Series 11",
      info1: "The ultimate watch for",
      info2: "a healthy life.",
  
      tCol: "",
    },
    {
      id: "3",
      heading: (
        <span className="flex items-center">
          <IoLogoApple /> WATCH
        </span>
      ),
      heading2: "SE 3",
      info1: "Walk it. Talk it. Traack it. Love it.",
     
      tCol: "",
    },
    {
      id: "4",
      heading: (
        <span className="flex items-center">
          <IoLogoApple /> WATCH
        </span>
      ),
      heading2: "ULTRA3",
      info1: "Personal beast.",
      
      tCol: "white",
    },
    {
      id: "5",
      heading: "iPad",
      heading2: "air",
      info1: "Now supercharged by the M3 chip.",
      tCol: "",
    },
    {
      id: "6",
      heading: (
        <span className="flex items-center">
          <IoLogoApple /> Trade In
        </span>
      ),

      info1: "Upgrade and save.",
      info2: "it's that easy.",
      tCol: "",
    },
  ];
  return (
    <>
      <div className="relative w-[100%] grid grid-cols-1 gap-3 sm:grid-cols-2 p-2.5 pt-1 ">
        {data.map((val) => (
          <div
            key={val.id}
            className="w-[100%] h-[540px]  flex flex-col gap-2 justify-between  relative"
            style={{
              color: `${val.tCol}`,
              overflow: "hidden",
            }}
          >
 <div className="w-full h-full ">
              <img
                className="h-[100%] w-[100%] "
                style={{ mixBlendMode: `${val.mode}` }}
                src={`/product${val.id}.jfif`}
                alt=""
                loading="lazy"
              />
            </div>

            <div className="w-[100%] flex flex-col items-center gap-2 absolute mt-6">
              <span className="flex gap-2 items-center h-fit">
                <h1 className="text-2xl font-bold sm:text-3xl ">
                  {val.heading}
                </h1>
                <h1 className="text-2xl sm:text-3xl">{val.heading2}</h1>
              </span>
              <span className="leading-5">
                <p className="text-center">{val.info1}</p>
                <p className="text-center">{val.info2}</p>
              </span>
              <p className="text-gray-500 text-[13px]">{val.date}</p>
              <Button val={["Learn more", "Pre-Order"]} />
            </div>
           
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
