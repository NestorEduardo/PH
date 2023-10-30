import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        setIsVisible(scrollY > documentHeight / 2);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div className="w-full absolute z-10">
        {isVisible && (
          <div className="flex justify-center w-20 h-20 sm:w-24 sm:h-24 border-8 border-white bg-red-500 rounded-full cursor-pointer absolute z-10 transform right-0 -translate-x-1/2 -translate-y-1/2" onClick={() => {
            window.scrollTo(0, 0);
          }}>
            <ChevronUpIcon className="w-12 h-12 sm:w-16 sm:h-16 fill-white self-center" />
          </div>
        )}
      </div>
    );
}

export default ScrollButton