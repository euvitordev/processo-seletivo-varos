"use client";
import Image from "next/image";
import ArrowRight from "./../../../assets/caret--right.svg";
import selecaoIcon from "./../../../assets/selecao-icon.svg";
import fatorIcon from "./../../../assets/FATOR.svg";
import dividendoIcon from "./../../../assets/Dividendos.svg";
import acoesDoCDI from "./../../../assets/acoes-do-cdi.svg";
import essencialIcon from "./../../../assets/Essencial.svg";
import fllIcon from "./../../../assets/FII.svg";
import smallCapsIcon from "./../../../assets/small caps.svg";
import valuationIcon from "./../../../assets/valuationIcon.svg";
import codigoPyIcon from "./../../../assets/CODIGO.svg";
import dashIcon from "./../../../assets/Dash.svg";
import minicursoIcon from "./../../../assets/Minicurso.svg";
import enciclopediaFll from "./../../../assets/Enciclopedia.svg";
import DropdownButton from "./DropdownButton";
import DropdownItems from "./DropdownItems";
import SelectedOptionBlock from "./SelectedOptionBlock";

import { useState } from "react";

interface Option {
  text: string;
  icon: string;
  description: string;
  image: string;
  title: string;
}

export default function SecondSession() {
  const [dropdownWalletVisible, setDropdownWalletVisible] = useState(false);
  const [dropdownCourseVisible, setDropdownCourseVisible] = useState(false);
  const [dropdownConsultancyVisible, setDropdownConsultancyVisible] =
    useState(false);

  const closeAllDropdowns = () => {
    setDropdownWalletVisible(false);
    setDropdownCourseVisible(false);
    setDropdownConsultancyVisible(false);
  };

  const toggleDropdownWallet = () => {
    setDropdownWalletVisible(!dropdownWalletVisible);
    setDropdownCourseVisible(false);
    setDropdownConsultancyVisible(false);
  };

  const toggleDropdownCourses = () => {
    setDropdownCourseVisible(!dropdownCourseVisible);
    setDropdownWalletVisible(false);
    setDropdownConsultancyVisible(false);
  };

  const toggleDropdownConsultancy = () => {
    setDropdownConsultancyVisible(!dropdownConsultancyVisible);
    setDropdownWalletVisible(false);
    setDropdownCourseVisible(false);
  };

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelectOption = (index: number, optionType: string) => {
    let selectedOption;

    if (optionType === "wallet" && index < walletOptions.length) {
      selectedOption = walletOptions[index];
    } else if (optionType === "course" && index < coursesOptions.length) {
      selectedOption = coursesOptions[index];
    } else if (
      optionType === "consultancy" &&
      index < consultancyOptions.length
    ) {
      selectedOption = consultancyOptions[index];
    }

    setSelectedOption(selectedOption || null);
  };

  const walletOptions: Option[] = [
    {
      text: "Carteira Seleção",
      icon: selecaoIcon,
      title:
        "Explore esta carteira diversificada que reúne uma seleção cuidadosa de ativos para otimizar seus investimentos.",
      description:
        "A Carteira Seleção é projetada para proporcionar um equilíbrio sólido entre retorno e segurança",
      image: acoesDoCDI,
    },
    {
      text: "Carteira FATOR",
      icon: fatorIcon,
      title:
        "A Carteira FATOR é estruturada com base em fatores específicos do mercado financeiro.",
      description:
        "Descubra uma abordagem única que utiliza análises de fatores para impulsionar o desempenho desta carteira.",
      image: acoesDoCDI,
    },
    {
      text: "Carteira Dividendos",
      icon: dividendoIcon,
      title:
        "Se você busca uma fonte estável de renda, a Carteira Dividendos pode ser a escolha certa.",
      description:
        "Ela é composta por ativos conhecidos por distribuírem dividendos consistentes ao longo do tempo.",

      image: acoesDoCDI,
    },
    {
      text: "Carteira Essencial",
      icon: essencialIcon,
      title:
        "A Carteira Essencial oferece uma abordagem essencial para construir riqueza ao longo do tempo.",
      description:
        "Descubra uma variedade de ativos cuidadosamente selecionados para formar a base sólida de sua estratégia de investimento.",
      image: acoesDoCDI,
    },
    {
      text: "Carteira de FIIs",
      icon: fllIcon,
      title:
        "Explore o fascinante mundo dos Fundos de Investimento Imobiliário (FIIs) com a Carteira de FIIs.",
      description:
        "Esta carteira é projetada para oferecer exposição a diversos empreendimentos imobiliários.",
      image: acoesDoCDI,
    },
    {
      text: "Carteira Small Caps",
      icon: smallCapsIcon,
      title:
        " A Carteira Small Caps é voltada para investidores que buscam oportunidades de crescimento em empresas de menor capitalização.",
      description: "Descubra o potencial de retorno dessas ações dinâmicas.",
      image: acoesDoCDI,
    },
  ];
  const coursesOptions: Option[] = [
    {
      text: "Valuation 2.0",
      icon: valuationIcon,
      title:
        "O curso Valuation 2.0 oferece uma visão aprofundada da avaliação de investimentos.",
      description:
        "Aprenda a avaliar empresas, determinar seu valor intrínseco e tomar decisões de investimento informadas.",
      image: acoesDoCDI,
    },
    {
      text: "Código.py",
      icon: codigoPyIcon,
      title: "Domine a programação em Python com o curso Código.py",
      description:
        "Este curso prático guiará você desde os conceitos básicos até o desenvolvimento de aplicações Python funcionais.",
      image: acoesDoCDI,
    },
    {
      text: "Dash.py",
      icon: dashIcon,
      title:
        "Desenvolva habilidades em criação de painéis interativos na web com o curso Dash.py",
      description:
        "Aprenda a construir visualizações de dados dinâmicas usando Dash, uma estrutura poderosa em Python.",
      image: acoesDoCDI,
    },
    {
      text: "Carteira Essencial",
      icon: essencialIcon,
      title:
        "Aprofunde-se nos fundamentos da construção de uma carteira sólida com o curso Carteira Essencial. ",
      description:
        "Explore estratégias de alocação de ativos e aprenda a otimizar seu portfólio.",
      image: acoesDoCDI,
    },
    {
      text: "Curso Reels",
      icon: minicursoIcon,
      title: "Entre no mundo das redes sociais com o curso Reels. ",
      description:
        "Descubra estratégias eficazes para criar vídeos curtos envolventes e promover seu conteúdo de maneira eficaz.",
      image: acoesDoCDI,
    },
    {
      text: "Enciclopédia de FII",
      icon: enciclopediaFll,
      title:
        "Torne-se um especialista em Fundos de Investimento Imobiliário (FIIs) com a Enciclopédia de FII. ",
      description:
        "Este curso abrangente oferece uma compreensão aprofundada dos FIIs e estratégias de investimento associadas.",
      image: acoesDoCDI,
    },
  ];
  const consultancyOptions: Option[] = [
    {
      text: "Consultoria VAROS",
      icon: valuationIcon,
      title:
        "A Consultoria VAROS oferece uma abordagem personalizada para orientar seus investimentos. ",
      description:
        "Descubra o poder de ter consultores experientes ao seu lado.",
      image: acoesDoCDI,
    },
  ];

  const allOptions: Option[] = [
    ...walletOptions,
    ...coursesOptions,
    ...consultancyOptions,
  ];

  return (
    <div className="mt-64 flex w-full flex-col max-md:mt-40">
      <div className="flex flex-col gap-4 max-md:w-full max-md:items-center max-md:text-center xl:max-w-xl">
        <h2 className=" text-4xl font-semibold max-md:text-2xl">
          Simplifique seus investimentos e alcance seus objetivos
        </h2>
        <p className="max-w-lg text-lg font-normal text-[#B0B7BE] max-md:text-xl">
          Conteúdos preparados para trazer mais segurança, independente do seu
          nível.
        </p>
      </div>

      <div className="mt-10 flex w-full justify-between max-md:flex-col max-md:items-center">
        {/*  */}
        <div className="flex w-full flex-col gap-4 max-md:mb-8 max-md:w-full xl:max-w-80">
          <DropdownButton
            onClick={toggleDropdownWallet}
            isOpen={dropdownWalletVisible}
            text="Carteiras"
            icon={ArrowRight}
          />
          {dropdownWalletVisible && (
            <DropdownItems
              options={walletOptions}
              onSelect={(index: number) => handleSelectOption(index, "wallet")}
              selectedOption={selectedOption}
            />
          )}
          <DropdownButton
            onClick={toggleDropdownCourses}
            isOpen={dropdownCourseVisible}
            text="Cursos"
            icon={ArrowRight}
          />
          {dropdownCourseVisible && (
            <DropdownItems
              options={coursesOptions}
              onSelect={(index: number) => handleSelectOption(index, "course")}
              selectedOption={selectedOption}
            />
          )}
          <DropdownButton
            onClick={toggleDropdownConsultancy}
            isOpen={dropdownConsultancyVisible}
            text="Consultoria"
            icon={ArrowRight}
          />
          {dropdownConsultancyVisible && (
            <DropdownItems
              options={consultancyOptions}
              onSelect={(index: number) =>
                handleSelectOption(index, "consultancy")
              }
              selectedOption={selectedOption}
            />
          )}
        </div>

        {/*  */}
        <SelectedOptionBlock selectedOption={selectedOption} />
      </div>
    </div>
  );
}
