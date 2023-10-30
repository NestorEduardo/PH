import { FunctionComponent } from "react"
import { Link } from "react-router-dom"

type Props = {
    routePath: string
    buttonText: string
}

const NavigationButton:FunctionComponent<Props> = (props) => {
  return (
    <>
        <Link to={props.routePath}
            className=" text-sky-800 font-medium"
        >
            {props.buttonText}
        </Link>
    </>
  )
}

export default NavigationButton