import { Maximize2, Minimize2 } from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"
import { FaAndroid } from "react-icons/fa"
import { enterFullScreen } from "./DateAndWeather"
import ProjectDialog from "./box"
import TechStack from "./TechStack"
import { SiWindows } from "react-icons/si"

const PLATFORMS = {
  WINDOWS: "Windows",
  MAC: "Mac",
  ANDROID: "Android",
  IPHONE: "iPhone"
}

const MenuButtons = ({ platform, togglePlatform }) => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const handleFullScreenClick = () => enterFullScreen(setIsFullScreen)

  const getButtonConfig = key => {
    const configs = {
      pdf: {
        src: `/${platform.toLowerCase()}/pdf.png`,
        width:
          platform === PLATFORMS.WINDOWS || platform === PLATFORMS.MAC
            ? 60
            : 50,
        height: 70,
        alt: "PDF Logo",
        label: "Resume",
        href: "https://drive.google.com/file/d/1JeVe7DHFeqUAYPpGHseRSp02jiYK56NG/view?usp=sharing",
        className: "rounded-xl"
      },
      github: {
        src:
          platform === PLATFORMS.ANDROID
            ? "/windows/github.png"
            : `/${platform.toLowerCase()}/github.png`,
        width: 70,
        height: 70,
        alt: "GitHub Logo",
        label: "GitHub",
        href: "https://github.com/DeepCode-01",
        className: "rounded-xl"
      },
      linkedin: {
        src:
          platform === PLATFORMS.ANDROID
            ? "/windows/linkedin.png"
            :`/${platform.toLowerCase()}/linkedin.png`,
        width: 70,
        height: 70,
        alt: "LinkedIn Logo",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/deepali-verma-93b786265/",
        className: "rounded-xl"
      },
      x: {
        src: "/x.png",
        width: 55,
        height: 55,
        alt: "X Logo",
        label: "X",
        href: "https://x.com/DeepV_01",
        className: "rounded-xl bg-white overflow-hidden"
      },
    }
    return configs[key]
  }

  const renderButton = config => (
    <a
      href={config.href}
      target="_blank"
      className="flex flex-col items-center justify-center text-white text-sm"
    >
      <Image
        src={config.src}
        width={config.width}
        height={config.height}
        alt={config.alt}
        className={config.className}
      />
      <p className="tracking-wide mb-2">{config.label}</p>
    </a>
  )

  const renderPlatformToggleButton = () => {
    const getNextPlatform = () => {
      switch (platform) {
        case PLATFORMS.WINDOWS:
          return "Mac Mode"
        case PLATFORMS.MAC:
          return "Window Mode"
        case PLATFORMS.ANDROID:
          return "IPhone Mode"
        case PLATFORMS.IPHONE:
          return "Android Mode"
        default:
          return ""
      }
    }

    const getIcon = () => {
      switch (platform) {
        case PLATFORMS.WINDOWS:
          return (
            <Image src="/mac/apple.png" width={30} height={30} alt="Mac Logo" />
          )
        case PLATFORMS.MAC:
          return <SiWindows size={30} />
        case PLATFORMS.ANDROID:
          return (
            <Image
              src="/mac/apple.png"
              width={30}
              height={30}
              alt="iPhone Logo"
            />
          )
        case PLATFORMS.IPHONE:
          return <FaAndroid size={30} />
        default:
          return null
      }
    }

    return (
      <button
        onClick={togglePlatform}
        className="flex flex-col items-center justify-center text-white text-sm gap-2"
      >
        <span className="bg-gradient-to-t from-blue-400 to-blue-500 p-3 rounded-xl shadow-xl">
          {getIcon()}
        </span>
        <p className="tracking-wide text-center text-xs font-semibold">
          {getNextPlatform()}
        </p>
      </button>
    )
  }

  return (
    <div
      className={`
        ${
          isFullScreen
            ? "top-[40%] md:top-[35%]"
            : "top-[48%] md:top-[40%] lg:top-[42%]"
        }
        absolute -translate-y-1/2 grid gap-2
        ${
          platform === PLATFORMS.WINDOWS || platform === PLATFORMS.MAC
            ? "left-10 grid-cols-2 gap-4"
            : "grid-cols-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md"
        }
      `}
    >
      <ProjectDialog
        platform={platform}
        button={
          <button className="flex flex-col items-center justify-center text-white text-sm gap-2">
            <Image
              src="nextjs.svg"
              width={50}
              height={50}
              alt="Next.js Logo"
              className="bg-gradient-to-t from-slate-100 to-gray-200 p-1 rounded-xl shadow-xl"
            />
            <p className="tracking-wide">Projects</p>
          </button>
        }
      />

      <button
        onClick={handleFullScreenClick}
        className="flex flex-col items-center justify-center text-white text-sm gap-2"
      >
        <span className="bg-gradient-to-t from-slate-100 to-gray-200 p-[10px] rounded-xl shadow-xl">
          {isFullScreen ? (
            <Minimize2 size={28} className="text-blue-500 rotate-90" />
          ) : (
            <Maximize2 size={28} className="text-blue-500 rotate-90" />
          )}
        </span>
        <p className="tracking-wide">Fullscreen</p>
      </button>

      <TechStack
        button={
          <button className="flex flex-col items-center justify-center text-white text-sm gap-2">
            <span className="bg-gradient-to-t from-slate-100 to-gray-200 p-[10px] rounded-xl shadow-xl">
              <Image
                src={"/code.webp"}
                width={30}
                height={30}
                alt="Code Logo"
              />
            </span>
            <p className="tracking-wide">Techstack</p>
          </button>
        }
      />

      {renderButton(getButtonConfig("pdf"))}
      {renderButton(getButtonConfig("github"))}
      {renderButton(getButtonConfig("linkedin"))}
      {renderButton(getButtonConfig("x"))}
      {renderPlatformToggleButton()}
    </div>
  )
}

export default MenuButtons
