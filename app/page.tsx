import { Terminal } from "lucide-react"
import { FaJava, FaPython, FaJs, FaRust } from "react-icons/fa"
import { SiCplusplus, SiTypescript, SiReact, SiExpress, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiSqlite, SiGit, SiGithub, SiPostman, SiDocker, SiLinux, SiPrisma ,SiGo} from "react-icons/si"

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 font-mono" id="top">
      <div className="max-w-3xl mx-auto space-y-24">
        <section className="space-y-2">
          <h1 className="text-4xl font-bold">hi, i am hackice20!</h1>
          <p className="text-muted-foreground">
            i am a third year student, studying information technology.
          </p>
          <p className="text-muted-foreground">
            mainly work in Web Dev, Gen AI and a bit of ML.
          </p>
        </section>

         {/* Skills Section */}
        <section id="skills" className="space-y-2 pt-14">
          <h2 className="text-2xl font-bold">skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="border border-gray-300 dark:border-gray-700 p-7 rounded-lg space-y-2">
              <h3 className="font-bold">Languages</h3>
              <div className="flex flex-wrap gap-4">
                <FaJava className="w-8 h-8" />
                <FaPython className="w-8 h-8" />
                <SiCplusplus className="w-8 h-8" />
                <FaJs className="w-8 h-8" />
                <SiTypescript className="w-8 h-8" />
                <FaRust className="w-8 h-8" />
                <SiGo className="w-8 h-8" />
              </div>
            </div>

            {/* Frameworks */}
            <div className="border border-gray-300 dark:border-gray-700 p-7 rounded-lg space-y-2">
              <h3 className="font-bold">Frameworks</h3>
              <div className="flex flex-wrap gap-4">
                <SiReact className="w-8 h-8" />
                <SiExpress className="w-8 h-8" />
                <SiNextdotjs className="w-8 h-8" />
                <SiTailwindcss className="w-8 h-8" />
              </div>
            </div>

            {/* Databases */}
            <div className="border border-gray-300 dark:border-gray-700 p-7 rounded-lg space-y-2">
              <h3 className="font-bold">Databases</h3>
              <div className="flex flex-wrap gap-4">
                <SiMongodb className="w-8 h-8" />
                <SiPostgresql className="w-8 h-8" />
                <SiSqlite className="w-8 h-8" />
              </div>
            </div>

            {/* Tools */}
            <div className="border border-gray-300 dark:border-gray-700 p-7 rounded-lg space-y-2">
              <h3 className="font-bold">Tools</h3>
              <div className="flex flex-wrap gap-4">
                <SiGit className="w-8 h-8" />
                <SiGithub className="w-8 h-8" />
                <SiPostman className="w-8 h-8" />
                <SiDocker className="w-8 h-8" />
                <SiLinux className="w-8 h-8" />
                <SiPrisma className="w-8 h-8" />
              </div>
            </div>
          </div>
        </section>

       {/* <section id="projects" className="space-y-2 pt-14">
          <h2 className="text-2xl font-bold">projects</h2>
        </section>*/}
        
        {/* <section id="experience" className="space-y-2 pt-14">
          <h2 className="text-2xl font-bold">experience</h2>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>winter intern @ iitx</li>
            <li>research apprentice @ my college</li>
          </ul>
        </section> */}
        
       

        {/*<section id="blogs" className="space-y-2 pt-14">
          <h2 className="text-2xl font-bold">blogs</h2>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>technical blogs</li>
            <li>guides</li>
            <li>cp algorithms i am learning</li>
          </ul>
        </section>*/}

        {/*<section id="notes" className="space-y-2 pt-14">
          <h2 className="text-2xl font-bold">my handwritten notes</h2>
          <div className="h-24 flex items-center justify-center border border-dashed rounded-lg">
            <Terminal className="w-6 h-6 text-muted-foreground" />
          </div>
        </section>*/}

        <footer className="pt-8 text-sm text-muted-foreground">
          <div className="flex gap-4">
            <a href="https://github.com/hackice20" className="hover:underline">[github]</a>
            <span>|</span>
             <a href="https://www.linkedin.com/in/yash-kamble2/" className="hover:underline">[linkedin]</a>
            <span>|</span>
            <a href="https://twitter.com/hackice20" className="hover:underline">[twitter]</a>
            <span>|</span>
            <a href="mailto:hackice2004@gmail.com" className="hover:underline">[email]</a>
          </div>
        </footer>
      </div>
    </main>
  )
}
