import { ArrowRightIcon } from "@heroicons/react/20/solid"
import { FunctionComponent } from "react"
import { Link } from "react-router-dom"

type Props = {
    id?: string,
    image?: string,
    title?: string,
    description?: string,
    cover?: boolean,
    hasRoutePath?: boolean,
    width: string,
    heigth?: string,
    hasPrice?: boolean,
    centerLink?: boolean,
    imageRounded?:boolean,
    fontSize?:boolean,
    biggerFont?: boolean,
    horizontal?: boolean,
}

const Card:FunctionComponent<Props> = (props) => {
  return (
    <div className={`flex ${props.width} ${props.heigth} rounded-md m-2 flex-wrap bg-white`}>
        <div className={`${props.horizontal ? 'flex gap-2 w-full sm:flex-col sm:gap-0' : 'w-full'}`}>
            {(props.image && !props.cover) &&
                <div className="shadow-5 mb-4">
                    <img className={`${props.imageRounded ? 'rounded-md' : 'rounded-t-md'}`} src={props.image} alt="imagen"/>
                </div>
            }
            {(props.cover && props.image) &&
                <div className="mb-4 bg-slate-300 rounded-md">
                    <img className="rounded-t-md pt-4 w-full h-56 sm:h-80 md:h-96 object-cover" src={props.image} alt="imagen" />
                </div>
            }
            <div className={`flex flex-col m-4 gap-2 ${props.horizontal && 'justify-center'}`}>
                <div className={`font-semibold ${props.fontSize && 'text-xs sm:text-base'}`}>{props.title}</div>
                <p className={`text-xs text-slate-500 ${props.biggerFont && 'text-base sm:text-xs'}`}>
                    {props.hasPrice && (
                        <span>RD$</span>
                    )}
                    {props.description}
                </p>
            </div>

        </div>
        {props.hasRoutePath && (
            <Link to={`/blog/article/${props.id}`} className={`flex gap-2 w-full ${props.centerLink ? 'justify-center' : 'self-end'} px-2 py-4 text-teal-600 font-semibold`}>
                Leer mas
                <span>
                    <ArrowRightIcon className="w-6 h-6" />
                </span>
            </Link>
        )}
    </div>
  )
}

export default Card