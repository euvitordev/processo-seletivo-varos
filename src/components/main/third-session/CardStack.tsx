"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import aspasIcon from "../../../assets/aspas.svg"

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
]

const CardStack = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCardIndex((prevIndex) =>
        prevIndex < cardContent.length - 1 ? prevIndex + 1 : 0
      )
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex mt-20 relative">
      {cardContent.map((card, index) => {
        const zIndex =
          (index - currentCardIndex + cardContent.length) % cardContent.length
        const isCurrentCard = index === currentCardIndex

        return (
          <div
            key={index}
            className={`absolute top-0 left-0 w-[372px] max-lg:hidden flex flex-col rounded-3xl border border-[#222729] px-12 py-8 items-start opacity-100 justify-start gap-4 transition-transform transform delay-150 duration-700 shadow-2xl shadow-[#131516]/50 ease-in-out ${
              isCurrentCard
                ? "bg-[#131516] z-50"
                : "translate-x-24  translate-y-28 opacity-5"
            }`}
            style={{
              zIndex: cardContent.length - index,
              transition: "transform 5s ease-in-out",
            }}
          >
            <Image src={aspasIcon} alt="" className="w-21" />
            <p className="font-medium text-lg text-[#B0B7BE]">{card.text}</p>
            <span className="font-medium text-lg italic">{card.author}</span>
          </div>
        )
      })}
    </div>
  )
}

export default CardStack
