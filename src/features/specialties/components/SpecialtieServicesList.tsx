import { FunctionComponent } from "react"
import { SpecialtieServices } from "../../../models/specialties"

type Props = {
  services: SpecialtieServices[] | undefined
}

const SpecialtieServicesList:FunctionComponent<Props> = (props) => {
  return (
    <div className="flex justify-center w-full bg-slate-100 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
          {props.services?.map((service, i) => {
            return (
              <div key={i} className="w-96 px-4 py-2 bg-slate-300 rounded-md">{service.title}</div>
            )
          })}
        </div>
    </div>
  )
}

export default SpecialtieServicesList