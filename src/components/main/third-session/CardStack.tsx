"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import aspasIcon from "../../../assets/aspas.svg";

const cardContent = [
  {
    text: "Conteúdos preparados para trazer mais segurança, independente do seu nível. Conteúdos preparados para trazer mais segurança, independente do seu nível.Conteúdos preparados para trazer mais segurança, independente do seu nível.",
    author: "Assinante VAROS",
  },
  {
    text: "Eu acompanho vários gestores de fundo e educadores financeiros. Tu de longe és um dos que mais contribui para minha construção de conhecimento. A forma que colocas coisas que outras pessoas fazem parecer complexas de uma forma super simples e ginal. Parabéns! E continue.",
    author: "Assinante VAROS",
  },
  {
    text: "Nunca vi algo tão completo que nem o de vocês. E olha que esses 11 anos que tô no MF já assinei muita casa de análise. Nada chega perto do trabalho seu e da sua equipe.",
    author: "Assinante VAROS",
  },
];

const CardStack = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCardIndex((prevIndex) =>
        prevIndex < cardContent.length - 1 ? prevIndex + 1 : 0,
      );
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mt-20 flex max-md:w-full max-md:items-center">
      {cardContent.map((card, index) => {
        const zIndex =
          (index - currentCardIndex + cardContent.length) % cardContent.length;
        const isCurrentCard = index === currentCardIndex;

        return (
          <div
            key={index}
            className={`absolute left-0 top-0 flex w-[372px] transform flex-col items-start justify-start gap-4 rounded-3xl border border-[#222729] px-12 py-8 opacity-100 shadow-2xl shadow-[#131516]/50 transition-transform delay-150 duration-700 ease-in-out max-lg:hidden ${
              isCurrentCard
                ? "z-50 bg-[#131516]"
                : "translate-x-24  translate-y-28 opacity-5"
            }`}
            style={{
              zIndex: cardContent.length - index,
              transition: "transform 5s ease-in-out",
            }}
          >
            <Image src={aspasIcon} alt="" className="w-21" />
            <p className="text-lg font-medium text-[#B0B7BE]">{card.text}</p>
            <span className="text-lg font-medium italic">{card.author}</span>
          </div>
        );
      })}

      <div className="flex max-md:mb-8 xl:mt-20 xl:hidden">
        <div className="flex w-[368px] items-start justify-start gap-4 rounded-3xl border border-[#222729] bg-[#131516] p-6 drop-shadow-2xl max-md:w-full max-md:flex-col max-md:items-start max-md:text-start">
          <Image src={aspasIcon} alt="" className="w-21" />

          <div className="flex flex-col justify-start gap-5">
            <p className="text-lg font-medium text-[#B0B7BE]">
              {cardContent[currentCardIndex].text}
            </p>
            <span className="text-lg font-medium italic">
              {cardContent[currentCardIndex].author}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStack;
