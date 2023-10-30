import { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import { Product } from "../../models/product"

type Props = {
    isVisible: boolean
    routePath: string
    item: Product | undefined
}

const Notification:FunctionComponent<Props> = (props) => {
  return (
    <div className={`w-full flex items-center justify-between ${props.isVisible ? 'opacity-100' : 'opacity-0'} px-5 py-3 bg-neutral-800 rounded-lg transition-opacity duration-200 delay-200 ease-in-out`}>
        <div className="text-white"><span className="font-medium">{props.item?.title}</span> se ha agregado a tu carrito</div>
        <Link to={props.routePath}>
            <div className="w-36 text-center bg-white text-black font-medium p-3 rounded-md">Ver carrito</div>
        </Link>
    </div>
  )
}

export default Notification