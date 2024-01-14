import Image from "next/image"
import ArrowRight from "../../../assets/arrow-right.svg"

import CardHero1 from "../../../../public/icons-card-hero/Vector (1).svg"
import CardHero2 from "../../../../public/icons-card-hero/Dividendos.svg"
import CardHero3 from "../../../../public/icons-card-hero/CODIGO.svg"
import CardSlideAction from "./card-slide-action"

interface CardItemProps {
  imageSrc: string
  title: string
  code?: boolean
}

export default function FirstSession() {
  const cardData = [
    { image: CardHero1, title: "Carteira FATOR" },
    { image: CardHero2, title: "Carteira de Dividendos" },
    { image: CardHero3, title: "Código .py", code: true },
  ]

  return (
    <div className="flex items-center justify-between w-full gap-64 max-lg:flex-col max-lg:items-center ">
      <div className="flex flex-col max-w-xl mt-40 gap-6 max-lg:items-center text-center">
        <h1 className="font-semibold text-6xl">
          Investir de forma mais inteligente passa por aqui.
        </h1>
        <p className="max-w-md">
          Fazemos de tudo para que você possa conquistar seus sonhos da melhor
          forma possível.
        </p>
        <button className="bg-[#19C819]/40 text-base text-[#00F700] w-60 p-4 rounded-full flex gap-3 items-center justify-center mt-8 hover:bg-[#19C819]/20">
          Comprar agora
          <Image src={ArrowRight} alt="Icone de seta para direita" />
        </button>

        <CardSlideAction />
      </div>

      <div className="flex flex-col gap-20 items-start justify-center mt-20 w-full group max-lg:hidden">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`rounded-2xl border-[#4D5358] border py-2 pl-2 pr-12 group-hover:animate-bounce transition-all delay-150 duration-300 ease-in-out cursor-pointer  flex items-center gap-5 shadow-2xl shadow-white/10 ${
              card.title === "Carteira de Dividendos" ? "ml-9" : ""
            }`}
          >
            <div className="rounded-xl border-[#4D5358] border p-4">
              <Image src={card.image} alt="" />
            </div>
            <p className="">
              {card.title}
              {card.code && <span className="text-[#00F0C9]">.py</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
