"use client"
import { useGlobalContext } from "../gallerycontext";
import { useState,useContext } from "react";
import { motion } from "framer-motion";
export default function Gallery(){

    const {gallery} = useGlobalContext();

    function ImgCard (props){
        return(
            <article className="group">
  <img
    alt={props.name}
    src={props.imageURL}
    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
  />

  <div className="p-4">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
       {props.name}
      </h3>
    </a>

   
  </div>
</article>
        )
    }

    return(
        <div className="bg-[#CBFFA9] min-h-screen flex-col md:flex-row flex lg:gap-20 flex-wrap basis-1/3 gap-10 justify-center items-center">
            
            {gallery.map((e)=>{
                return(
                    <ImgCard name={e.name} imageURL={e.imageURL} />
                )
            })}
            
        </div>
    )
}