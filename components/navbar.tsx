"use client"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-4xl px-2 sm:px-4" style={{ WebkitTransform: 'translateX(-50%)' }}>
      <div className="frosted-glass dark:frosted-glass-dark levitate rounded-2xl px-3 sm:px-4 md:px-6 py-3 sm:py-3 md:py-4 shadow-xl" style={{ WebkitBackfaceVisibility: 'hidden' }}>
        <ul className="flex items-center justify-between gap-3 sm:gap-3 md:gap-6 text-xs sm:text-sm md:text-base font-mono">
          <li className="flex-shrink-0">
            <Link href="/" className="font-bold hover:text-primary transition-all duration-200 [@media(hover:hover)]:hover:underline py-1 px-1">
              hackice20
            </Link>
          </li>
          <li className="flex items-center gap-3 sm:gap-2 md:gap-4">
            <Link href="/projects" className="hover:text-primary transition-all duration-200 [@media(hover:hover)]:hover:underline py-1 px-1">
              [Projects]
            </Link>
            <Link href="/experience" className="hover:text-primary transition-all duration-200 [@media(hover:hover)]:hover:underline py-1 px-1">
              [Experience]
            </Link>
            <Link href="/blogs" className="hover:text-primary transition-all duration-200 [@media(hover:hover)]:hover:underline py-1 px-1">
              [Blogs]
            </Link>
          </li>
          {/* Theme Toggle */}
          <li className="flex-shrink-0">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-8 w-8 sm:h-8 sm:w-8 rounded-md hover:bg-primary/10 transition-colors flex items-center justify-center"
            >
              <Sun className="h-3 w-3 sm:h-4 sm:w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-3 w-3 sm:h-4 sm:w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
