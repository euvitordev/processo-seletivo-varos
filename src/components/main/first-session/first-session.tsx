import Image from "next/image";
import ArrowRight from "../../../assets/arrow-right.svg";

import CardHero1 from "../../../../public/icons-card-hero/Vector (1).svg";
import CardHero2 from "../../../../public/icons-card-hero/Dividendos.svg";
import CardHero3 from "../../../../public/icons-card-hero/CODIGO.svg";
import CardSlideAction from "./card-slide-action";

interface CardItemProps {
  imageSrc: string;
  title: string;
  code?: boolean;
}

export default function FirstSession() {
  const cardData = [
    { image: CardHero1, title: "Carteira FATOR" },
    { image: CardHero2, title: "Carteira de Dividendos" },
    { image: CardHero3, title: "Código .py", code: true },
  ];

  return (
    <div className="max flex w-full items-center justify-between gap-64  max-xl:gap-16 max-md:flex-col max-md:items-center">
      <div className="mt-40 flex max-w-fit flex-col items-start gap-6 text-start max-md:items-center max-md:text-center">
        <h1 className="text-6xl font-semibold max-xl:text-5xl max-md:text-4xl">
          Investir de forma mais inteligente passa por aqui.
        </h1>
        <p className="max-w-md max-md:text-xl">
          Fazemos de tudo para que você possa conquistar seus sonhos da melhor
          forma possível.
        </p>
        <button className="mt-8 flex w-60 items-center justify-center gap-3 rounded-full bg-[#19C819]/40 p-4 text-base text-[#00F700] hover:bg-[#19C819]/20">
          Comprar agora
          <Image src={ArrowRight} alt="Icone de seta para direita" />
        </button>

        <CardSlideAction />
      </div>

      <div className="group mt-20 flex w-full flex-col items-start justify-center gap-20 max-md:hidden">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`flex cursor-pointer items-center gap-5 rounded-2xl border border-[#4D5358] py-2 pl-2 pr-12 shadow-2xl shadow-white/10  transition-all delay-150 duration-300 ease-in-out group-hover:animate-bounce ${
              card.title === "Carteira de Dividendos" ? "ml-9" : ""
            }`}
          >
            <div className="rounded-xl border border-[#4D5358] p-4">
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
  );
}
