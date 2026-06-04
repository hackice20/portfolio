"use client"

import { useEffect, useState } from "react"
import { BIRTH_DATE_ISO, HERO_COPY, SKILL_SECTIONS } from "./home.data"

export default function Home() {
  const [age, setAge] = useState("")

  useEffect(() => {
    const birth = new Date(BIRTH_DATE_ISO)
    const frame = requestAnimationFrame(function tick() {
      const ms = Date.now() - birth.getTime()
      setAge((ms / (365.25 * 24 * 60 * 60 * 1000)).toFixed(9))
      requestAnimationFrame(tick)
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <main className="app-shell" id="top">
      <div className="app-container-lg">
        {/* Hero Section */}
        <section className="text-center mb-4 md:mb-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
            {HERO_COPY.greeting}
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground">
            {HERO_COPY.linePrefix} <span className="font-mono">{age}</span>{HERO_COPY.lineSuffix}
          </p>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-lg md:text-2xl font-bold text-center mb-3 md:mb-6">
            skills
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
            {SKILL_SECTIONS.map((section, idx) => (
              <div key={idx} className="frosted-glass dark:frosted-glass-dark levitate p-2 md:p-4 rounded-xl space-y-1 md:space-y-3">
                <h3 className="font-bold text-center text-xs md:text-sm">{section.title}</h3>
                <div className="flex flex-wrap justify-center gap-1 md:gap-2">
                  {section.icons.map((Icon, iconIdx) => (
                    <Icon key={iconIdx} className="w-4 h-4 md:w-6 md:h-6" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
