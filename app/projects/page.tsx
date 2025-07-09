'use client';

import { useState } from 'react';

const Projects = () => {
  const [showMajorProjects, setShowMajorProjects] = useState(true);

  return (
    <div className="min-h-screen pt-[114px] md:pt-[98px] pb-16 p-4 md:p-8 lg:px-24 font-mono">
      <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
        {/* Page Header */}
        <section className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">projects</h1>
          <p className="text-muted-foreground">
            Here are some of the projects I've been working on:
          </p>
        </section>

        {/* Toggle Section */}
        <section className="space-y-4">
          <div className="flex space-x-2 md:space-x-4 mt-4">
            <button
              onClick={() => setShowMajorProjects(true)}
              className={`px-3 md:px-4 py-2 rounded text-sm md:text-base ${showMajorProjects ? 'bg-primary text-primary-foreground' : 'bg-transparent text-primary'}`}
            >
              Major Projects
            </button>
            <button
              onClick={() => setShowMajorProjects(false)}
              className={`px-3 md:px-4 py-2 rounded text-sm md:text-base ${!showMajorProjects ? 'bg-gray-800 text-white' : 'bg-transparent text-black-800'}`}
            >
              Minor Projects
            </button>
          </div>
        </section>

        {/* Custom CSS for blinking animation */}
        <style jsx>{`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0.3; }
          }
          .blinking-dot {
            animation: blink 1.5s infinite;
          }
        `}</style>

        {/* Major Projects Section */}
        {showMajorProjects && (
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold">Major Projects</h2>

            {/* QueryNox Project Card */}
            <div className="p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-semibold">QueryNox</h3>
                <div className="flex items-center gap-2 px-3 py-1 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-background">
                  <div className="w-2 h-2 bg-green-500 rounded-full blinking-dot"></div>
                  <span className="text-sm font-medium text-foreground">Ongoing</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-yellow-500 text-black text-sm rounded hover:bg-yellow-600 transition-colors duration-200">
                  JavaScript
                </span>
                <span className="px-2 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors duration-200">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors duration-200">
                  MongoDB
                </span>
                <span className="px-2 py-1 bg-purple-500 text-white text-sm rounded hover:bg-purple-600 transition-colors duration-200">
                  Multi-AI
                </span>
                <span className="px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors duration-200">
                  RAG
                </span>
              </div>
              <ul className="mt-2 text-muted-foreground list-disc pl-5">
                <li>Multi-model AI chat platform integrating OpenAI, Claude, Llama, and Gemini .</li>
                <li>Features advanced web search augmentation and document-based context (RAG) for enhanced responses.</li>
                <li>Implements persistent chat history, user session management, and system prompt customization.</li>
                <li>Supports PDF document analysis, multi-file upload processing, and image generation.</li>
                <li>Built with robust error handling, file size limits, and optimized context generation for performance.</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/hackice20/querynox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* PG-RAG Project Card */}
            <div className="p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">PG-RAG (Paul Graham Essays RAG System)</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors duration-200">
                  Python
                </span>
                <span className="px-2 py-1 bg-purple-500 text-white text-sm rounded hover:bg-purple-600 transition-colors duration-200">
                  OpenAI API
                </span>
                <span className="px-2 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors duration-200">
                  RAG
                </span>
                <span className="px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors duration-200">
                  Web Scraping
                </span>
                <span className="px-2 py-1 bg-yellow-500 text-black text-sm rounded hover:bg-yellow-600 transition-colors duration-200">
                  Embeddings
                </span>
              </div>
              <ul className="mt-2 text-muted-foreground list-disc pl-5">
                <li>Intelligent RAG system for querying Paul Graham's essays using natural language processing.</li>
                <li>Combines web scraping, text embedding generation, and OpenAI's language models for contextual responses.</li>
                <li>Features semantic search with conversation history maintenance for enhanced context awareness.</li>
                <li>Implements robust error handling, retry logic for API calls, and efficient essay chunking mechanisms.</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/hackice20/pg-rag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Bolty Project Card */}
            <div className="p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Boltly</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-indigo-500 text-white text-sm rounded hover:bg-indigo-600 transition-colors duration-200">
                  WebContainer API
                </span>
                <span className="px-2 py-1 bg-teal-500 text-white text-sm rounded hover:bg-teal-600 transition-colors duration-200">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-pink-500 text-white text-sm rounded hover:bg-pink-600 transition-colors duration-200">
                  Claude AI API
                </span>
              </div>
              <ul className="mt-2 text-muted-foreground list-disc pl-5">
                <li>Utilized the WebContainer API to enable an in-browser Node.js environment for a seamless development experience.</li>
                <li>Integrated Claude AI API for dynamic content generation and enhanced interactivity.</li>
                <li>Developed using TypeScript for robust type safety and maintainability.</li>
                <li>Implemented a code editor using Monaco Editor, allowing users to write and test code directly in the browser due to web containers.</li>
                <li>Created a responsive UI with Vite-powered development and Tailwind CSS for modern styling.</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/hackice20/boltly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Sync Script Project Card */}
            <div className="p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Sync Script</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors duration-200">
                  Mongo DB
                </span>
                <span className="px-2 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors duration-200">
                  Socket io
                </span>
                <span className="px-2 py-1 bg-yellow-500 text-black text-sm rounded hover:bg-yellow-600 transition-colors duration-200">
                  Node
                </span>
                <span className="px-2 py-1 bg-purple-500 text-white text-sm rounded hover:bg-purple-600 transition-colors duration-200">
                  React
                </span>
                <span className="px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors duration-200">
                  Express
                </span>
              </div>
              <ul className="mt-2 text-muted-foreground list-disc pl-5">
                <li>Developed Sync-Script, a real-time collaborative text editor supporting multiple users simultaneously.</li>
                <li>Implemented instant synchronization of document changes across clients using Web-Sockets.</li>
                <li>Configured automatic periodic saving to prevent data loss during editing sessions.</li>
                <li>Designed an intuitive interface with customizable toolbar options for enhanced user experience.</li>
                <li>Enabled seamless document management through unique identifiers for creating and accessing documents.</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/hackice20/Sync-Script"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
                >
                  GitHub
                </a>
                <a
                  href="https://sync-script-lac.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/90"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* AI Search Agent Project Card */}
            <div className="p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">AI Search Agent (Perplexity Clone)</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
                  Groq
                </span>
                <span className="px-2 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600">
                  Google Search API
                </span>
                <span className="px-2 py-1 bg-yellow-500 text-black text-sm rounded hover:bg-yellow-600">
                  Node
                </span>
                <span className="px-2 py-1 bg-purple-500 text-white text-sm rounded hover:bg-purple-600">
                  React
                </span>
                <span className="px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600">
                  Express
                </span>
              </div>
              <ul className="mt-2 text-muted-foreground list-disc pl-5">
                <li>Leveraged Llama-3.3 AI for natural language understanding and processing.</li>
                <li>Integrated Google Custom Search API to provide reliable web search results.</li>
                <li>Created a clean, responsive UI to ensure seamless user experience across devices.</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/hackice20/perplexity-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
                >
                  GitHub
                </a>
                <a
                  href="https://perplexity-clone-drab.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/90"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* Justice-GPT Project Card */}
            <div className="p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Justice-GPT</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors duration-200">
                  Gemini AI API
                </span>
                <span className="px-2 py-1 bg-purple-500 text-white text-sm rounded hover:bg-purple-600 transition-colors duration-200">
                  React
                </span>
              </div>
              <ul className="mt-2 text-muted-foreground list-disc pl-5">
                <li>Developed Gemini AI Crime Case Generator, a web-based tool to analyze crime cases based on the Indian Constitution.</li>
                <li>Integrates the Gemini API to map user-submitted crime details to relevant legal articles and case analysis.</li>
                <li>Features a responsive UI built with React, TypeScript, and Tailwind CSS for a seamless user experience across devices.</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/hackice20/justice-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
                >
                  GitHub
                </a>
                <a
                  href="https://yashs-justice-gpt.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/90"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* Micro-GPT Project Card */}
            <div className="p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Micro-GPT</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors duration-200">
                  Python
                </span>
                <span className="px-2 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors duration-200">
                  Jupyter Notebook
                </span>
                <span className="px-2 py-1 bg-yellow-500 text-black text-sm rounded hover:bg-yellow-600 transition-colors duration-200">
                  Embeddings
                </span>
                <span className="px-2 py-1 bg-purple-500 text-white text-sm rounded hover:bg-purple-600 transition-colors duration-200">
                  Attention
                </span>
              </div>
              <ul className="mt-2 text-muted-foreground list-disc pl-5">
                <li>Implemented "Attention Is All You Need" architecture in Python for local GPT-style query handling.</li>
                <li>Designed a lightweight model optimized for offline text embeddings and question-answering.</li>
                <li>Prioritized data privacy, faster response times, and control in local environments.</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/hackice20/micro-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>
        )}

           {/* Minor Projects Section */}
           {!showMajorProjects && (
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold">Minor Projects</h2>

            {/* Go Blog Backend Project Card */}
            <div className="p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-semibold">Go Blog Backend</h3>
                <div className="flex items-center gap-2 px-3 py-1 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-background">
                  <div className="w-2 h-2 bg-green-500 rounded-full blinking-dot"></div>
                  <span className="text-sm font-medium text-foreground">Ongoing</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-cyan-500 text-white text-sm rounded hover:bg-cyan-600 transition-colors duration-200">
                  Go
                </span>
                <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors duration-200">
                  Backend
                </span>
                <span className="px-2 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors duration-200">
                  REST API
                </span>
              </div>
              <ul className="mt-2 text-muted-foreground list-disc pl-5">
                <li>RESTful blog backend service built with Go for high performance and scalability.</li>
                <li>Implements modern backend architecture patterns with clean code organization.</li>
                <li>Features comprehensive API endpoints for blog post management and user operations.</li>
                <li>Currently under active development with ongoing feature additions and optimizations.</li>
                <li>Designed for easy deployment and maintenance in production environments.</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/hackice20/go-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Go YouTube Clipper Project Card */}
            <div className="p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Go YouTube Clipper</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-cyan-500 text-white text-sm rounded hover:bg-cyan-600 transition-colors duration-200">
                  Go
                </span>
                <span className="px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors duration-200">
                  yt-dlp
                </span>
                <span className="px-2 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors duration-200">
                  FFmpeg
                </span>
                <span className="px-2 py-1 bg-purple-500 text-white text-sm rounded hover:bg-purple-600 transition-colors duration-200">
                  CLI
                </span>
              </div>
              <ul className="mt-2 text-muted-foreground list-disc pl-5">
                <li>Video and audio download/trim tool that leverages yt-dlp for downloading and FFmpeg for manipulation.</li>
                <li>Supports downloading full videos, audio-only, and precise trimming with start/end time specifications.</li>
                <li>Features organized file management with timestamped outputs in a dedicated downloads folder.</li>
                <li>Implements automatic cleanup of temporary files after processing operations.</li>
                <li>Cross-platform compatibility with support for various video platforms and formats.</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/hackice20/go-yt-clipper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* GoLang TCP File Transfer Project Card */}
            <div className="p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">GoLang TCP File Transfer</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-cyan-500 text-white text-sm rounded hover:bg-cyan-600 transition-colors duration-200">
                  Go
                </span>
                <span className="px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors duration-200">
                  TCP
                </span>
                <span className="px-2 py-1 bg-yellow-500 text-black text-sm rounded hover:bg-yellow-600 transition-colors duration-200">
                  Networking
                </span>
                <span className="px-2 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors duration-200">
                  File Transfer
                </span>
              </div>
              <ul className="mt-2 text-muted-foreground list-disc pl-5">
                <li>Client-server application implementing efficient file transfer over TCP protocol using Go.</li>
                <li>Features both HTTP and TCP protocol support with configurable server and client modes.</li>
                <li>Implements optimized streaming for large files without loading entire files into memory.</li>
                <li>Supports parallel TCP connections for enhanced transfer speeds and reliability.</li>
                <li>Includes command-line interface with flexible configuration options for various use cases.</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/hackice20/golang-tcp-file-transfer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Invoice Generator Project Card */}
            <div className="p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Invoice Generator</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors duration-200">
                  html2pdf
                </span>
                <span className="px-2 py-1 bg-purple-500 text-white text-sm rounded hover:bg-purple-600 transition-colors duration-200">
                  React
                </span>
              </div>
              <ul className="mt-2 text-muted-foreground list-disc pl-5">
                <li>A user-friendly invoice generator with real-time preview and professional design.</li>
                <li>Features customer and business details forms with accurate validation and business stamp upload.</li>
                <li>Dynamic invoice item addition with automatic calculation of totals.</li>
                <li>Real-time invoice preview with professional layout, terms, and conditions.</li>
                <li>Responsive design with split-screen interface for both desktop and mobile optimization.</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/hackice20/invoice-gen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
                >
                  GitHub
                </a>
                <a
                  href="https://invoice-gen-delta.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/90"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* GoLang TODO CLI Project Card */}
            <div className="p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">GoLang TODO CLI</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors duration-200">
                  Golang
                </span>
                <span className="px-2 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors duration-200">
                  JSON
                </span>
              </div>
              <ul className="mt-2 text-muted-foreground list-disc pl-5">
                <li>Developed a command-line interface tool in Go for managing to-do tasks efficiently.</li>
                <li>Implemented functionality to add, list, edit, and toggle tasks directly from the terminal.</li>
                <li>Optimized user interaction by simplifying task management through intuitive CLI commands.</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/hackice20/todo-cli-go"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* LLM-TxtFile Project Card */}
            <div className="p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">LLM-TxtFile Chatting</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors duration-200">
                  Llama3-8B
                </span>
                <span className="px-2 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors duration-200">
                  Ollama
                </span>
                <span className="px-2 py-1 bg-yellow-500 text-black text-sm rounded hover:bg-yellow-600 transition-colors duration-200">
                  Embeddings
                </span>
                <span className="px-2 py-1 bg-purple-500 text-white text-sm rounded hover:bg-purple-600 transition-colors duration-200">
                  RAG
                </span>
              </div>
              <ul className="mt-2 text-muted-foreground list-disc pl-5">
                <li>Engineered a Retrieval-Augmented Generation (RAG) application using Llama3 8B with Ollama, delivering enhanced text generation capabilities.</li>
                <li>Designed custom document ingestion and retrieval pipelines, optimizing response accuracy without relying on Lang-chain.</li>
                <li>Streamlined real-time text processing by implementing efficient search, ranking, and low-latency retrieval for large datasets.</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/hackice20/llm-txtfile-chatting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Multithreaded HTTP Server in Rust Project Card */}
            <div className="p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Multithreaded HTTP Server in Rust</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors duration-200">
                  Rust
                </span>
                <span className="px-2 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors duration-200">
                  Multi Threading
                </span>
              </div>
              <ul className="mt-2 text-muted-foreground list-disc pl-5">
                <li>A simple multithreaded HTTP server written in Rust that handles multiple client requests concurrently using threads.</li>
                <li>Responds with a basic "Hello, World!" message to any incoming HTTP request.</li>
                <li>Supports testing via multiple simultaneous requests using browser tabs or curl command-line tool.</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/hackice20/multi-threaded-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Projects;

