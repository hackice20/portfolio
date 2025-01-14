import { Terminal } from "lucide-react"

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
            <a href="https://github.com/hackice20" className="hover:underline">github</a>
            <span>|</span>
            <a href="https://twitter.com/hackiice" className="hover:underline">twitter</a>
          </div>
        </footer>
      </div>
    </main>
  )
}