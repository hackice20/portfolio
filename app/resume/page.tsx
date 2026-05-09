"use client"
import { useEffect } from "react"

export default function ResumeRedirectPage() {
  useEffect(() => {
    window.location.replace(
      "https://drive.google.com/file/d/1-Eti3Hj972o-pz3XXmbYEEiaaf3sxSWv/view?usp=sharing"
    )
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-sm text-muted-foreground">Redirecting to resume…</p>
    </div>
  )
}


