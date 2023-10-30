import { FunctionComponent } from "react"
import CustomButton from "../../../components/button/CustomButton"
import { Specialties } from "../../../models/specialties"
import Banner from "../../../components/banner/Banner"

type Props = {
    specialtie: Specialties | null
}

const SpecialtieBanner:FunctionComponent<Props> = (props) => {

  return (
    <>
        <div className="hidden md:block bg-teal-600 w-full">
            <div className="flex flex-col md:flex-row items-center">
                <div className="flex flex-col w-full text-white pl-12 pr-8 md:pl-24 md:pr-6 mb-6 md:mb-0 mt-6 md:mt-2 text-xs md:text-base gap-4 md:gap-6">
                    <p className="font-bold text-xl uppercase">{props.specialtie?.title}</p>
                    <div className="">
                        <p>
                            {props.specialtie?.description}
                        </p>
                    </div>
                    <CustomButton buttonText="Haz una cita" />
                </div>
                <div className="w-full">
                    <img src={props.specialtie?.image} />
                </div>
            </div>
        </div>
        <div className="block md:hidden">
            <Banner
                title={props.specialtie?.title}
                description={props.specialtie?.description}
                image={props.specialtie?.image}
                fontBoldTitle
                upperCaseTitle
                itemsLeft
                button
                smallDescription
            />
        </div>
    </>
  )
}

export default SpecialtieBanner