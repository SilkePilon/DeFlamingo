import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" name="message" rows={4} required />
              </div>
              <Button type="submit" className="w-full bg-flamingo-500 hover:bg-flamingo-600">
                Send Message
              </Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-flamingo-500 mr-2" />
                <p>123 Nature Reserve Road, Outdoor City, OC 12345</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-flamingo-500 mr-2" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-flamingo-500 mr-2" />
                <p>info@deflamingo.com</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
              <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
              <p>Saturday - Sunday: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

