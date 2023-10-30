import { FunctionComponent } from "react"

type Props = {
    title: string
    mustBeFilled?: boolean
}

const FormLabel:FunctionComponent<Props> = (props) => {
  return (
    <div className="flex">
        <label className="">{props.title}</label>
        {props.mustBeFilled && (
            <span className="text-red-500">*</span>
        )}
    </div>
  )
}

export default FormLabel