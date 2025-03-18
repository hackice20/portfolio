export default function Blogs() {
  return (
    <main className="min-h-screen p-8 md:p-24 font-mono">
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="space-y-2">
          <div className="p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <img
              src="https://raw.githubusercontent.com/hackice20/portfolio/main/transformer.png"
              alt="Transformer Model"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">
              The Journey of a Sentence Through a Transformer
            </h3>
            <p className="text-base mb-4">
              Explore how a simple sentence navigates through the layers of a Transformer model, unraveling the complexities of attention mechanisms and deep learning processes. This article provides an insightful walkthrough of the Transformer's architecture and its application in natural language processing tasks.
            </p>
            <a
              href="https://medium.com/@yashkam431/the-journey-of-a-sentence-through-a-transformer-434902aafb03"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors duration-200 text-base font-medium"
            >
              Read More
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
