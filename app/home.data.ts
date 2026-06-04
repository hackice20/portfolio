import { FaJava, FaPython, FaJs, FaRust } from "react-icons/fa"
import {
  SiCplusplus,
  SiTypescript,
  SiReact,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiLinux,
  SiPrisma,
  SiGo,
} from "react-icons/si"

export const BIRTH_DATE_ISO = "2004-05-20T00:00:00"

export const HERO_COPY = {
  greeting: "hi, i am hackice20!",
  linePrefix: "i am a",
  lineSuffix: "yr old final year IT student, building in web dev, gen ai & a bit of ml.",
}

export type SkillSection = {
  title: string
  icons: Array<React.ComponentType<{ className?: string }>>
}

export const SKILL_SECTIONS: SkillSection[] = [
  {
    title: "Languages",
    icons: [FaJava, FaPython, SiCplusplus, FaJs, SiTypescript, FaRust, SiGo],
  },
  {
    title: "Frameworks",
    icons: [SiReact, SiExpress, SiNextdotjs, SiTailwindcss],
  },
  {
    title: "Databases",
    icons: [SiMongodb, SiPostgresql, SiSqlite],
  },
  {
    title: "Tools",
    icons: [SiGit, SiGithub, SiPostman, SiDocker, SiLinux, SiPrisma],
  },
]
