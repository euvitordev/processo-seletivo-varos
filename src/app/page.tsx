import Footer from "@/components/footer/footer"
import HeaderBar from "@/components/header/header"
import HomePage from "@/components/main/home"

export default function Home() {
  return (
    <main className="flex min-h-screen  w-full flex-col items-start justify-start  max-xl:px-6 py-4 bg-[#131313] text-[#F2F4F8]">
      <div className="max-w-7xl m-auto max-xl:max-w-5xl max-lg:max-w-3xl animate-fadeAndSlideUp">
        <HeaderBar />
        <HomePage />
        <Footer />
      </div>
    </main>
  )
}
