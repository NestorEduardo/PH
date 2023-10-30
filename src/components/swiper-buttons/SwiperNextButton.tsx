import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { FunctionComponent } from "react"

type Props = {
    next: boolean,
    nextHandler: () => void
}

const SwiperNextButton:FunctionComponent<Props> = (props) => {
  return (
    <button
            className={`w-16 rounded-md flex justify-center ${props.next && 'bg-teal-600'}`}
            onClick={props.nextHandler}
        >
            {props.next && (
                <ChevronRightIcon className="w-8 h-8 fill-white"
                />
            )}
        </button>
  )
}

export default SwiperNextButton