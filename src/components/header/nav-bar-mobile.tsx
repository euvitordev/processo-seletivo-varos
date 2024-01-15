import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LogoVaros from "../../../public/images/varos.svg";
import Image from "next/image";
import IconUser from "../../../public/icons/User.svg";
import ArrowRight from "../../assets/arrow-right-navbar.svg";

export default function NavBarMobile({
  children,
}: {
  children: React.ReactNode;
}) {
  const productsOption = [
    {
      title: "Carteiras",
      description:
        "Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa um futuro financeiro sólido.",
    },
    {
      title: "Cursos",
      description:
        "Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa um futuro financeiro sólido.",
    },
    {
      title: "Consultoria",
      description:
        "Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa um futuro financeiro sólido.",
    },
  ];
  return (
    <>
      <Sheet>
        <SheetTrigger className="xl:hidden">{children}</SheetTrigger>
        <SheetContent
          side={"top"}
          className="animate-fadeAndSlideUp h-full w-full overflow-x-auto bg-[#131313]"
        >
          <SheetHeader>
            <SheetTitle className="fixed left-0 top-0 w-full border-b bg-[#131313] px-8">
              <div className="max-w-5xl py-8">
                <Image src={LogoVaros} alt="Logo principal da Varos" />
              </div>
            </SheetTitle>
            <SheetDescription>
              <div className="mt-32 flex w-full flex-col items-start">
                <div className="flex w-full flex-col items-center gap-4 border">
                  <button className="flex w-full items-center justify-center gap-4 rounded-md border-2 border-[#FAFAFA] p-2 text-lg font-medium text-[#FAFAFA] hover:opacity-80">
                    <Image src={IconUser} alt="Icone de user" />
                    ENTRAR
                  </button>
                  <button className="flex w-full items-center justify-center gap-4 rounded-md border-2 border-[#FAFAFA] bg-[#19C819] p-2 text-lg font-medium text-[#131313] hover:opacity-80">
                    ASSINAR AGORA
                  </button>
                </div>
                {/*  */}
                <div className="mt-10 w-full rounded-xl bg-[#222729]">
                  <div className="w-full border-b-4 border-[#B0B7BE]/50 py-8">
                    <h3 className="px-8 text-start text-lg font-bold text-[#fafafa]">
                      Produtos
                    </h3>
                  </div>
                  <div className="flex flex-col gap-8 p-8">
                    {productsOption.map((item, index) => (
                      <button
                        key={index}
                        className="flex flex-col gap-2 text-start"
                      >
                        <div className="flex w-full items-center justify-between">
                          <h4 className="text-base font-semibold text-[#fafafa]">
                            {item.title}
                          </h4>
                          <Image
                            src={ArrowRight}
                            alt="Icone de seta para direita"
                            className="text-[#fafafa]"
                          />
                        </div>
                        <p className="max-w-sm">{item.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-10 flex w-full flex-col items-start gap-8 ">
                  <div className="w-full border-b px-8 py-4 text-start">
                    <button className="text-base font-semibold text-[#fafafa]">
                      Blog
                    </button>
                  </div>
                  <div className="w-full border-b px-8 py-4 text-start">
                    <button className="text-base font-semibold text-[#fafafa]">
                      Quem somos
                    </button>
                  </div>

                  <div className="w-full px-8 py-4 text-start">
                    <button className="text-base font-semibold text-[#fafafa]">
                      Conteúdos
                    </button>
                  </div>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
