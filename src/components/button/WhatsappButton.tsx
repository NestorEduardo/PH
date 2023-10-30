import { Link } from "react-router-dom"
import { phWhatsAppLink } from "../../constants/links"
import { useEffect, useState } from "react";

const WhatsappButton = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640)
    };

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-20">
        <div className="flex items-center justify-center w-12 h-12 sm:w-24 sm:h-24 bg-green-500 rounded-full cursor-pointer">
            <Link to={phWhatsAppLink}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={isMobile ? "24" : "60"} height={isMobile ? "24" : "60"} viewBox="0,0,256,256">
                    <g transform=""><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.5,0 -10,4.5 -10,10c0,1.8 0.50078,3.5 1.30078,5l-1.30078,5l5.19922,-1.19922c1.5,0.8 3.10078,1.19922 4.80078,1.19922c5.5,0 10,-4.5 10,-10c0,-2.7 -1.00039,-5.19961 -2.90039,-7.09961c-1.9,-1.9 -4.39961,-2.90039 -7.09961,-2.90039zM12,4c2.1,0 4.09922,0.80078 5.69922,2.30078c1.5,1.6 2.30078,3.59922 2.30078,5.69922c0,4.4 -3.6,8 -8,8c-1.3,0 -2.70078,-0.3 -3.80078,-1l-0.69922,-0.40039l-0.69922,0.20117l-2,0.5l0.5,-1.80078l0.19922,-0.80078l-0.40039,-0.69922c-0.7,-1.2 -1.09961,-2.6 -1.09961,-4c0,-4.4 3.6,-8 8,-8zM8.5,7.40039c-0.2,0 -0.49922,-0.00117 -0.69922,0.29883c-0.3,0.3 -0.90039,0.90156 -0.90039,2.10156c0,1.2 0.9,2.39961 1,2.59961c0.2,0.2 1.79883,2.79883 4.29883,3.79883c2.1,0.8 2.5,0.60156 3,0.60156c0.5,-0.1 1.50117,-0.60117 1.70117,-1.20117c0.2,-0.6 0.19883,-1.10039 0.29883,-1.40039c-0.1,-0.1 -0.2,-0.19883 -0.5,-0.29883c-0.2,-0.1 -1.39922,-0.70078 -1.69922,-0.80078c-0.3,-0.1 -0.39961,-0.20039 -0.59961,0.09961c-0.2,0.3 -0.70078,0.8 -0.80078,1c-0.1,0.2 -0.2,0.20156 -0.5,0.10156c-0.2,-0.1 -1,-0.30117 -2,-1.20117c-0.8,-0.6 -1.30039,-1.39922 -1.40039,-1.69922c-0.2,-0.2 0.00156,-0.4 0.10156,-0.5l0.39844,-0.40039c0.1,-0.1 0.10117,-0.30039 0.20117,-0.40039c0.1,-0.1 0.1,-0.20039 0,-0.40039c-0.1,-0.2 -0.60078,-1.39844 -0.80078,-1.89844c-0.2,-0.4 -0.39961,-0.40039 -0.59961,-0.40039z"></path></g></g></g>
                </svg>
            </Link>
        </div>
  </div>
  )
}

export default WhatsappButton