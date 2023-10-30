import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"
import { PublicRoutes } from "../../routes/routes"
import CustomDropDown from "../menu/CustomDropDown"
import { useState } from "react"
import { Bars3Icon } from "@heroicons/react/20/solid"
import SocialMediaRow from "../social-media-logos/SocialMediaRow"
import MobileNavBar from "./MobileNavBar"

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItemCount = 1;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {/*Mobile*/}
      <div className="relative block lg:hidden py-2">
        <div className="flex justify-between px-4 items-center">
          <Link to={PublicRoutes.HOME} className="w-full">
            <img className=" w-24" src="/images/logo/ph-logo-colorful.png" />
          </Link>
          <div className="flex gap-2 items-center">
            <Link to={PublicRoutes.SHOPPING_CART}>
              <div className="relative">
                <ShoppingCartIcon className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <div className="bg-red-500 text-white rounded-full w-4 h-4 text-center absolute -top-1">
                    <span className="w-3 h-3">{cartItemCount}</span>
                  </div>
                )}
              </div>
            </Link>
            <Bars3Icon
              className="w-6 h-6 my-4 ml-2 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
        {isMenuOpen && <MobileNavBar handleCloseMenu={handleCloseMenu} />}
      </div>
      {/*DESKTOP*/}
      <div className="hidden lg:flex justify-between py-4 px-6 items-center container m-auto">
        <Link to={PublicRoutes.HOME} className="w-full">
          <img className=" w-36" src="/images/logo/ph-logo-colorful.png" />
        </Link>
        <div className="flex gap-3 font-semibold">
          <Link to={PublicRoutes.ABOUT}>Nosotros</Link>
          <CustomDropDown title="Especialidades" />
          <Link to={PublicRoutes.BLOG}>Blog</Link>
          <Link to={PublicRoutes.STORE}>Tienda</Link>
          <Link to={PublicRoutes.CONTACT}>Contacto</Link>
        </div>
        <div className="flex gap-4 w-full justify-end">
          <Link to={PublicRoutes.SHOPPING_CART}>
            <div className="relative">
              <ShoppingCartIcon className="w-8 h-8" />
              {cartItemCount > 0 && (
                <div className="bg-red-500 text-white rounded-full w-6 h-6 text-center absolute -top-1 -right-1">
                  <span className="w-3 h-3">{cartItemCount}</span>
                </div>
              )}
            </div>
          </Link>
          <SocialMediaRow />
        </div>
      </div>
    </>
  );
}

export default NavBar