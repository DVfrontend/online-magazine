'use client'

// import data from "@/data/carousel.json";
// import { useEffect, useState } from "react";
// import type { Carousel } from "@/types";
import Image from "next/image";

const images = [
  '@/images/data/carousel/carousel1.jpeg',
  '@/images/data/carousel/carousel2.jpeg',
  '/images/data/carousel/carousel3.jpeg',
  '/images/data/carousel/carousel4.jpeg',
  '/images/data/carousel/carousel5.jpeg',
  '/images/data/carousel/carousel6.jpeg',
]

function Carousels() {
  // const [carousel, setCarousel] = useState<Carousel[]>([]);

  // useEffect(() => {
  //   setCarousel(data);
  // }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Проекты</h1>
      {/* <ul className="list-disc"> */}
        {/* {carousel.map((carousel) => (
          <li key={carousel.id}>
            <b>{carousel.title}</b>
          </li>
        ))} */}
        {images.map((src, index) => (
        <Image key={index} src={src} alt={`Slide ${index + 1}`} />
      ))}
      {/* </ul> */}
    </div>
  );
}

export default Carousels;