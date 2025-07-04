"use client"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const { setTheme } = useTheme()

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-4xl px-2 sm:px-4">
      <div className="frosted-glass dark:frosted-glass-dark levitate rounded-2xl px-4 sm:px-4 md:px-6 py-4 sm:py-3 md:py-4 shadow-xl">
        <ul className="flex items-center justify-between gap-6 sm:gap-3 md:gap-6 text-xs sm:text-sm md:text-base font-mono">
          <li className="flex-shrink-0">
            <Link href="/" className="font-bold hover:text-primary transition-all duration-200 [@media(hover:hover)]:hover:underline py-2 px-1">
              hackice20
            </Link>
          </li>
          <li className="flex items-center gap-6 sm:gap-2 md:gap-4">
            <Link href="/projects" className="hover:text-primary transition-all duration-200 [@media(hover:hover)]:hover:underline py-2 px-2">
              <span className="sm:hidden">project</span>
              <span className="hidden sm:inline">[Projects]</span>
            </Link>
            <Link href="/experience" className="hover:text-primary transition-all duration-200 [@media(hover:hover)]:hover:underline py-2 px-2">
              <span className="sm:hidden">exp</span>
              <span className="hidden sm:inline">[Experience]</span>
            </Link>
            <Link href="/blogs" className="hover:text-primary transition-all duration-200 [@media(hover:hover)]:hover:underline py-2 px-2">
              <span className="sm:hidden">blog</span>
              <span className="hidden sm:inline">[Blogs]</span>
            </Link>
          </li>
          {/* Theme Toggle */}
          <li className="flex-shrink-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-10 w-10 sm:h-8 sm:w-8 p-0 hover:bg-primary/10">
                  <Sun className="h-4 w-4 sm:h-4 sm:w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 sm:h-4 sm:w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="frosted-glass dark:frosted-glass-dark border-none">
                <DropdownMenuItem onClick={() => setTheme("light")} className="text-black dark:text-white hover:bg-primary/10 cursor-pointer">
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="text-black dark:text-white hover:bg-primary/10 cursor-pointer">
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </div>
    </nav>
  )
}
