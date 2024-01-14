export default function NavBar() {
  const navLinks = [
    {
      text: "Produtos",
      link: "/",
    },
    {
      text: "Blog",
      link: "/",
    },
    {
      text: "Conteúdos",
      link: "/",
    },
    {
      text: "Quem Somos",
      link: "/",
    },
  ]
  return (
    <>
      <nav className="flex max-xl:hidden">
        <ul className="flex text-center gap-20">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className="hover:underline-offset-8 hover:underline"
            >
              <a
                href={item.link}
                target="_blank"
                className="font-medium text-sm"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
