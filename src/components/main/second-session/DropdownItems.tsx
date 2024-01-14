import React from "react";
import Image from "next/image";

interface Option {
  text: string;
  icon: string;
  description: string;
  image: string;
}

interface DropdownItemsProps {
  options: Option[];
  onSelect: (index: number) => void;
  selectedOption: Option | null;
}

export default function DropdownItems({
  options,
  onSelect,
  selectedOption,
}: DropdownItemsProps) {
  return (
    <>
      <div className="flex w-full flex-col items-start justify-center gap-6 rounded-3xl border-2 border-[#222729] bg-[#131516] p-8 text-lg ">
        {options.map((item, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`flex w-fit items-center justify-start gap-4 rounded-full p-6 text-base transition-all delay-150 duration-150 ease-in-out hover:bg-[#222729]/50 ${
              selectedOption?.text === item.text ? "bg-[#222729]/50" : ""
            }`}
          >
            <Image src={item.icon} alt="" />
            {item.text}
          </button>
        ))}
      </div>
    </>
  );
}
