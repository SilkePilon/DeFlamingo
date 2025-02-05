"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl">🦩</span>
          <span className="font-bold text-xl hidden sm:inline">De Flamingo</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/activities" className="transition-colors hover:text-primary">
            Activities
          </Link>
          <Link href="/contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button size="sm" className="hidden md:inline-flex">
            Book Now
          </Button>
          <Button size="sm" variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/activities" className="transition-colors hover:text-primary">
              Activities
            </Link>
            <Link href="/contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
            <Button size="sm">Book Now</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

