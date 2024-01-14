"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import bradVisorsIcon from "../../../assets/bradvisors.svg"
import fIcon from "../../../assets/f.svg"
import economicValorIcon from "../../../assets/economico-valor.svg"
import neoFeedIcon from "../../../assets/neofeed.svg"
import bmecNewsIcon from "../../../assets/bmec-news.svg"
import tcIcon from "../../../assets/tc.svg"

const cardIcons = [
  { image: bradVisorsIcon, alt: "" },
  { image: fIcon, alt: "" },
  { image: economicValorIcon, alt: "" },
  { image: tcIcon, alt: "" },
  { image: bmecNewsIcon, alt: "" },
  { image: neoFeedIcon, alt: "" },
]

export default function CardSlideAction() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardIcons.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="rounded-2xl w-full border-[#4D5358] border flex items-center justify-start gap-10 mt-20 overflow-hidden relative drop-shadow-2xl max-md:max-w-md max-sm:max-w-sm max-lg:max-w-lg max-xl:max-w-xl">
        <div className="z-50 bg-[#131313] w-full h-full p-6 flex items-center justify-center">
          <span className="text-[#B0B7BE] font-normal w-full items-center justify-center whitespace-nowrap">
            visto em
          </span>
        </div>
        <div
          className="flex transition-transform ease-in-out delay-150 duration-500 gap-28"
          style={{
            transform: `translateX(${
              -(150 / cardIcons.length) * currentIndex
            }%)`,
            transition: "transform 10s ease-in-out",
          }}
        >
          {cardIcons.map((item, index) => (
            <Image key={index} src={item.image} alt={item.alt} />
          ))}
        </div>
      </div>
    </>
  )
}
