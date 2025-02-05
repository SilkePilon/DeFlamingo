"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { CaptchaModal } from "./captcha-modal"

export default function Hero() {
  const [isCaptchaOpen, setIsCaptchaOpen] = useState(false)

  return (
    <section className="relative overflow-hidden">
      <div className="container flex min-h-[calc(100vh-4rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-flamingo-500 to-flamingo-700 bg-clip-text text-transparent">
              De Flamingo
            </span>
          </h1>
          <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Experience the thrill of outdoor adventures in our beautiful nature reserve.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Button size="lg" className="bg-flamingo-500 hover:bg-flamingo-600" onClick={() => setIsCaptchaOpen(true)}>
            See what's new
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[url('/hero-background.jpg')] bg-cover bg-center opacity-20"></div>
      <CaptchaModal isOpen={isCaptchaOpen} onClose={() => setIsCaptchaOpen(false)} />
    </section>
  )
}

