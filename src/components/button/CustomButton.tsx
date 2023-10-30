import { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import { phWhatsAppLink } from "../../constants/links"

type Props = {
    buttonText: string
    isHovering?: boolean
}

const CustomButton:FunctionComponent<Props> = (props) => {
  return (
    <Link to={phWhatsAppLink}>
      <button className={`w-24 md:w-36 py-2 sm:py-4 bg-white ${props.isHovering ? 'text-teal-600' : 'text-black'} duration-300 rounded-md font-bold text-xs md:text-base`}>
          {props.buttonText}
      </button>
    </Link>
  )
}

export default CustomButton