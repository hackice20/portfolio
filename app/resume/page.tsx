"use client"
import { useEffect } from "react"
import { RESUME_URL } from "./resume.constants"

export default function ResumeRedirectPage() {
  useEffect(() => {
    window.location.replace(RESUME_URL)
  }, [])

  return (
    <div className="app-shell">
      <p className="text-sm text-muted-foreground">Redirecting to resume…</p>
    </div>
  )
}


