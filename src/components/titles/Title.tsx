import { FunctionComponent } from "react"

type Props = {
    titleText: string
}

const Title:FunctionComponent<Props> = (props) => {
  return (
    <h3 className="text-center uppercase text-sm sm:text-xl font-semibold">{props.titleText}</h3>
  )
}

export default Title