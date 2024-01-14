import Image from "next/image"
import ShoppingCart from "../../../public/icons/shopping--cart.svg"
import IconUser from "../../../public/icons/User.svg"
import LogoVaros from "../../../public/images/varos.svg"
import hamburgerNavigationIcon from "../../assets/hamburger-navigation.svg"

import NavBar from "./nav-bar"
import NavBarMobile from "./nav-bar-mobile"

export default function HeaderBar() {
  return (
    <header className="flex items-center justify-between w-full  p-2">
      <div className="flex items-center gap-20">
        <Image src={LogoVaros} alt="Logo principal da Varos" />
        <NavBar />
      </div>
      <div className="flex items-center gap-2 max-xl:hidden">
        <button className="flex items-center gap-4 font-medium text-lg p-2">
          <Image src={ShoppingCart} alt="Icone de carrinho de compra" />
          Assinar Agora
        </button>
        <button className="flex items-center gap-4 font-medium text-lg p-2">
          <Image src={IconUser} alt="Icone de user" />
          Entrar
        </button>
      </div>
      <NavBarMobile>
        <Image src={hamburgerNavigationIcon} alt="Logo principal da Varos" />
      </NavBarMobile>
    </header>
  )
}
