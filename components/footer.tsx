"use client"
import { GithubIcon, LinkedinIcon, FileText, Mail } from "lucide-react"

export function Footer() {
  const links = [
    { href: "https://github.com/hackice20", icon: <GithubIcon />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/yash-kamble205/", icon: <LinkedinIcon />, label: "LinkedIn" },
    { href: "https://twitter.com/hackice20", icon: <img src="/X%20logo.png" alt="X (Twitter)" className="w-full h-full" />, label: "X" },
    { href: "mailto:contact@yashworks.xyz", icon: <Mail />, label: "Email" },
    { href: "https://drive.google.com/file/d/1MMxYUuAqhvNW2eul5AqIqT5gKRGqKxbD/view?usp=sharing", icon: <FileText />, label: "Resume" },
  ]

  return (
    <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
      <div className="frosted-glass dark:frosted-glass-dark levitate rounded-2xl px-4 md:px-6 py-3 shadow-xl">
        <div className="flex items-center justify-center gap-6">
          {links.map((item, i) => (
            <div key={i} className="relative group">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition-all duration-200 transform group-hover:scale-125"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 text-foreground">
                  {item.icon}
                </div>
              </a>

              {/* Tooltip */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-4px] transition-all duration-200 bg-black/80 text-white text-xs px-2 py-1 rounded-md pointer-events-none whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
