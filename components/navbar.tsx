"use client"

import Link from "next/link"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background p-4">
      <ul className="flex items-center gap-8 text-lg">
        <li>
          <Link href="/" className="font-bold">
            hackice20
          </Link>
        </li>
       
        <li>
          <Link href="/projects">
            Projects
          </Link>
        </li>
       
        <li>
          <Link href="/blogs">
            Blogs
          </Link>
        </li>
      
      </ul>
    </nav>
  )
}