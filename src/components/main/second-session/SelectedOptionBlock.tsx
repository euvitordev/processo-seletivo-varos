import React from "react";
import Image from "next/image";
import acoesDoCDI from "./../../../assets/acoes-do-cdi.svg";
import acoesDoCDIMobile from "./../../../assets/image-acoes-do-cdi-mobile.svg";

interface Option {
  text: string;
  icon: string;
  description: string;
  image: string;
  title: string;
}

interface SelectedOptionBlockProps {
  selectedOption: Option | null;
}

export default function SelectedOptionBlock({
  selectedOption,
}: SelectedOptionBlockProps) {
  return (
    <>
      <div className="flex h-fit w-full justify-end max-xl:w-fit max-md:mt-8">
        <div className="flex w-full flex-col items-start justify-between rounded-3xl border-2 border-[#222729] bg-[#131516] pl-12 max-lg:w-full max-md:px-4 max-md:py-6 xl:max-w-2xl">
          <div className="mt-12 flex items-center gap-4 max-md:ml-4 max-md:mt-8">
            {selectedOption?.icon && (
              <Image alt="Ícone" src={selectedOption.icon} />
            )}
            <span>{selectedOption?.text || "Nenhuma opção selecionada"}</span>
          </div>
          <h3 className="mt-11 max-w-md text-2xl font-semibold">
            {selectedOption?.title ||
              "Selecione uma das opções para mais detalhes"}
          </h3>
          <p className="mt-4 text-base font-normal text-[#D3D6DF] max-md:w-full lg:max-w-sm">
            {selectedOption?.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim."}
          </p>
          <Image
            alt=" "
            src={selectedOption?.image || acoesDoCDI}
            width={621}
            height={329}
            className="mt-6 rounded-br-3xl shadow-2xl shadow-white/15 max-md:hidden"
          />
          <Image
            alt=" "
            src={selectedOption?.image || acoesDoCDIMobile}
            width={621}
            height={329}
            className="mt-6 rounded-3xl md:hidden"
          />
        </div>
      </div>
    </>
  );
}
