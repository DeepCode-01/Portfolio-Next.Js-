import Image from "next/image"
import React, { useState } from "react"
import { FaLaptopCode } from "react-icons/fa"
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2"
import Tooltip from "../_components/Tooltip"

const Card = ({ ...project }) => {
  const {
    name,
    logo,
    description,
    techStack,
    imageSrc,
    videoSrc,
    demoLink,
    codeLink
  } = project
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div
      className="w-full flex flex-col items-center justify-center p-3 bg-[#27272A] rounded shadow"
      onMouseEnter={() => setShowVideo(true)}
      onMouseLeave={() => setShowVideo(false)}
    >
      <div className="w-full h-40 md:h-60">
        {showVideo && videoSrc ? (
          <video
            src={videoSrc}
            className="w-full h-40 md:h-60 object-cover"
            autoPlay
            loop
            muted
          />
        ) : (
          <Image
            width={1000}
            height={700}
            src={imageSrc}
            alt={name}
            className="w-full h-40 md:h-60 object-cover rounded-md"
          />
        )}
      </div>
      <div className="w-full h-full p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              width={40}
              height={40}
              src={logo}
              alt={name}
              className="w-10 h-10 rounded-full object-contain overflow-hidden"
            />
            <h1 className="text-xl font-bold">{name}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Tooltip text="Live">
              <a
                target="_blank"
                href={demoLink}
                className="text-white bg-[#302f34] px-2 py-1 block rounded-md"
              >
                <HiMiniArrowTopRightOnSquare fontSize={25} className="p-1" />
              </a>
            </Tooltip>
            {codeLink && (
              <Tooltip text="Code">
                <a
                  target="_blank"
                  href={codeLink}
                  className="text-white bg-[#302f34] px-2 py-1 rounded-md block"
                >
                  <FaLaptopCode fontSize={25} className="p-1" />
                </a>
              </Tooltip>
            )}
          </div>
        </div>
        <p className="text-gray-500">{description}</p>
        <div className="flex items-center flex-wrap gap-2 mt-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-[#302f34] px-2 py-1 rounded-md transition duration-300 ease-in-out transform hover:bg-[#3e3d42] hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card