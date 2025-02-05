"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const activities = [
  {
    name: "Hiking Trails",
    description:
      "Explore our scenic hiking trails suitable for all skill levels.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Bird Watching",
    description:
      "Observe a wide variety of bird species in their natural habitat.",
    image:
      "https://images.unsplash.com/photo-1621631210014-cb3e36b2b555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Kayaking",
    description: "Navigate through our serene lakes and rivers by kayak.",
    image:
      "https://images.unsplash.com/photo-1572535641922-078d1e04855e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Our Activities
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover the range of exciting activities we offer at De Flamingo.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <div
            key={activity.name}
            className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl"
          >
            <Image
              src={activity.image || "/placeholder.svg"}
              alt={activity.name}
              width={400}
              height={300}
              className="h-64 w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
              <h3 className="font-bold text-2xl text-white mb-2">
                {activity.name}
              </h3>
              <p className="text-white/80 mb-4">{activity.description}</p>
              <Button className="w-full bg-flamingo-500 hover:bg-flamingo-600">
                Book Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
