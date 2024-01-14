import React from "react"
import Image from "next/image"
import acoesDoCDI from "./../../../assets/acoes-do-cdi.svg"

interface Option {
  text: string
  icon: string
  description: string
  image: string
  title: string
}

interface SelectedOptionBlockProps {
  selectedOption: Option | null
}

export default function SelectedOptionBlock({
  selectedOption,
}: SelectedOptionBlockProps) {
  return (
    <>
      <div className="w-full flex justify-end h-fit">
        <div className="xl:max-w-2xl bg-[#131516] border-2 border-[#222729] rounded-3xl flex flex-col items-start w-full justify-between pl-12 max-lg:w-full">
          <div className="flex items-center gap-4 mt-12">
            {selectedOption?.icon && (
              <Image alt="Ícone" src={selectedOption.icon} />
            )}
            <span>{selectedOption?.text || "Nenhuma opção selecionada"}</span>
          </div>
          <h3 className="font-semibold text-2xl max-w-md mt-11">
            {selectedOption?.title ||
              "Selecione uma das opções para mais detalhes"}
          </h3>
          <p className="mt-4 max-w-sm font-normal text-base text-[#D3D6DF]">
            {selectedOption?.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim."}
          </p>
          <Image
            alt=" "
            src={selectedOption?.image || acoesDoCDI}
            width={621}
            height={329}
            className="rounded-br-3xl mt-6 shadow-2xl shadow-white/15"
          />
        </div>
      </div>
    </>
  )
}
