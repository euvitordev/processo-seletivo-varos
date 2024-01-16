"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import bradVisorsIcon from "../../../assets/bradvisors.svg";
import fIcon from "../../../assets/f.svg";
import economicValorIcon from "../../../assets/economico-valor.svg";
import neoFeedIcon from "../../../assets/neofeed.svg";
import bmecNewsIcon from "../../../assets/bmec-news.svg";
import tcIcon from "../../../assets/tc.svg";

const cardIcons = [
  { image: bradVisorsIcon, alt: "" },
  { image: fIcon, alt: "" },
  { image: economicValorIcon, alt: "" },
  { image: tcIcon, alt: "" },
  { image: bmecNewsIcon, alt: "" },
  { image: neoFeedIcon, alt: "" },
];

export default function CardSlideAction() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardIcons.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mt-20 rounded-[36px] bg-gradient-to-r from-[#4D5358] to-transparent to-50% p-0.5 max-xl:max-w-xl max-lg:max-w-lg max-sm:w-[350px]">
        <div className="relative  flex w-full max-w-2xl items-center justify-start overflow-hidden rounded-[36px] bg-[#131313] ">
          <div className="z-50 bg-[#131313] p-6">
            <span className="items-center justify-center whitespace-nowrap font-normal text-[#B0B7BE]">
              visto em
            </span>
          </div>
          <div className="flex items-center gap-6 p-6">
            {cardIcons.map((item, index) => (
              <div
                key={index}
                className="flex w-32 items-center justify-center"
                style={{
                  transform: `translateX(${-currentIndex * 100}%)`,
                  transition: "transform 6s ease-in-out",
                }}
              >
                <Image src={item.image} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
