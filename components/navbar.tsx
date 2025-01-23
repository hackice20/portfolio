"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-lg mr-8 text-foreground">
            hackice20
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/projects" className="text-foreground hover:text-primary">Projects</Link>
            <Link href="/experience" className="text-foreground hover:text-primary">Experience</Link>
            <Link href="/blogs" className="text-foreground hover:text-primary">Blogs</Link>
            <Link 
              href="https://drive.google.com/file/d/1unRqggYMSWB2uhlvFay_2PE958bMi2Jg/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary"
            >
              View Resume
            </Link>
          </div>
        </div>
        <ModeToggle />
      </div>
    </nav>
  )
}