"use client"

import Link from "next/link"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

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

        {/* Right side: Single Toggle */}
        <ModeToggle />
      </div>
    </nav>
  )
}

