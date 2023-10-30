import { Link } from "react-router-dom"
import { PublicRoutes } from "../../routes/routes"
import SocialMediaRow from "../social-media-logos/SocialMediaRow"

const Footer = () => {
  return (
    <footer>
        <div className="bg-teal-600 w-full flex flex-col justify-around gap-y-10 md:flex-row text-sm sm:text-base text-white py-12 px-4">
            <div className="flex flex-col gap-4 sm:gap-2">
                <img className="w-36" src="/images/logo/ph-white-logo.png" />
                <div className="block sm:hidden">
                    <SocialMediaRow />
                </div>
                <p className="font-semibold">Cuidamos de tu salud por dentro y por fuera</p>
                <div className="">
                    <div className="flex gap-1">
                        <p className="font-semibold">Lun - Vie </p>
                        <p>9:00 AM - 7:00 PM</p>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-semibold">Sabados </p>
                        <p>9:00 AM - 1:00 PM</p>
                    </div>
                </div>
                <p>
                    Av. Privada, #68 Torre empresarial Esmeralda local 401, <br />
                    Santo Domingo, Dominican Republic
                </p>

            </div>
            <div className="hidden sm:flex sm:flex-col gap-2">
                <div className="font-semibold text-xl">Menu</div>
                <Link to={PublicRoutes.ABOUT}>Nosotros</Link>
                <Link to={`/specialties/${"medicina-estetica"}`}>Especialidades</Link>
                <Link to={PublicRoutes.BLOG}>Blog</Link>
                <Link to={PublicRoutes.STORE}>Tienda</Link>
                <Link to={PublicRoutes.CONTACT}>Contacto</Link>
            </div>
        </div>
        <div className="bg-white w-full text-center text-xs px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-1">
                <p className="font-bold">
                    Ph Health Care © 2023. Todos los derechos reservados
                </p>
                <span className="hidden sm:block font-bold">|</span>
                <p className="sm:font-bold">Preguntas Frecuentes  <span className="font-bold">|</span>  Terminos y Condiciones</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer