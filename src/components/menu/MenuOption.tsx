import { FunctionComponent } from "react"
import { Link } from "react-router-dom"

type Props = {
    title: string,
    option: string,
}

const MenuOption:FunctionComponent<Props> = (props) => {
  return (
    <Link to={`specialties/${props.option}`} className="ml-4 items-center">{props.title}</Link>
  )
}

export default MenuOption