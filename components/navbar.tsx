"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle" // Import your toggle component

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background p-4">
      <div className="flex items-center justify-between">
        {/* Left side: Navbar Links */}
        <ul className="flex items-center gap-8 text-lg">
          <li>
            <Link href="/" className="font-bold">
              hackice20
            </Link>
          </li>
          <li>
            <Link href="/projects">[Projects]</Link>
          </li>
          <li>
            <Link href="/experience">[Experience]</Link>
          </li>
          <li>
            <Link href="/blogs">[Blogs]</Link>
          </li>
          <li>
            <Link href="https://drive.google.com/file/d/1unRqggYMSWB2uhlvFay_2PE958bMi2Jg/view?usp=sharing">
              [view resume]
            </Link>
          </li>
        </ul>

        {/* Right side: Toggle */}
        <div className="shrink-0">
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
