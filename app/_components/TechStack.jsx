import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger
} from "@/components/ui/dialog"
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaShopify
} from "react-icons/fa"
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiJquery,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiGraphql
} from "react-icons/si"

const techStack = [
  {
    category: "Frontend",
    icon: FaReact,
    technologies: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React.js",
      "Redux Toolkit",
      "Next.js",
      "jQuery"
    ]
  },
  {
    category: "Backend",
    icon: FaNodeJs,
    technologies: [
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "MongoDB",
      "Firebase",
      "Redis",
      "GraphQL"
    ]
  },
  {
    category: "DevOps & Version Control",
    icon: FaDocker,
    technologies: ["Git", "GitHub", "Docker"]
  },
  {
    category: "CMS & Cloud",
    icon: FaAws,
    technologies: ["WordPress", "Shopify", "AWS"]
  }
]

const TechItem = ({ name, Icon }) => (
  <div className="flex items-center gap-2 bg-[#27272A] p-2 rounded">
    <Icon className="text-white text-xl" />
    <span className="text-white">{name}</span>
  </div>
)

const TechCategory = ({ category, icon: Icon, technologies }) => (
  <div className="bg-[#27272A] p-5 rounded-lg">
    <div className="flex items-center gap-2 mb-3">
      <Icon className="text-white text-2xl" />
      <h2 className="text-white text-xl font-bold">{category}</h2>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {technologies.map(tech => {
        const TechIcon =
          tech === "JavaScript"
            ? FaJs
            : tech === "TypeScript"
            ? SiTypescript
            : tech === "HTML"
            ? FaHtml5
            : tech === "CSS"
            ? FaCss3Alt
            : tech === "React.js"
            ? FaReact
            : tech === "Redux Toolkit"
            ? SiRedux
            : tech === "Next.js"
            ? SiNextdotjs
            : tech === "jQuery"
            ? SiJquery
            : tech === "Node.js"
            ? FaNodeJs
            : tech === "Express.js"
            ? SiExpress
            : tech === "Prisma ORM"
            ? SiPrisma
            : tech === "MongoDB"
            ? SiMongodb
            : tech === "Firebase"
            ? SiFirebase
            : tech === "Redis"
            ? SiRedis
            : tech === "GraphQL"
            ? SiGraphql
            : tech === "Git"
            ? FaGitAlt
            : tech === "GitHub"
            ? FaGithub
            : tech === "Docker"
            ? FaDocker
            : tech === "WordPress"
            ? FaWordpress
            : tech === "Shopify"
            ? FaShopify
            : tech === "AWS"
            ? FaAws
            : FaReact

        return <TechItem key={tech} name={tech} Icon={TechIcon} />
      })}
    </div>
  </div>
)

const TechStack = ({ button }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Tech Stack
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Here are the technologies I have worked with
          </DialogDescription>
          <hr className="border-t-2 border-[#302f34] w-full mx-auto my-2" />
        </DialogHeader>
        <div className="w-full h-[500px] md:h-auto overflow-hidden overflow-y-auto custom-scrollbar p-2 md:p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {techStack.map(category => (
              <TechCategory key={category.category} {...category} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TechStack