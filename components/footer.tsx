"use client"
import Image from "next/image"
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react"
import { SOCIAL_LINKS } from "@/components/constants"
import { cn } from "@/lib/utils"
import styles from "@/components/components.module.css"

export function Footer() {
  const iconMap = {
    github: <GithubIcon />,
    linkedin: <LinkedinIcon />,
    mail: <Mail />,
    x: (
      <Image
        src="/X%20logo.png"
        alt="X (Twitter)"
        width={28}
        height={28}
        className="w-full h-full transition-transform duration-200 dark:invert"
      />
    ),
  }

  return (
    <footer className={cn(styles.centeredFixed, styles.glassContainer, "frosted-glass dark:frosted-glass-dark levitate bottom-4 z-50 rounded-full px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 dark:border-gray-700 w-auto")}>
      <div className={styles.footerIcons}>
        {SOCIAL_LINKS.map((item, idx) => (
          <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className={`group ${styles.footerIconWrap}`}>
            <div className={styles.footerIcon}>
              {iconMap[item.icon as keyof typeof iconMap]}
            </div>
            <span className={styles.footerTooltip}>{item.label}</span>
          </a>
        ))}
      </div>
    </footer>
  )
}
