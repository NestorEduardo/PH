import { FunctionComponent } from "react"

type Props = {
    title: string,
}

export const CustomLabel:FunctionComponent<Props> = (props) => {
  return (
    <div className="text-center bg-white text-teal-600 py-1 rounded-full font-bold w-52 sm:w-72 md:w-full">
        {props.title}
    </div>
  )
}
