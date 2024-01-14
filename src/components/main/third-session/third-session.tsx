import Image from "next/image";
import aspasIcon from "../../../assets/aspas.svg";
import groupImage from "../../../assets/image-group.svg";
import CardStack from "./CardStack";

export default function ThirdSession() {
  return (
    <div className="mt-52 flex w-full items-start justify-between max-xl:gap-12 max-md:mt-6 max-md:flex-col">
      <div className="flex flex-col max-md:w-full max-md:items-center max-md:text-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-semibold">Didática de verdade</h2>
          <p className="text-lg font-semibold">Garantindo seu aprendizado</p>
        </div>
        <CardStack />
      </div>

      <div className="flex w-full max-w-xl flex-col max-xl:mt-10">
        <Image src={groupImage} alt="" className="w-full" />
        <div className="mt-20 flex items-center justify-center rounded-[32px] border border-[#4D5358] px-24 py-4 shadow-2xl shadow-white/5 max-xl:p-4 max-md:p-4">
          <div className="flex items-center justify-center gap-10 max-md:gap-2">
            <div className="flex w-fit flex-col gap-1 text-center">
              <span className="text-lg font-bold text-[#C6CAD2]">+ 1000</span>
              <p className="text-center text-sm font-normal">
                Nota média geral das aulas
              </p>
            </div>
            <div className="flex w-fit flex-col gap-1 text-center">
              <span className="text-lg font-bold text-[#19C819]">4,8/5</span>
              <p className="text-center text-sm font-normal">
                Nota média geral das aulas
              </p>
            </div>
            <div className="flex w-fit flex-col gap-1 text-center">
              <span className="text-lg font-bold text-[#C6CAD2]">10k +</span>
              <p className="text-center text-sm font-normal">Comunidade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
