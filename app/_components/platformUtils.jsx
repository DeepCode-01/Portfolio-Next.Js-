export const detectPlatform = (isPhone ) => {
    if (typeof window === "undefined") {
      return "Unknown platform";
    }
  
    const userAgent =
      window.navigator.userAgent ||
      window.navigator.vendor ||
      (window ).opera;
  
    if (isPhone) {
      if (/Android/.test(userAgent)) {
        return "Android";
      } else if (/iPhone/.test(userAgent) && !(window).MSStream) {
        return "iPhone";
      } else {
        return "Android";
      }
    } else {
      if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
        return "Mac";
      } else if (/Win32|Win64|Windows|WinCE/.test(userAgent)) {
        return "Windows";
      } else {
        return "Windows";
      }
    }
  };
  
  export const togglePlatform = (
    currentPlatform,
    isPhone
  )=> {
    if (isPhone) {
      return currentPlatform === "iPhone" ? "Android" : "iPhone";
    } else {
      return currentPlatform === "Mac" ? "Windows" : "Mac";
    }
  };