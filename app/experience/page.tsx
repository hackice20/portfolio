export default function Experience() {
  return (
    <main className="h-screen flex items-start justify-center pt-[114px] md:pt-[98px] p-4 md:p-8 font-mono">
      <div className="max-w-3xl mx-auto w-full">
        <section className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">experience</h1>
          <ul className="list-disc list-inside space-y-3 text-muted-foreground">
            <li>
              <span className="text-base md:text-lg font-bold">winter intern Magnacamz Technologies Pvt. Ltd.</span>
              <ul className="list-disc list-inside pl-4 md:pl-5 space-y-2 mt-2">
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
