"use client"
import { useEffect } from "react"

export default function ResumeRedirectPage() {
  useEffect(() => {
    window.location.replace(
      "https://drive.google.com/file/d/1qOf2Zo1hQzLajUHL2HSC2JB287KAaw97/view?usp=sharing"
    )
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-sm text-muted-foreground">Redirecting to resume…</p>
    </div>
  )
}


