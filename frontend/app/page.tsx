import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Activities from "@/components/activities"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Activities />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

