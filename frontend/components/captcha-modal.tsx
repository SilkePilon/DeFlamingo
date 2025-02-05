"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import type React from "react" // Added import for React

const captchaTypes = [
  { type: "math", question: () => `What is ${Math.floor(Math.random() * 10)} + ${Math.floor(Math.random() * 10)}?` },
  { type: "text", question: () => 'Type the word "flamingo" backwards:' },
  { type: "checkbox", question: () => "Please check the box to prove you are human:" },
]

export function CaptchaModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentCaptcha, setCurrentCaptcha] = useState(captchaTypes[0])
  const [userInput, setUserInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setCurrentCaptcha(captchaTypes[Math.floor(Math.random() * captchaTypes.length)])
      setUserInput("")
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setCurrentCaptcha(captchaTypes[Math.floor(Math.random() * captchaTypes.length)])
      setUserInput("")
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Verify that you are human</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <p>{currentCaptcha.question()}</p>
            {currentCaptcha.type === "checkbox" ? (
              <Input type="checkbox" className="mt-2" required />
            ) : (
              <Input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="mt-2"
                required
              />
            )}
          </div>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

