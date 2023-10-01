"use client"
import React, { createContext, useContext, useState } from "react";

interface Picture {
  name: string;
  imageURL: string;
}

interface GalleryContextType {
  gallery: Picture[];
  setGallery: React.Dispatch<React.SetStateAction<Picture[]>>;
}

export const GalleryContext = createContext<GalleryContextType | undefined>(
  undefined
);

export const GalleryProvider: React.FC = ({ children }) => {
  const [gallery, setGallery] = useState<Picture[]>([]);

  return (
    <GalleryContext.Provider value={{ gallery, setGallery }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GalleryContext)