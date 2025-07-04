import { Terminal } from "lucide-react"
import { FaJava, FaPython, FaJs, FaRust } from "react-icons/fa"
import { SiCplusplus, SiTypescript, SiReact, SiExpress, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiSqlite, SiGit, SiGithub, SiPostman, SiDocker, SiLinux, SiPrisma ,SiGo} from "react-icons/si"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8 font-mono overflow-hidden" id="top">
      <div className="max-w-6xl mx-auto w-full">
        {/* Hero Section */}
        <section className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">hi, i am hackice20!</h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-2">
            i am a final year student, studying information technology.
          </p>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
            mainly work in Web Dev, Gen AI and a bit of ML.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {/* Languages */}
            <div className="frosted-glass dark:frosted-glass-dark levitate p-3 md:p-4 rounded-xl space-y-2 md:space-y-3">
              <h3 className="font-bold text-center text-xs md:text-sm">Languages</h3>
              <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
                <FaJava className="w-5 h-5 md:w-6 md:h-6" />
                <FaPython className="w-5 h-5 md:w-6 md:h-6" />
                <SiCplusplus className="w-5 h-5 md:w-6 md:h-6" />
                <FaJs className="w-5 h-5 md:w-6 md:h-6" />
                <SiTypescript className="w-5 h-5 md:w-6 md:h-6" />
                <FaRust className="w-5 h-5 md:w-6 md:h-6" />
                <SiGo className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>

            {/* Frameworks */}
            <div className="frosted-glass dark:frosted-glass-dark levitate p-3 md:p-4 rounded-xl space-y-2 md:space-y-3">
              <h3 className="font-bold text-center text-xs md:text-sm">Frameworks</h3>
              <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
                <SiReact className="w-5 h-5 md:w-6 md:h-6" />
                <SiExpress className="w-5 h-5 md:w-6 md:h-6" />
                <SiNextdotjs className="w-5 h-5 md:w-6 md:h-6" />
                <SiTailwindcss className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>

            {/* Databases */}
            <div className="frosted-glass dark:frosted-glass-dark levitate p-3 md:p-4 rounded-xl space-y-2 md:space-y-3">
              <h3 className="font-bold text-center text-xs md:text-sm">Databases</h3>
              <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
                <SiMongodb className="w-5 h-5 md:w-6 md:h-6" />
                <SiPostgresql className="w-5 h-5 md:w-6 md:h-6" />
                <SiSqlite className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>

            {/* Tools */}
            <div className="frosted-glass dark:frosted-glass-dark levitate p-3 md:p-4 rounded-xl space-y-2 md:space-y-3">
              <h3 className="font-bold text-center text-xs md:text-sm">Tools</h3>
              <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
                <SiGit className="w-5 h-5 md:w-6 md:h-6" />
                <SiGithub className="w-5 h-5 md:w-6 md:h-6" />
                <SiPostman className="w-5 h-5 md:w-6 md:h-6" />
                <SiDocker className="w-5 h-5 md:w-6 md:h-6" />
                <SiLinux className="w-5 h-5 md:w-6 md:h-6" />
                <SiPrisma className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
