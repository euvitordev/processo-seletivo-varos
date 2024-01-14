import Image from "next/image"
import aspasIcon from "../../../assets/aspas.svg"
import groupImage from "../../../assets/image-group.svg"
import CardStack from "./CardStack"

export default function ThirdSession() {
  return (
    <div className="flex mt-52 w-full items-start justify-between max-lg:flex-col">
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-4xl">Didática de verdade</h2>
          <p className="font-semibold text-lg">Garantindo seu aprendizado</p>
        </div>
        <CardStack />
      </div>

      <div className="flex flex-col xl:max-w-xl max-lg:w-full">
        <Image src={groupImage} alt="" className="w-full" />
        <div className="flex items-center justify-center border border-[#4D5358] py-4 px-24 rounded-3xl mt-20 shadow-2xl shadow-white/5">
          <div className="flex items-center justify-center gap-10">
            <div className="flex flex-col w-28 text-center gap-1">
              <span className="font-bold text-lg text-[#C6CAD2]">+ 1000</span>
              <p className="font-normal text-sm text-center">
                Nota média geral das aulas
              </p>
            </div>
            <div className="flex flex-col w-28 text-center gap-1">
              <span className="font-bold text-lg text-[#19C819]">4,8/5</span>
              <p className="font-normal text-sm text-center">
                Nota média geral das aulas
              </p>
            </div>
            <div className="flex flex-col w-28 text-center gap-1">
              <span className="font-bold text-lg text-[#C6CAD2]">10k +</span>
              <p className="font-normal text-sm text-center">Comunidade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
