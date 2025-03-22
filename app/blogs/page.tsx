export default function Blogs() {
  return (
    <main className="min-h-screen p-8 md:p-24 font-mono flex justify-center">
      <div className="w-80 p-4 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
        <img
          src="https://raw.githubusercontent.com/hackice20/portfolio/main/transformer.png"
          alt="Transformer Model"
          className="w-2/3 mx-auto h-auto rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold text-center mb-2">
          The Journey of a Sentence Through a Transformer
        </h3>
        <p className="text-sm text-gray-600 text-center mb-4">
          Explore how a simple sentence navigates through the layers of a Transformer model...
        </p>
        <div className="flex justify-center">
          <a
            href="https://medium.com/@yashkam431/the-journey-of-a-sentence-through-a-transformer-434902aafb03"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
          >
            Read More
          </a>
        </div>
      </div>
    </main>
  );
}
