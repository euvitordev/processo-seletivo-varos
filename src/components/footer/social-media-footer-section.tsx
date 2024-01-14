export default function SocialMediaFooterSection() {
  const socialMediaSection = [
    {
      text: "Instagram",
      link: "/",
    },
    {
      text: "Twitter",
      link: "/",
    },
    {
      text: "Youtube",
      link: "/",
    },
  ]

  return (
    <>
      <div className="flex flex-col gap-6 max-w-44">
        <h4 className="font-semibold text-xl">Redes Sociais</h4>
        {socialMediaSection.map((item, index) => (
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
