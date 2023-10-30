import { Link } from "react-router-dom"
import { PublicRoutes } from "../../../routes/routes"

const EmptyCartState = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 my-4">
        <img className="w-52" src="/public/images/store/shopping-cart/empty-cart.png" />
        <div>No hay articulos aqui</div>
        <Link
            to={PublicRoutes.STORE}
            className="w-36 py-3 bg-teal-600 cursor-pointer rounded-md text-white text-center font-bold text-xs md:text-base"
        >
            Ir a la tienda
        </Link>
    </div>
  )
}

export default EmptyCartState