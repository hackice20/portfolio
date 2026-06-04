"use client"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { NAV_LINKS } from "@/components/constants"
import { componentStyles } from "@/components/styles"

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className={cn(componentStyles.centeredFixed, "top-2 sm:top-4 z-50")}> 
      <div className={cn(componentStyles.glassContainer, "rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4")}
        style={{ WebkitBackfaceVisibility: "hidden" }}
      >
        <div className={componentStyles.navLinks}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(componentStyles.navLink, link.isBrand && componentStyles.navBrand)}
            >
              {link.isBrand ? (
                link.label
              ) : (
                <>
                  <span className="sm:hidden">[{link.shortLabel}]</span>
                  <span className="hidden sm:inline">[{link.label}]</span>
                </>
              )}
            </Link>
          ))}
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={componentStyles.themeToggle}
          >
            <Sun className="h-3 w-3 sm:h-4 sm:w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-3 w-3 sm:h-4 sm:w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
