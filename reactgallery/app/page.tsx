"use client";
import { useState,useEffect } from "react";
import { useGlobalContext } from "./gallerycontext";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const {gallery,setGallery} = useGlobalContext();
  const [nameValue, setNameValue] = useState("");
  const [urlValue, setUrlValue] = useState("");

  interface Picture{
    name: String,
    imageURL:String
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nameValue);
    console.log(urlValue);
    const newImage : Picture = {
      name: nameValue,
      imageURL: urlValue
    };
    console.log(gallery)
    setGallery((prevGallery) => [...prevGallery, newImage]);
    setNameValue("");
    setUrlValue("");
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlValue(e.target.value);
  };

  return (
    <div className="min-h-screen bg-[#CBFFA9] flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:text-6xl text-3xl font-bold drop-shadow-2xl -mt-20 "
      >
        Welcome to the Gallery
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="lg:h-[500px] h-[500px] lg:w-[1000px] w-[325px] lg:flex-row flex-col flex items-center justify-evenly mt-5 drop-shadow-2xl rounded-2xl bg-[#FFFEC4]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          className="lg:h-[450px] h-[400px] lg:w-[700px] w-[290px] flex flex-col justify-center  rounded-3xl bg-[#FFD6A5]"
        >
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="lg:flex-row flex-col flex mb-10 lg:mb-20">
              <h2 className="lg:text-3xl  font-semibold lg:mr-6 ">
                {" "}
                Image Name:{" "}
              </h2>
              <input
                value={nameValue}
                onChange={handleChange}
                className=" text-black rounded-lg lg:text-2xl "
              />
            </div>

            <div className="lg:flex-row flex-col flex mb-10 lg:mb-20">
              <h2 className="lg:text-3xl font-semibold lg:mr-6 ">
                {" "}
                Image URL:{" "}
              </h2>
              <input
                value={urlValue}
                onChange={handleUrlChange}
                className=" text-black rounded-lg lg:w-[350px] lg:text-2xl "
              />
            </div>

            <button
              type="submit"
              className="hover:scale-110 transition-transform lg:w-[300px] w-[200px] lg:h-[100px] h-[50px] lg:text-5xl  rounded-3xl bg-[#9BE8D8] "
            >
              Submit
            </button>
          </form>
        </motion.div>
        <Link href={"/Gallery"}>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          className="lg:h-[200px] h-[50px] lg:w-[200px] w-[75px] flex justify-center hover:scale-110 transition-transform items-center  rounded-3xl bg-[#FF9B9B]"
          >
          <h1 className="text-white lg:text-5xl"> Go! </h1>
        </motion.button>
          </Link>
      </motion.div>
    </div>
  );
}
