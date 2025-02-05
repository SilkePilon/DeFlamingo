"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import QRCode from "react-qr-code"
import { Camera, RefreshCw, Upload, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { createClient } from "@supabase/supabase-js"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Webcam from "react-webcam"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl!, supabaseAnonKey!)

export default function PhotoAssignment() {
  const [isMobile, setIsMobile] = useState(false)
  const [cameraActive, setCameraActive] = useState(false)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)
  const [uploadStatus, setUploadStatus] = useState<string | null>(null)
  const webcamRef = useRef<Webcam>(null)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const startCamera = () => {
    setCameraActive(true)
  }

  const capturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot()
    if (imageSrc) {
      setCapturedImage(imageSrc)
      setCameraActive(false)
    }
  }, [])

  const retakePhoto = () => {
    setCapturedImage(null)
    setUploadStatus(null)
    startCamera()
  }

  const uploadPhoto = async () => {
    if (capturedImage) {
      try {
        setUploadStatus("Uploading...")
        const res = await fetch(capturedImage)
        const blob = await res.blob()

        const file = new File([blob], `assignment-${Date.now()}.jpg`, {
          type: "image/jpeg",
        })

        const { data, error } = await supabase.storage
          .from("photo-assignments")
          .upload(`assignment-${Date.now()}.jpg`, file)

        if (error) throw error
        console.log("Photo uploaded successfully:", data)
        setUploadStatus("Photo uploaded successfully!")
      } catch (error) {
        console.error("Error uploading photo:", error)
        setUploadStatus("Error uploading photo. Please try again.")
      }
    }
  }

  const renderContent = () => {
    if (!isMobile) {
      return (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Scan QR Code to Open on Mobile</CardTitle>
            <CardDescription>Use your mobile device to complete this assignment</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <QRCode value="http://192.168.2.18:3000/opdrachten/dPoSi3t4JR7rc09QaprP9udjdqXvGyyW" />
          </CardContent>
        </Card>
      )
    }

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Photo Assignment</CardTitle>
          <CardDescription>Follow the instructions to complete your assignment</CardDescription>
        </CardHeader>
        <CardContent>
          {!cameraActive && !capturedImage && (
            <div className="text-center">
              <p className="mb-4">Stand in the same position as shown in the example image:</p>
              <div className="relative w-full h-64 mb-4">
                <Image
                  src="https://cdn.yogajournal.com/wp-content/uploads/2022/01/Tree-Pose_Alt-1_SQ_Andrew-Clark-1024x1024.jpeg?width=1200"
                  alt="Example pose"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <Button onClick={startCamera} className="bg-flamingo-500 hover:bg-flamingo-600 w-full">
                <Camera className="mr-2 h-4 w-4" /> Start Camera
              </Button>
            </div>
          )}
          {cameraActive && (
            <div className="text-center">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={{ facingMode: "user" }}
                className="mb-4 rounded-lg w-full"
              />
              <Button onClick={capturePhoto} className="bg-flamingo-500 hover:bg-flamingo-600 w-full">
                Capture Photo
              </Button>
            </div>
          )}
          {capturedImage && (
            <div className="text-center">
              <Image
                src={capturedImage || "/placeholder.svg"}
                alt="Captured photo"
                width={300}
                height={400}
                className="mb-4 rounded-lg mx-auto"
              />
              <div className="flex justify-center space-x-4">
                <Button onClick={retakePhoto} variant="outline">
                  <RefreshCw className="mr-2 h-4 w-4" /> Retake
                </Button>
                <Button
                  onClick={uploadPhoto}
                  className="bg-flamingo-500 hover:bg-flamingo-600"
                  disabled={!!uploadStatus}
                >
                  <Upload className="mr-2 h-4 w-4" /> Upload
                </Button>
              </div>
              {uploadStatus && <p className="mt-4 text-sm font-semibold text-flamingo-500">{uploadStatus}</p>}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500 flex items-center">
            <Info className="mr-2 h-4 w-4" />
            Make sure you're in a well-lit area and your entire body is visible in the frame.
          </p>
        </CardFooter>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Tree Pose Challenge</h1>
          <p className="text-center text-lg mb-8">
            Welcome to the Tree Pose Challenge! This assignment will test your balance and focus. Follow the
            instructions carefully to complete the challenge successfully.
          </p>
          <div className="flex justify-center">{renderContent()}</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

