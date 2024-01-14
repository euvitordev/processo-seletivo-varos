export default function FooterSectionAbout() {
  const aboutSection = [
    {
      text: "Quem somos",
      link: "/",
    },
  ]
  return (
    <>
      <div className="flex flex-col gap-6 max-w-44">
        <h4 className="font-semibold text-xl">Sobre</h4>
        {aboutSection.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            className="font-normal text-base"
          >
            {item.text}
          </a>
        ))}
      </div>
    </>
  )
}
