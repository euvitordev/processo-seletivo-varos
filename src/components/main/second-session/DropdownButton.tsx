import React from "react";
import Image from "next/image";

interface DropdownButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
  text: string;
  icon: string;
}

export default function DropdownButton({
  onClick,
  isOpen,
  text,
  icon,
}: DropdownButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={`flex w-full items-center justify-center gap-3 rounded-full border border-[#222729] bg-[#131516] px-8 py-4 text-lg transition-all delay-150 duration-150 ease-in-out hover:bg-[#222729] ${
          isOpen ? "bg-[#222729]" : "border border-[#222729] bg-[#131516]"
        }`}
      >
        {text}
        <Image
          src={icon}
          alt=""
          className={`transform ${
            isOpen
              ? "rotate-90 transition-all delay-150 duration-150 ease-in-out"
              : "rotate-0 transition-all delay-150 duration-150 ease-in-out"
          }`}
        />
      </button>
    </>
  );
}
