import { CursorArrowRippleIcon, EyeIcon, StarIcon } from "@heroicons/react/20/solid"
import { FunctionComponent, useEffect, useState } from "react"

type Props = {
    title: string,
    description: string,
    icon?: string,
}

const AboutCard:FunctionComponent<Props> = (props) => {

    const [icon, setIcon] = useState<React.ReactNode | null>(null)

    useEffect(() => {
        switch (props.icon) {
            case 'mision':
                setIcon(<CursorArrowRippleIcon className="fill-white" />)
                break;
            case 'vision':
                setIcon (<EyeIcon className="fill-white" />)
                break;
            case 'values':
                setIcon(<StarIcon className="fill-white" />)
                break;
        }
    }, [props.icon])

  return (
    <div className="flex w-full md:w-64 h-80 rounded-md m-2 flex-wrap bg-white mb-12">
        <div className="flex flex-col">
            <div className="self-center pt-4">
                <div className="flex justify-center p-1 w-16 h-16 rounded-full bg-teal-600">
                    <div className="shadow-5 w-12 h-12 self-center">
                        {icon}
                    </div>
                </div>
            </div>
            <div className="flex flex-col m-4 gap-4">
                <p className="font-semibold">{props.title}</p>
                <p className=" text-xs">{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutCard