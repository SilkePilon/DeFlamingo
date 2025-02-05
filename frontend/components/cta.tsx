import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-flamingo-500">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-white">
          Ready for your next adventure?
        </h2>
        <p className="max-w-[42rem] leading-normal text-white/80 sm:text-xl sm:leading-8">
          Book your visit to De Flamingo today and create unforgettable memories in nature.
        </p>
        <Button size="lg" className="mt-4 bg-white text-flamingo-500 hover:bg-flamingo-50">
          Book Your Adventure
        </Button>
      </div>
    </section>
  )
}

