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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mt-20 rounded-[36px] bg-gradient-to-r from-[#4D5358] to-transparent to-50% p-0.5">
        <div className="relative  flex w-full max-w-2xl items-center justify-start gap-20 overflow-hidden rounded-[36px] bg-[#131313] max-xl:max-w-xl max-lg:max-w-lg max-md:max-w-md max-sm:w-80">
          <div className="z-50 flex h-full w-full items-center justify-center rounded-l-2xl border-2 border-[#131313] bg-[#131313] p-6">
            <span className="w-full items-center justify-center whitespace-nowrap font-normal text-[#B0B7BE]">
              visto em
            </span>
          </div>
          <div
            className="flex gap-28"
            style={{
              transform: `translateX(${
                -(100 / cardIcons.length) * currentIndex
              }%)`,
              transition: "transform 3s ease-in",
            }}
          >
            {cardIcons.map((item, index) => (
              <Image key={index} src={item.image} alt={item.alt} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
