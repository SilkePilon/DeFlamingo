import { TelescopeIcon as Binoculars, Tent, Compass } from "lucide-react"

const features = [
  {
    name: "Nature Exploration",
    description: "Discover the beauty of our diverse ecosystems and wildlife.",
    icon: Binoculars,
  },
  {
    name: "Camping Adventures",
    description: "Experience the great outdoors with our premium camping facilities.",
    icon: Tent,
  },
  {
    name: "Guided Tours",
    description: "Learn from our expert guides on various nature trails and expeditions.",
    icon: Compass,
  },
]

export default function About() {
  return (
    <section id="about" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">About De Flamingo</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          De Flamingo is your gateway to unforgettable outdoor experiences. Our nature reserve offers a perfect blend of
          adventure and tranquility.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-background p-8 transition-all hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <feature.icon className="h-12 w-12 text-flamingo-500" />
              <h3 className="font-bold text-xl">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

