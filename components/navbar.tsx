"use client"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { NAV_LINKS } from "@/components/constants"
import styles from "@/components/components.module.css"

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className={cn(styles.centeredFixed, styles.glassContainer, "frosted-glass dark:frosted-glass-dark levitate top-4 z-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 dark:border-gray-700 max-w-[90vw] sm:max-w-fit")}
      style={{ WebkitBackfaceVisibility: "hidden" }}
    >
      <ul className={styles.navLinks}>
        {NAV_LINKS.map((link) => (
          <li key={link.href} className={link.isBrand ? styles.navBrand : ""}>
            <Link
              href={link.href}
              className={styles.navLink}
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
          </li>
        ))}
        {/* Theme Toggle */}
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={styles.themeToggle} aria-label="Toggle theme">
          <Sun className="h-3 w-3 sm:h-4 sm:w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-3 w-3 sm:h-4 sm:w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </ul>
    </nav>
  )
}
