import Image from "next/image";
import ShoppingCart from "../../../public/icons/shopping--cart.svg";
import IconUser from "../../../public/icons/User.svg";
import LogoVaros from "../../../public/images/varos.svg";
import hamburgerNavigationIcon from "../../assets/hamburger-navigation.svg";

import NavBar from "./nav-bar";
import NavBarMobile from "./nav-bar-mobile";
import { NavigationMenuDemo } from "./NavigationMenuDemo";

export default function HeaderBar() {
  return (
    <header className="flex w-full items-center justify-between  p-2">
      <div className="flex items-center gap-20">
        <Image src={LogoVaros} alt="Logo principal da Varos" />
        {/* <NavBar /> */}
        <NavigationMenuDemo />
      </div>
      <div className="flex items-center gap-2 max-xl:hidden">
        <button className="flex items-center gap-4 p-2 text-lg font-medium">
          <Image src={ShoppingCart} alt="Icone de carrinho de compra" />
          Assinar Agora
        </button>
        <button className="flex items-center gap-4 p-2 text-lg font-medium">
          <Image src={IconUser} alt="Icone de user" />
          Entrar
        </button>
      </div>
      <NavBarMobile>
        <Image src={hamburgerNavigationIcon} alt="Logo principal da Varos" />
      </NavBarMobile>
    </header>
  );
}
