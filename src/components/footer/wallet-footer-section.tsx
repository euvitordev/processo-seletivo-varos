export default function WalletFooterSection() {
  const walletSection = [
    {
      text: "Carteira FATOR",
      link: "/",
    },
    {
      text: "Carteira Seleção",
      link: "/",
    },
    {
      text: "Carteira Essencial",
      link: "/",
    },
    {
      text: "Carteira Small Caps",
      link: "/",
    },
    {
      text: "Carteira Dividendos",
      link: "/",
    },
    {
      text: "Carteira de FIIs",
      link: "/",
    },
  ]

  return (
    <>
      <div className="flex flex-col gap-6 max-w-44">
        <h4 className="font-semibold text-xl">Carteiras</h4>
        {walletSection.map((item, index) => (
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
