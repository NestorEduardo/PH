import Banner from "../../components/banner/Banner"
import AboutBanner from "./about-banner/AboutBanner"
import AboutInstallations from "./about-installations/AboutInstallations"
import AboutSwiper from "./about-swiper/AboutSwiper"
import PhTeam from "./ph-team/PhTeam"

const AboutContainer = () => {
  return (
    <>
        <div className="flex flex-col w-full justify-center">
            <Banner
                image="/images/about/about.png"
                title="Nosotros"
                description="Para nosotros, la belleza es un valor que va mas alla de lo estetico"
                upperCaseTitle
                upperCaseDescription
                fontBoldDescription
            />
            <div className="container py-14 px-4 self-center flex flex-col gap-6 text-xs sm:text-base">
                <h3 className="font-bold">Acerca de PH Health Care</h3>
                <img className="w-full" src="/images/about/about-2.png" alt="about-us" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="flex flex-col w-full py-10 px-3 justify-center bg-teal-600 gap-8 ">
                <p className="text-white font-bold text-xs sm:text-base md:text-xl lg:text-2xl text-center">
                    En PH Care, estamos guiados por un proposito claro que nos <br />
                    impulsa a ser la mejor version de nosotros mismos.
                </p>
                <div className="flex w-full sm:container self-center ">
                    <AboutSwiper />
                </div>
            </div>
            <PhTeam />
            <AboutInstallations />
            <AboutBanner />
        </div>
    </>
  )
}

export default AboutContainer