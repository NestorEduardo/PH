import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import { FunctionComponent } from "react"

type Props = {
    prev: boolean,
    prevHandler: () => void
}

const SwiperPrevButton:FunctionComponent<Props> = (props) => {
  return (
    <button
            className={`w-16 rounded-md flex justify-center ${props.prev && 'bg-slate-500'}`}
            onClick={props.prevHandler}
        >
            {props.prev && (
                <ChevronLeftIcon className="w-8 h-8 fill-white"
                />
            )}
        </button>
  )
}

export default SwiperPrevButton