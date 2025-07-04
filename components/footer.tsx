"use client"

export function Footer() {
  return (
    <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-fit px-4">
      <div className="frosted-glass dark:frosted-glass-dark levitate rounded-2xl px-4 md:px-6 py-2 md:py-3 shadow-xl">
        <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm font-mono">
          <a 
            href="https://github.com/hackice20" 
            className="hover:text-primary hover:underline transition-all duration-200" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            [github]
          </a>
          <span className="text-muted-foreground">|</span>
          <a 
            href="https://www.linkedin.com/in/yash-kamble2/" 
            className="hover:text-primary hover:underline transition-all duration-200" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            [linkedin]
          </a>
          <span className="text-muted-foreground">|</span>
          <a 
            href="https://twitter.com/hackice20" 
            className="hover:text-primary hover:underline transition-all duration-200" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            [x]
          </a>
          <span className="text-muted-foreground">|</span>
          <a 
            href="mailto:contact@yashworks.xyz" 
            className="hover:text-primary hover:underline transition-all duration-200" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            [email]
          </a>
          <span className="text-muted-foreground">|</span>
          <a 
            href="https://drive.google.com/file/d/1hl3eJNS9gtDi7DSCaLhLyvf3yuwLoWXw/view?usp=sharing" 
            className="hover:text-primary hover:underline transition-all duration-200" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            [resume]
          </a>
        </div>
      </div>
    </footer>
  )
} 