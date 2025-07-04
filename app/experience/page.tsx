export default function Experience() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-24 font-mono">
      <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
        <section className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">experience</h1>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>
              <span className="text-base md:text-lg font-bold">winter intern Magnacamz Technologies Pvt. Ltd.</span>
              <ul className="list-disc list-inside pl-4 md:pl-5 space-y-1">
                <li className="italic text-sm md:text-base">Developed and maintained scalable full-stack applications using modern technologies such as React, Node.js, Express, TypeScript, and MongoDB.</li>
                <li className="italic text-sm md:text-base">Designed and deployed responsive, user-friendly interfaces with frameworks like Tailwind CSS and Vite, ensuring cross-browser and mobile compatibility.</li>
                <li className="italic text-sm md:text-base">Collaborated with diverse tools and frameworks, achieving optimized performance, security, and usability across all projects.</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
