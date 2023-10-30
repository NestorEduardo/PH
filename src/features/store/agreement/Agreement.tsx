import { FunctionComponent } from "react"
import { lorem } from "../../../constants/lorem"

type Props = {
    doctor: string | undefined
    handleAgreement: () => void
}

const Agreement:FunctionComponent<Props> = (props) => {
  return (
    <div className="flex flex-col items-center w-full bg-slate-200 py-1 px-4 border-2 border-slate-300 rounded-md">
        <div className="font-semibold py-2"> Consentimiento de servicios para Telemedicina</div>
        <div className="w-full bg-slate-50 my-2 border-2 border-slate-300 mb-4">
            <p className="px-2 py-1 text-xs sm:text-sm">{lorem}</p>
        </div>
        <div className="flex flex-col self-start">
            <div className="text-xs sm:text-sm">Campo Obligatorio<span className="text-red-500">*</span></div>
            <div className="items-center">
                <input type="checkbox" onChange={props.handleAgreement} />
                <label className="text-xs sm:text-sm"> He leido y aceptado conforme el consentimiento con la {props.doctor}</label>
            </div>
        </div>
    </div>
  )
}

export default Agreement