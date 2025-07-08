"use client"

import { Terminal } from "lucide-react"
import { FaJava, FaPython, FaJs, FaRust } from "react-icons/fa"
import { SiCplusplus, SiTypescript, SiReact, SiExpress, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiSqlite, SiGit, SiGithub, SiPostman, SiDocker, SiLinux, SiPrisma ,SiGo} from "react-icons/si"
import { useTheme } from "next-themes"

export default function Home() {
  const { theme } = useTheme()
  const isPookieMode = theme === "pookie"

  return (
    <main className="min-h-screen flex items-center justify-center p-3 md:p-8 font-mono overflow-hidden" id="top">
      <div className="max-w-6xl mx-auto w-full">
        {/* Hero Section */}
        <section className="text-center mb-4 md:mb-8">
          <h1 className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 ${isPookieMode ? 'pookie-text pookie-sparkle' : ''}`}>
            hi, i am hackice20!
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground mb-1 md:mb-2">
            i am a final year student, studying information technology.
          </p>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground">
            mainly work in Web Dev, Gen AI and a bit of ML.
          </p>
          {isPookieMode && (
            <p className="text-base md:text-xl mt-2 md:mt-4 pookie-text">
              ✨ pookie mode activated! ✨
            </p>
          )}
        </section>

        {/* Skills Section */}
        <section>
          <h2 className={`text-lg md:text-2xl font-bold text-center mb-3 md:mb-6 ${isPookieMode ? 'pookie-text' : ''}`}>
            skills
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
            {/* Languages */}
            <div className={`frosted-glass dark:frosted-glass-dark levitate p-2 md:p-4 rounded-xl space-y-1 md:space-y-3 ${isPookieMode ? 'pookie-sparkle' : ''}`}>
              <h3 className="font-bold text-center text-xs md:text-sm">Languages</h3>
              <div className="flex flex-wrap justify-center gap-1 md:gap-2">
                <FaJava className="w-4 h-4 md:w-6 md:h-6" />
                <FaPython className="w-4 h-4 md:w-6 md:h-6" />
                <SiCplusplus className="w-4 h-4 md:w-6 md:h-6" />
                <FaJs className="w-4 h-4 md:w-6 md:h-6" />
                <SiTypescript className="w-4 h-4 md:w-6 md:h-6" />
                <FaRust className="w-4 h-4 md:w-6 md:h-6" />
                <SiGo className="w-4 h-4 md:w-6 md:h-6" />
              </div>
            </div>

            {/* Frameworks */}
            <div className={`frosted-glass dark:frosted-glass-dark levitate p-2 md:p-4 rounded-xl space-y-1 md:space-y-3 ${isPookieMode ? 'pookie-sparkle' : ''}`}>
              <h3 className="font-bold text-center text-xs md:text-sm">Frameworks</h3>
              <div className="flex flex-wrap justify-center gap-1 md:gap-2">
                <SiReact className="w-4 h-4 md:w-6 md:h-6" />
                <SiExpress className="w-4 h-4 md:w-6 md:h-6" />
                <SiNextdotjs className="w-4 h-4 md:w-6 md:h-6" />
                <SiTailwindcss className="w-4 h-4 md:w-6 md:h-6" />
              </div>
            </div>

            {/* Databases */}
            <div className={`frosted-glass dark:frosted-glass-dark levitate p-2 md:p-4 rounded-xl space-y-1 md:space-y-3 ${isPookieMode ? 'pookie-sparkle' : ''}`}>
              <h3 className="font-bold text-center text-xs md:text-sm">Databases</h3>
              <div className="flex flex-wrap justify-center gap-1 md:gap-2">
                <SiMongodb className="w-4 h-4 md:w-6 md:h-6" />
                <SiPostgresql className="w-4 h-4 md:w-6 md:h-6" />
                <SiSqlite className="w-4 h-4 md:w-6 md:h-6" />
              </div>
            </div>

            {/* Tools */}
            <div className={`frosted-glass dark:frosted-glass-dark levitate p-2 md:p-4 rounded-xl space-y-1 md:space-y-3 ${isPookieMode ? 'pookie-sparkle' : ''}`}>
              <h3 className="font-bold text-center text-xs md:text-sm">Tools</h3>
              <div className="flex flex-wrap justify-center gap-1 md:gap-2">
                <SiGit className="w-4 h-4 md:w-6 md:h-6" />
                <SiGithub className="w-4 h-4 md:w-6 md:h-6" />
                <SiPostman className="w-4 h-4 md:w-6 md:h-6" />
                <SiDocker className="w-4 h-4 md:w-6 md:h-6" />
                <SiLinux className="w-4 h-4 md:w-6 md:h-6" />
                <SiPrisma className="w-4 h-4 md:w-6 md:h-6" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
