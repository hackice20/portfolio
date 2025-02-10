"use client"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle" // Adjust the import path as needed

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background p-4 pr-14 md:pr-4">
      <ul className="flex items-center gap-4 md:gap-8 text-lg">
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
        <li className="ml-auto"> {/* Added this line */}
          <ModeToggle />
        </li>
      </ul>
    </nav>
  )
}
