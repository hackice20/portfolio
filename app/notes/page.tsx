import { Terminal } from "lucide-react"

export default function Notes() {
  return (
    <main className="min-h-screen p-8 md:p-24 font-mono">
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="space-y-2">
          <h1 className="text-4xl font-bold">my handwritten notes</h1>
          <div className="h-24 flex items-center justify-center border border-dashed rounded-lg">
            <Terminal className="w-6 h-6 text-muted-foreground" />
          </div>
        </section>
      </div>
    </main>
  )
}