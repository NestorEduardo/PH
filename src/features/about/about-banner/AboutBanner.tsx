import { useState } from "react"
import CustomButton from "../../../components/button/CustomButton"

const AboutBanner = () => {

  const [isHovering, setHovering] = useState(false)

  const handleMouseOver = () => {
    setHovering(true)
  }

  const handleMouseOut = () => {
    setHovering(false)
  }

  return (
    <div
      className="w-full relative overflow-hidden"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
        <div className="w-full filter h-80 bg-cover bg-center hover:scale-[1.1] duration-300" style={{ backgroundImage: `url(${"/public/images/about/about-banner.png"})`, filter: 'brightness(50%)' }}>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="w-full text-white text-3xl sm:text-4xl font-bold mb-2 md:mb-6">
                Vive el alivio <br/>
                que te mereces
            </div>
            <CustomButton buttonText="Haz tu cita" isHovering={isHovering} />
        </div>
    </div>
  )
}

export default AboutBanner