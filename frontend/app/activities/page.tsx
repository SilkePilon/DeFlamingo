import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const activities = [
  {
    name: "Hiking Trails",
    description:
      "Explore our scenic hiking trails suitable for all skill levels. Our trails range from easy walks to challenging mountain hikes, offering breathtaking views of the surrounding landscape.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    duration: "2-6 hours",
    difficulty: "Easy to Difficult",
  },
  {
    name: "Bird Watching",
    description:
      "Observe a wide variety of bird species in their natural habitat. Our bird watching tours are led by expert ornithologists who will help you spot and identify various species.",
    image:
      "https://images.unsplash.com/photo-1621631210014-cb3e36b2b555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    duration: "3-4 hours",
    difficulty: "Easy",
  },
  {
    name: "Kayaking",
    description:
      "Navigate through our serene lakes and rivers by kayak. Whether you're a beginner or an experienced paddler, our kayaking adventures offer a unique perspective of the local ecosystem.",
    image:
      "https://images.unsplash.com/photo-1572535641922-078d1e04855e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    duration: "2-3 hours",
    difficulty: "Moderate",
  },
  {
    name: "Rock Climbing",
    description:
      "Test your skills and courage on our natural rock formations. We offer routes for beginners and experienced climbers alike, with safety equipment and instruction provided.",
    image:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    duration: "3-5 hours",
    difficulty: "Moderate to Difficult",
  },
  {
    name: "Nature Photography",
    description:
      "Capture the beauty of De Flamingo through your lens. Our photography tours take you to the most picturesque spots in the reserve, perfect for both amateur and professional photographers.",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    duration: "4-6 hours",
    difficulty: "Easy",
  },
  {
    name: "Camping",
    description:
      "Immerse yourself in nature with our camping experiences. From basic tent sites to comfortable glamping options, we have something for every outdoor enthusiast.",
    image:
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    duration: "Overnight",
    difficulty: "Easy to Moderate",
  },
]

export default function ActivitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Activities</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div key={activity.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={activity.image || "/placeholder.svg"}
                alt={activity.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{activity.name}</h2>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Duration: {activity.duration}</span>
                  <span className="text-sm text-gray-500">Difficulty: {activity.difficulty}</span>
                </div>
                <Button className="w-full bg-flamingo-500 hover:bg-flamingo-600">Book Now</Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

