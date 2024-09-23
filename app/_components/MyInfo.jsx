import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ChevronUp,
  Briefcase,
  Code,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const MyInfo = ({ button }) => {
  const [activeTab, setActiveTab] = useState("experience");

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
  );

  const TabContent = ({ id, content }) => (
    <div className={`mt-2 sm:mt-4 ${activeTab === id ? "block" : "hidden"}`}>
      <p className="text-xs sm:text-sm tracking-wide">{content}</p>
    </div>
  );

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
              <h2 className="text-lg sm:text-2xl font-bold">Deepali Verma</h2>
              <p className="text-sm sm:text-lg text-gray-300">
                FrontEnd Developer
              </p>
            </div>
          </div>

          <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
            <p className="flex items-center text-xs sm:text-sm">
              <Mail size={12} className="mr-1 sm:mr-2" />
              deepaliverma064@gmail.com
            </p>
            <p className="flex items-center text-xs sm:text-sm">
              <Phone size={12} className="mr-1 sm:mr-2" />
              +91 8305483524
            </p>
            <p className="flex items-center text-xs sm:text-sm">
              <MapPin size={12} className="mr-1 sm:mr-2" />
              Jabalpur, Madhya Pradesh, India
            </p>
          </div>

          <div className="flex space-x-1 sm:space-x-2 mb-2 sm:mb-4">
            <TabButton id="experience" icon={Briefcase} label="Experience" />
            <TabButton id="skills" icon={Code} label="Skills" />
            <TabButton id="education" icon={GraduationCap} label="Education" />
          </div>

          <TabContent
            id="experience"
            content="Frontend Developer skilled in HTML, CSS, JavaScript, React, and Next.js. Experienced in
 creating responsive and dynamic web applications through internships at MnA Studios and Ravian AI."
          />
          <TabContent
            id="skills"
            content="JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB,  GitHub,"
          />
          <TabContent
            id="education"
            content="Bachelor's Degree in Science, Govt. Science College (2019 - 2022)"
          />
        </div>
        <div className="p-2 sm:p-4 bg-black/50 flex justify-between items-center">
          <span className="text-white text-xs">View Full Profile</span>
          <ChevronUp className="text-white" />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MyInfo;
