import { Link } from "react-router-dom";
import { PublicRoutes } from "../../routes/routes";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import SocialMediaRow from "../social-media-logos/SocialMediaRow";
import { FunctionComponent, useState } from "react";

type Props = {
    handleCloseMenu: () => void
}

const MobileNavBar:FunctionComponent<Props> = (props) => {

    const [show, setShow] = useState<boolean>(false)

    const handleSpecialtiesToggle = () => {
        setShow(!show)
    }

  return (
    <>
      <div className="flex flex-col pt-8 pb-4 px-6 gap-4 absolute z-10 bg-teal-600 w-full text-white">
        <div className="flex flex-col gap-3 font-semibold">
          <Link to={PublicRoutes.ABOUT} onClick={props.handleCloseMenu}>Nosotros</Link>
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={handleSpecialtiesToggle}
          >
            Especialidades
            <span>
              <ChevronRightIcon className="w-4 h-4" />
            </span>
          </div>
          {show && (
            <div className="flex flex-col gap-2 text-xs text-slate-300">
              <Link
                to={`/specialties/medicina-estetica`}
                onClick={props.handleCloseMenu}
              >
                Medicina Estetica
              </Link>
              <Link to={`/specialties/dermatologia`} onClick={props.handleCloseMenu}>Dermatologia</Link>
              <Link to={`/specialties/cosmiatria`} onClick={props.handleCloseMenu}>Cosmiatria</Link>
              <Link to={`/specialties/masajes`} onClick={props.handleCloseMenu}>Masajes</Link>
              <Link to={`/specialties/consultas-medicas`} onClick={props.handleCloseMenu}>
                Consultas Medicas
              </Link>
            </div>
          )}
          <Link to={PublicRoutes.BLOG} onClick={props.handleCloseMenu}>Blog</Link>
          <Link to={PublicRoutes.STORE} onClick={props.handleCloseMenu}>Tienda</Link>
          <Link to={PublicRoutes.CONTACT} onClick={props.handleCloseMenu}>Contacto</Link>
        </div>
        <div className="flex flex-col gap-4 sm:gap-2 text-xs">
            <div className="flex justify-between items-center">
                <img className="w-32" src="/images/logo/ph-white-logo.png" />
                <div className="block sm:hidden">
                    <SocialMediaRow extraSmall />
                </div>
            </div>
          <p className="font-semibold">
            Cuidamos de tu salud por dentro y por fuera
          </p>
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
      </div>
    </>
  );
}

export default MobileNavBar