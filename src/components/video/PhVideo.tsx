import CustomButton from "../button/CustomButton"

const PhVideo = () => {
  return (
    <div className="relative sm:pb-96">
        <video className="sm:absolute inset-0 w-full h-full object-cover filter brightness-50" autoPlay loop muted>
          <source src="/video/reel.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-white text-xs sm:text-base md:text-xl font-bold">
            <p className="text-2xl md:text-3xl uppercase mb-4 md:mb-12">Siéntete cómoda/o en tu propia piel y vive en plenitud</p>
            <CustomButton buttonText="Haz tu cita" />
          </div>
        </div>
    </div>
  )
}

export default PhVideo