"use client"
import { GithubIcon, LinkedinIcon, FileText, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40" style={{ WebkitTransform: 'translateX(-50%)' }}>
      <div className="frosted-glass dark:frosted-glass-dark levitate rounded-2xl px-3 sm:px-4 md:px-6 py-2 md:py-3 shadow-xl" style={{ WebkitBackfaceVisibility: 'hidden' }}>
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <a 
            href="https://github.com/hackice20" 
            className="cursor-pointer hover:text-primary transition-all duration-200" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/yash-kamble205/" 
            className="cursor-pointer hover:text-primary transition-all duration-200" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a 
            href="https://twitter.com/hackice20" 
            className="cursor-pointer hover:opacity-70 transition-all duration-200" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="/X%20logo.png" 
              alt="X (Twitter)" 
              className="w-5 h-5 sm:w-6 sm:h-6 x-logo"
            />
          </a>
          <a 
            href="mailto:contact@yashworks.xyz" 
            className="cursor-pointer hover:text-primary transition-all duration-200" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a 
            href="https://drive.google.com/file/d/1MMxYUuAqhvNW2eul5AqIqT5gKRGqKxbD/view?usp=sharing" 
            className="cursor-pointer hover:text-primary transition-all duration-200" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
} 
