import { FunctionComponent } from "react";
import { Country, Province } from "../../../models/locations";

type Props = {
    name: string,
    defaultValue?: string,
    required: boolean,
    items: Country[] | Province[],
}

const CustomSelect:FunctionComponent<Props> = (props) => {
  return (
    <>
        <div className="">
            <select
                className="p-2 border border-slate-300 rounded-lg w-full bg-white"
                required={props.required}
                id={props.name}
            >
                {props.items.length === 0 ? (
                    <option disabled selected value={props.defaultValue}>No hay ubicaciones registradas</option>
                    ) : (
                    <>
                        <option disabled={true} selected value={props.defaultValue}>
                            {`Seleccione una ubicacion`}
                        </option>
                        {props.items.map((item) => (
                            <option key={item.id} value={item.id}>
                                {`${item.name}`}
                            </option>
                        ))}
                    </>
                )}
            </select>
        </div>
    </>
  )
}

export default CustomSelect