import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";

const techStack = [
  {
    category: "Frontend",
    icon: FaReact,
    technologies: ["JavaScript", "HTML", "CSS", "React.js", "Next.js"],
  },
  {
    category: "Backend",
    icon: FaNodeJs,
    technologies: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    category: "DevOps & Version Control",
    icon: FaDocker,
    technologies: ["GitHub"],
  },
];

const TechItem = ({ name, Icon }) => (
  <div className="flex items-center gap-2 bg-[#27272A] p-2 rounded">
    <Icon className="text-white text-xl" />
    <span className="text-white">{name}</span>
  </div>
);

const TechCategory = ({ category, icon: Icon, technologies }) => (
  <div className="bg-[#27272A] p-5 rounded-lg">
    <div className="flex items-center gap-2 mb-3">
      <Icon className="text-white text-2xl" />
      <h2 className="text-white text-xl font-bold">{category}</h2>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {technologies.map((tech) => {
        const TechIcon =
          tech === "JavaScript"
            ? FaJs
            : tech === "HTML"
            ? FaHtml5
            : tech === "CSS"
            ? FaCss3Alt
            : tech === "React.js"
            ? FaReact
            : tech === "Next.js"
            ? SiNextdotjs
            : tech === "Node.js"
            ? FaNodeJs
            : tech === "Express.js"
            ? SiExpress
            : tech === "MongoDB"
            ? SiMongodb
            : tech === "GitHub"
            ? FaGithub
            : FaReact;

        return <TechItem key={tech} name={tech} Icon={TechIcon} />;
      })}
    </div>
  </div>
);

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
            {techStack.map((category) => (
              <TechCategory key={category.category} {...category} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TechStack;
