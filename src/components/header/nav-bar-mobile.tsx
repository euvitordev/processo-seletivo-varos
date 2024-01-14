import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import LogoVaros from "../../../public/images/varos.svg"
import Image from "next/image"
import ShoppingCart from "../../../public/icons/shopping--cart.svg"
import IconUser from "../../../public/icons/User.svg"

export default function NavBarMobile({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Sheet>
        <SheetTrigger className="xl:hidden">{children}</SheetTrigger>
        <SheetContent
          side={"top"}
          className="w-full h-full animate-fadeAndSlideUp"
        >
          <SheetHeader>
            <SheetTitle className="w-full m-auto px-4 border-b">
              <div className="max-w-5xl py-6">
                <Image src={LogoVaros} alt="Logo principal da Varos" />
              </div>
            </SheetTitle>
            <SheetDescription>
              <div className="flex flex-col w-full items-start mt-14">
                <div className="flex flex-col items-center gap-4 borderw w-full">
                  <button className="flex items-center gap-4 font-medium text-lg p-2 border-2 text-[#FAFAFA] border-[#FAFAFA] w-full justify-center rounded-md hover:opacity-80">
                    <Image src={IconUser} alt="Icone de user" />
                    ENTRAR
                  </button>
                  <button className="flex items-center gap-4 font-medium text-lg p-2 border-2 border-[#FAFAFA] w-full justify-center rounded-md text-[#131313] bg-[#19C819] hover:opacity-80">
                    ASSINAR AGORA
                  </button>
                </div>
                {/*  */}
                <div className="w-full">
                  <h3 className="">Produtos</h3>
                  
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}
