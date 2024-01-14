import React from "react"
import Image from "next/image"

interface Option {
  text: string
  icon: string
  description: string
  image: string
}

interface DropdownItemsProps {
  options: Option[]
  onSelect: (index: number) => void
  selectedOption: Option | null
}

export default function DropdownItems({
  options,
  onSelect,
  selectedOption,
}: DropdownItemsProps) {
  return (
    <>
      <div className="bg-[#131516] border-2 border-[#222729] p-8 rounded-3xl flex flex-col items-start w-full justify-center text-lg gap-6 ">
        {options.map((item, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`rounded-full flex items-center gap-4 w-fit justify-start text-base p-6 hover:bg-[#222729]/50 transition-all delay-150 duration-150 ease-in-out ${
              selectedOption?.text === item.text ? "bg-[#222729]/50" : ""
            }`}
          >
            <Image src={item.icon} alt="" />
            {item.text}
          </button>
        ))}
      </div>
    </>
  )
}
