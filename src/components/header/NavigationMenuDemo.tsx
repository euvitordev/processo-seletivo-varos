"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "HUB das Carteiras",
    href: "https://varos.com.br/carteiras?utm_medium=navbar&utm_content=/",
    description:
      "Acompanhe nossas carteiras e encontre a melhor estratégia para você.",
  },
  {
    title: "Carteira Seleção",
    href: "https://varos.com.br/carteiras/selecao?utm_medium=navbar&utm_content=/",
    description:
      "Uma estratégia completa para você ter resultados exponenciais.",
  },
  {
    title: "Carteira Dividendos",
    href: "https://varos.com.br/carteiras/dividendos?utm_medium=navbar&utm_content=/",
    description: "Os resultados do futuro vem das suas ações no presente.",
  },
  {
    title: "Carteira de FIIs",
    href: "https://varos.com.br/carteiras/fundos-imobiliarios?utm_medium=navbar&utm_content=/",
    description:
      "Monte sua carteira de renda passiva com os melhores FIIs do mercado.",
  },
  {
    title: "Carteira FATOR",
    href: "https://varos.com.br/carteira-fator/captura?utm_medium=navbar&utm_content=/",
    description:
      "Primeira carteira quant do Brasil. Invista no modelo que rendeu 2.300%.",
  },
  {
    title: "Carteira Small Caps",
    href: "https://varos.com.br/carteiras/small-caps/captura?utm_campaign=carteira_smallcaps0923&utm_source=site&utm_term=varos&utm_medium=navbar&utm_content=/",
    description:
      "As maiores oportunidades se escondem atrás das menores empresas.",
  },
  {
    title: "Carteira Essencial",
    href: "https://varos.com.br/carteiras/essencial?utm_medium=navbar&utm_content=/",
    description:
      "Invista nas ações que multiplicarão seu patrimônio com segurança.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="max-xl:hidden">
      <NavigationMenuList className="flex w-full items-center gap-8">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="https://varos.com.br/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="https://varos.com.br/hub" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Conteúdos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="https://varos.com.br/informacoes/quem-somos"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Quem Somos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
