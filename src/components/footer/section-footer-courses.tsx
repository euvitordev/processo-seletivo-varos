export default function SectionFooterCourses() {
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
  ]
  return (
    <>
      <div className="flex flex-col gap-6 max-w-44">
        <h4 className="font-semibold text-xl">Cursos</h4>
        {courseSection.map((item, index) => (
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
