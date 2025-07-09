export default function Blogs() {
  return (
    <main className="h-screen flex items-start justify-center pt-[114px] md:pt-[98px] p-4 md:p-8 font-mono">
      <div className="max-w-3xl mx-auto w-full">
        <section className="space-y-4">
          <div className="p-4 md:p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              The Journey of a Sentence Through a Transformer
            </h3>
            <p className="text-sm md:text-base mb-3 md:mb-4">
              Explore how a simple sentence navigates through the layers of a Transformer model, unraveling the complexities of attention mechanisms and deep learning processes. This article provides an insightful walkthrough of the Transformer's architecture and its application in natural language processing tasks.
            </p>
            <a
              href="https://medium.com/@yashkam431/the-journey-of-a-sentence-through-a-transformer-434902aafb03"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 md:px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors duration-200 text-sm md:text-base font-medium"
            >
              Read More
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
