'use client';

export type ProjectLink = {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
};


export type ProjectMedia =
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'video'; sources: { src: string; type: string }[]; poster?: string };

export type Project = {
  id: string;
  title: string;
  section: 'major' | 'minor';
  media?: ProjectMedia;
  tags: string[];
  points: string[];
  links?: ProjectLink[];
  statusChip?: { label: string }; // optional right-side status chip
};

export const PROJECTS: Project[] = [
  {
    id: 'querynox',
    title: 'QueryNox',
    section: 'major',
    media: { kind: 'image', src: '/querynox.webp', alt: 'QueryNox' },
    tags: ['JavaScript', 'Node.js', 'MongoDB', 'Multi-AI', 'RAG'],
    points: [
      'Multi-model AI chat platform integrating OpenAI, Claude, Llama, and Gemini .',
      'Features advanced web search augmentation and document-based context (RAG) for enhanced responses.',
      'Implements persistent chat history, user session management, and system prompt customization.',
      'Supports PDF document analysis, multi-file upload processing, and image generation.',
      'Built with robust error handling, file size limits, and optimized context generation for performance.',
    ],
    links: [
      { href: 'https://github.com/hackice20/querynox', label: 'GitHub', variant: 'primary' },
      { href: 'https://querynox.xyz', label: 'Live Demo', variant: 'secondary' },
    ],
  },
  {
    id: 'pg-rag',
    title: 'PG-RAG (Paul Graham Essays RAG System)',
    section: 'major',
    media: { kind: 'image', src: '/pg-rag-image.png', alt: 'PG-RAG (Paul Graham Essays RAG System)' },
    tags: ['Python', 'OpenAI API', 'RAG', 'Web Scraping', 'Embeddings'],
    points: [
      "Intelligent RAG system for querying Paul Graham's essays using natural language processing.",
      "Combines web scraping, text embedding generation, and OpenAI's language models for contextual responses.",
      'Features semantic search with conversation history maintenance for enhanced context awareness.',
      'Implements robust error handling, retry logic for API calls, and efficient essay chunking mechanisms.',
    ],
    links: [{ href: 'https://github.com/hackice20/pg-rag', label: 'GitHub', variant: 'primary' }],
  },
  {
    id: 'boltly',
    title: 'Boltly',
    section: 'major',
    media: {
      kind: 'video',
      sources: [
        { src: 'https://cdn.jsdelivr.net/gh/hackice20/portfolio@main/public/boltly.mp4', type: 'video/mp4' },
        { src: '/boltly.mp4', type: 'video/mp4' },
      ],
    },
    tags: ['WebContainer API', 'TypeScript', 'Claude AI API'],
    points: [
      'Utilized the WebContainer API to enable an in-browser Node.js environment for a seamless development experience.',
      'Integrated Claude AI API for dynamic content generation and enhanced interactivity.',
      'Developed using TypeScript for robust type safety and maintainability.',
      'Implemented a code editor using Monaco Editor, allowing users to write and test code directly in the browser due to web containers.',
      'Created a responsive UI with Vite-powered development and Tailwind CSS for modern styling.',
    ],
    links: [{ href: 'https://github.com/hackice20/boltly', label: 'GitHub', variant: 'primary' }],
  },
  {
    id: 'sync-script',
    title: 'Sync Script',
    section: 'major',
    media: { kind: 'image', src: '/sync-script-image.png', alt: 'Sync Script' },
    tags: ['Mongo DB', 'Socket io', 'Node', 'React', 'Express'],
    points: [
      'Developed Sync-Script, a real-time collaborative text editor supporting multiple users simultaneously.',
      'Implemented instant synchronization of document changes across clients using Web-Sockets.',
      'Configured automatic periodic saving to prevent data loss during editing sessions.',
      'Designed an intuitive interface with customizable toolbar options for enhanced user experience.',
      'Enabled seamless document management through unique identifiers for creating and accessing documents.',
    ],
    links: [
      { href: 'https://github.com/hackice20/Sync-Script', label: 'GitHub', variant: 'primary' },
      { href: 'https://sync-script-lac.vercel.app', label: 'Live Demo', variant: 'secondary' },
    ],
  },
  {
    id: 'perplexity',
    title: 'AI Search Agent (Perplexity Clone)',
    section: 'major',
    media: { kind: 'image', src: '/perplexity-clone-image.png', alt: 'AI Search Agent (Perplexity Clone)' },
    tags: ['Groq', 'Google Search API', 'Node', 'React', 'Express'],
    points: [
      'Leveraged Llama-3.3 AI for natural language understanding and processing.',
      'Integrated Google Custom Search API to provide reliable web search results.',
      'Created a clean, responsive UI to ensure seamless user experience across devices.',
    ],
    links: [
      { href: 'https://github.com/hackice20/perplexity-clone', label: 'GitHub', variant: 'primary' },
      { href: 'https://perplexity-clone-drab.vercel.app', label: 'Live Demo', variant: 'secondary' },
    ],
  },
  {
    id: 'justice-gpt',
    title: 'Justice-GPT',
    section: 'major',
    media: { kind: 'image', src: '/justice-gpt-image.png', alt: 'Justice-GPT' },
    tags: ['Gemini AI API', 'React'],
    points: [
      'Developed Gemini AI Crime Case Generator, a web-based tool to analyze crime cases based on the Indian Constitution.',
      'Integrates the Gemini API to map user-submitted crime details to relevant legal articles and case analysis.',
      'Features a responsive UI built with React, TypeScript, and Tailwind CSS for a seamless user experience across devices.',
    ],
    links: [
      { href: 'https://github.com/hackice20/justice-gpt', label: 'GitHub', variant: 'primary' },
      { href: 'https://yashs-justice-gpt.vercel.app', label: 'Live Demo', variant: 'secondary' },
    ],
  },
  {
    id: 'unbounded',
    title: 'UnBoundEd',
    section: 'major',
    media: { kind: 'image', src: '/unbounded-image.png', alt: 'UnboundEd' },
    tags: ['Next.js', 'AI', 'Cloudinary', 'jsPDF', 'React Lazy Loading'],
    points: [
      'Delivers downloadable lessons (text/video) with background sync for progress and scores.',
      'AI tutor answers questions instantly and adapts study paths to learner performance.',
      'Lightweight PWA optimized for 2G/3G, with aggressive caching and lazy media.',
      'Micro‑certifications, badges, and a leaderboard to boost engagement and retention.',
      'Learn‑to‑earn rewards system to reduce costs and motivate course completion.',
      'Community layer with mentor matching, peer groups, and discussion forums.',
    ],
    links: [
      { href: 'https://github.com/hackice20/UnBoundEd', label: 'GitHub 1', variant: 'primary' },
      { href: 'https://github.com/hackice20/Code_Sprinters', label: 'GitHub 2', variant: 'secondary' },
    ],
  },
  {
    id: 'micro-gpt',
    title: 'Micro-GPT',
    section: 'major',
    media: { kind: 'image', src: '/micro-gpt-image.png', alt: 'micro-GPT' },
    tags: ['Python', 'Jupyter Notebook', 'Embeddings', 'Attention'],
    points: [
      'Implemented "Attention Is All You Need" architecture in Python for local GPT-style query handling.',
      'Designed a lightweight model optimized for offline text embeddings and question-answering.',
      'Prioritized data privacy, faster response times, and control in local environments.',
    ],
    links: [{ href: 'https://github.com/hackice20/micro-gpt', label: 'GitHub', variant: 'primary' }],
  },

  // Minor projects
  {
    id: 'go-blog-backend',
    title: 'Go Blog Backend',
    section: 'minor',
    statusChip: { label: 'Ongoing' },
    tags: ['Go', 'Backend', 'REST API'],
    points: [
      'RESTful blog backend service built with Go for high performance and scalability.',
      'Implements modern backend architecture patterns with clean code organization.',
      'Features comprehensive API endpoints for blog post management and user operations.',
      'Currently under active development with ongoing feature additions and optimizations.',
      'Designed for easy deployment and maintenance in production environments.',
    ],
    links: [{ href: 'https://github.com/hackice20/go-blog', label: 'GitHub', variant: 'primary' }],
  },
  {
    id: 'go-yt-clipper',
    title: 'Go YouTube Clipper',
    section: 'minor',
    media: { kind: 'image', src: '/yt-clipper.png', alt: 'Go YouTube Clipper' },
    tags: ['Go', 'yt-dlp', 'FFmpeg', 'CLI'],
    points: [
      'Video and audio download/trim tool that leverages yt-dlp for downloading and FFmpeg for manipulation.',
      'Supports downloading full videos, audio-only, and precise trimming with start/end time specifications.',
      'Features organized file management with timestamped outputs in a dedicated downloads folder.',
      'Implements automatic cleanup of temporary files after processing operations.',
      'Cross-platform compatibility with support for various video platforms and formats.',
    ],
    links: [{ href: 'https://github.com/hackice20/go-yt-clipper', label: 'GitHub', variant: 'primary' }],
  },
  {
    id: 'go-tcp-transfer',
    title: 'GoLang TCP File Transfer',
    section: 'minor',
    media: { kind: 'image', src: '/go-tcp-server.png', alt: 'GoLang TCP File Transfer' },
    tags: ['Go', 'TCP', 'Networking', 'File Transfer'],
    points: [
      'Client-server application implementing efficient file transfer over TCP protocol using Go.',
      'Features both HTTP and TCP protocol support with configurable server and client modes.',
      'Implements optimized streaming for large files without loading entire files into memory.',
      'Supports parallel TCP connections for enhanced transfer speeds and reliability.',
      'Includes command-line interface with flexible configuration options for various use cases.',
    ],
    links: [{ href: 'https://github.com/hackice20/golang-tcp-file-transfer', label: 'GitHub', variant: 'primary' }],
  },
  {
    id: 'invoice-gen',
    title: 'Invoice Generator',
    section: 'minor',
    media: { kind: 'image', src: '/invoice-gen-image.png', alt: 'Invoice Generator' },
    tags: ['html2pdf', 'React'],
    points: [
      'A user-friendly invoice generator with real-time preview and professional design.',
      'Features customer and business details forms with accurate validation and business stamp upload.',
      'Dynamic invoice item addition with automatic calculation of totals.',
      'Real-time invoice preview with professional layout, terms, and conditions.',
      'Responsive design with split-screen interface for both desktop and mobile optimization.',
    ],
    links: [
      { href: 'https://github.com/hackice20/invoice-gen', label: 'GitHub', variant: 'primary' },
      { href: 'https://invoice-gen-delta.vercel.app', label: 'Live Demo', variant: 'secondary' },
    ],
  },
  {
    id: 'todo-cli',
    title: 'GoLang TODO CLI',
    section: 'minor',
    tags: ['Golang', 'JSON'],
    points: [
      'Developed a command-line interface tool in Go for managing to-do tasks efficiently.',
      'Implemented functionality to add, list, edit, and toggle tasks directly from the terminal.',
      'Optimized user interaction by simplifying task management through intuitive CLI commands.',
    ],
    links: [{ href: 'https://github.com/hackice20/todo-cli-go', label: 'GitHub', variant: 'primary' }],
  },
  {
    id: 'llm-txtfile',
    title: 'LLM-TxtFile Chatting',
    section: 'minor',
    media: { kind: 'image', src: '/llm-rag-image.png', alt: 'LLM-TxtFile Chatting' },
    tags: ['Llama3-8B', 'Ollama', 'Embeddings', 'RAG'],
    points: [
      'Engineered a Retrieval-Augmented Generation (RAG) application using Llama3 8B with Ollama, delivering enhanced text generation capabilities.',
      'Designed custom document ingestion and retrieval pipelines, optimizing response accuracy without relying on Lang-chain.',
      'Streamlined real-time text processing by implementing efficient search, ranking, and low-latency retrieval for large datasets.',
    ],
    links: [{ href: 'https://github.com/hackice20/llm-txtfile-chatting', label: 'GitHub', variant: 'primary' }],
  },
  {
    id: 'rust-http-server',
    title: 'Multithreaded HTTP Server in Rust',
    section: 'minor',
    media: { kind: 'image', src: '/rust-server.png', alt: 'Multithreaded HTTP Server in Rust' },
    tags: ['Rust', 'Multi Threading'],
    points: [
      'A simple multithreaded HTTP server written in Rust that handles multiple client requests concurrently using threads.',
      'Responds with a basic "Hello, World!" message to any incoming HTTP request.',
      'Supports testing via multiple simultaneous requests using browser tabs or curl command-line tool.',
    ],
    links: [{ href: 'https://github.com/hackice20/multi-threaded-server', label: 'GitHub', variant: 'primary' }],
  },
];

export const MAJOR_PROJECTS = PROJECTS.filter(p => p.section === 'major');
export const MINOR_PROJECTS = PROJECTS.filter(p => p.section === 'minor');


