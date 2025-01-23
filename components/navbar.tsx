"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-xl">
            hackice20
          </Link>
          <ul className="hidden md:flex items-center space-x-4">
            <li><Link href="/projects" className="text-black dark:text-white">Projects</Link></li>
            <li><Link href="/experience" className="text-black dark:text-white">Experience</Link></li>
            <li><Link href="/blogs" className="text-black dark:text-white">Blogs</Link></li>
            <li>
              <Link 
                href="https://drive.google.com/file/d/1unRqggYMSWB2uhlvFay_2PE958bMi2Jg/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black dark:text-white"
              >
                View Resume
              </Link>
            </li>
          </ul>
        </div>
        <ModeToggle />
      </div>
    </nav>
  )
}