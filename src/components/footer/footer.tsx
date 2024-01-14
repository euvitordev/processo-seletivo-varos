import varosIcon from "../../assets/varos-icon.svg";
import varosLogo from "../../assets/Varos Logotipo.svg";
import Image from "next/image";
import SectionFooterCourses from "./section-footer-courses";
import WalletFooterSection from "./wallet-footer-section";
import FooterSectionAbout from "./footer-section-about";
import SocialMediaFooterSection from "./social-media-footer-section";

export default function Footer() {
  const courseSection = [
    {
      text: "Valuation do Zero ao Avançado 2.0",
      link: "/",
    },
    {
      text: "Código.py",
      link: "/",
    },
    {
      text: "Minicurso Reels",
      link: "/",
    },
    {
      text: "Enciclopédia de FII",
      link: "/",
    },
  ];
  return (
    <footer className="mb-14 mt-44 flex h-[502px] w-full items-start justify-start gap-48 max-xl:h-full max-xl:flex-col max-lg:gap-14 max-md:h-full">
      <div className="flex h-full flex-col items-start justify-between gap-6">
        <div className="flex flex-col gap-4">
          <Image alt="" src={varosIcon} />
          <Image alt="" src={varosLogo} />
        </div>
        <div className="flex w-fit flex-col gap-2">
          <span className="">VAROS 2023</span>
          <span className="whitespace-nowrap">
            Todos os direitos reservados
          </span>
        </div>
      </div>
      <div className="flex grid-cols-2 items-start justify-center gap-12 max-md:grid">
        <SectionFooterCourses />
        <WalletFooterSection />
        <FooterSectionAbout />
        <SocialMediaFooterSection />
      </div>
    </footer>
  );
}
