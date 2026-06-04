"use client"
import Image from "next/image"
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react"
import { SOCIAL_LINKS } from "@/components/constants"
import { cn } from "@/lib/utils"
import { componentStyles } from "@/components/styles"

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
    <footer className={cn(componentStyles.centeredFixed, "bottom-4 z-40")}> 
      <div className={cn(componentStyles.glassContainer, "rounded-2xl px-4 md:px-6 py-3")}> 
        <div className={componentStyles.footerIcons}>
          {SOCIAL_LINKS.map((item) => (
            <div key={item.href} className={componentStyles.footerIconWrap}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={componentStyles.footerIcon}
              >
                {iconMap[item.icon as keyof typeof iconMap]}
              </a>

              {/* Tooltip (activates only when this icon is hovered) */}
              <span className={componentStyles.footerTooltip}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
