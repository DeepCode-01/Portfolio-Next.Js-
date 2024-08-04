import React, { useState } from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import {
  ChevronUp,
  Briefcase,
  Code,
  GraduationCap,
  Mail,
  Phone,
  MapPin
} from "lucide-react"
import Image from "next/image"

const MyInfo = ({ button }) => {
  const [activeTab, setActiveTab] = useState("experience")

  const TabButton = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center p-1 sm:p-2 rounded-md transition-all text-xs sm:text-sm ${
        activeTab === id
          ? "bg-white text-black"
          : "text-white hover:bg-white/20"
      }`}
    >
      <Icon size={12} className="mr-1 sm:mr-2" />
      {label}
    </button>
  )

  const TabContent = ({ id, content }) => (
    <div className={`mt-2 sm:mt-4 ${activeTab === id ? "block" : "hidden"}`}>
      <p className="text-xs sm:text-sm tracking-wide">{content}</p>
    </div>
  )

  return (
    <Popover>
      <PopoverTrigger>{button}</PopoverTrigger>
      <PopoverContent className="w-full max-w-[90vw] bg-[#19181cef]  sm:max-w-md p-0 border shadow-xl">
        <div className="p-3 sm:p-6 text-white">
          <div className="flex items-center mb-4 sm:mb-6">
            <Image
              src="/avatar.png"
              width={60}
              height={60}
              alt="avatar"
              className="rounded-full border-2 border-white mr-3 sm:mr-6"
            />
            <div>
              <h2 className="text-lg sm:text-2xl font-bold">Ritesh</h2>
              <p className="text-sm sm:text-lg text-gray-300">
                Full Stack Developer
              </p>
            </div>
          </div>

          <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
            <p className="flex items-center text-xs sm:text-sm">
              <Mail size={12} className="mr-1 sm:mr-2" />
              rk0001945@gmail.com
            </p>
            <p className="flex items-center text-xs sm:text-sm">
              <Phone size={12} className="mr-1 sm:mr-2" />
              +91 8882304322
            </p>
            <p className="flex items-center text-xs sm:text-sm">
              <MapPin size={12} className="mr-1 sm:mr-2" />
              Rajapuri, Uttam Nagar, New Delhi
            </p>
          </div>

          <div className="flex space-x-1 sm:space-x-2 mb-2 sm:mb-4">
            <TabButton id="experience" icon={Briefcase} label="Experience" />
            <TabButton id="skills" icon={Code} label="Skills" />
            <TabButton id="education" icon={GraduationCap} label="Education" />
          </div>

          <TabContent
            id="experience"
            content="1.5+ years in freelancing Full Stack development, including internship as Tech Lead & Full Stack Developer at MnA Studio"
          />
          <TabContent
            id="skills"
            content="JavaScript, TypeScript, React.js, Redux Toolkit, Next.js, Node.js, Express.js, Prisma ORM, jQuery, MongoDB, Firebase, Git, GitHub, Docker, WordPress, Shopify, AWS, Redis, GraphQL"
          />
          <TabContent
            id="education"
            content="Bachelor's Degree in Commerce, Delhi University SOL (2021 - 2024)"
          />
        </div>
        <div className="p-2 sm:p-4 bg-black/50 flex justify-between items-center">
          <span className="text-white text-xs">View Full Profile</span>
          <ChevronUp className="text-white" />
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default MyInfo