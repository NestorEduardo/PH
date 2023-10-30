import { PlayIcon } from "@heroicons/react/24/solid"
import { instalattions } from "../../../constants/about-constants"
import { useState } from "react"

const AboutInstallations = () => {

  const [isPlaying, setPlaying] = useState(false)

  const togglePlay = () => {
    setPlaying(!isPlaying)
  }

  return (
    <div className="sm:container sm:m-auto py-8">
      <div className="font-semibold text-center text-sm sm:text-xl mb-8">Nuestras instalaciones</div>
      <div className="text-center mb-8">
        {instalattions}
      </div>
      <div className="relative" style={{ paddingBottom: "47.88%" }}>
          <video className="absolute inset-0 w-full h-full object-cover filter brightness-50" controls={isPlaying} muted>
            <source src="/video/reel.mp4" type="video/mp4" />
          </video>
          {!isPlaying && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                className="flex justify-center items-center w-12 h-12 sm:w-44 sm:h-44 bg-slate-100 rounded-full cursor-pointer hover:scale-[1.1] duration-300"
                onClick={togglePlay}
                >
                <PlayIcon className="w-8 h-8 sm:w-24 sm:h-24 ml-1 sm:ml-2 p-0 fill-slate-800 self-center" />
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default AboutInstallations