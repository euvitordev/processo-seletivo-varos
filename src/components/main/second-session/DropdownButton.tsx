import React from "react"
import Image from "next/image"

interface DropdownButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  isOpen: boolean
  text: string
  icon: string
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
        className={`bg-[#131516] border border-[#222729] px-8 py-4 rounded-full flex items-center gap-3 w-full justify-center text-lg hover:bg-[#222729] transition-all delay-150 duration-150 ease-in-out ${
          isOpen ? "bg-[#222729]" : "bg-[#131516] border border-[#222729]"
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
  )
}
