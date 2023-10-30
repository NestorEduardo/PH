import { FunctionComponent } from "react";
import CustomButton from "../button/CustomButton";

type Props = {
    title: string | undefined,
    description: string | undefined,
    image: string | undefined,
    upperCaseTitle?: boolean,
    upperCaseDescription?:boolean,
    lowerCaseTitle?:boolean,
    lowerCaseDescription?:boolean,
    itemsLeft?: boolean,
    fontBoldTitle?: boolean,
    fontBoldDescription?:boolean,
    button?:boolean,
    smallDescription?:boolean
}

const Banner:FunctionComponent<Props> = (props) => {
  return (
    <div className="w-full bg-transparent relative">
      <div className="w-full filter h-80 bg-cover bg-center" style={{ backgroundImage: `url(${props.image})`, filter: 'brightness(50%)' }}>
      </div>
      <div className={`absolute top-1/2 -translate-y-1/2 ${props.itemsLeft ? 'text-left px-4' : 'text-center left-1/2 transform -translate-x-1/2'}`}>
        <div className={` text-white text-xl lg:text-2xl`}>
          <p className={`${props.upperCaseTitle && 'uppercase'} ${props.lowerCaseTitle && 'lowercase'} ${props.fontBoldTitle && 'font-bold'} mb-4 sm:mb-7 lg:mb-14`}>
            {props.title}
          </p>
          <p className={`${props.lowerCaseDescription && 'lowercase'} ${props.upperCaseDescription && 'uppercase'} ${props.fontBoldDescription && 'font-bold'} ${props.smallDescription && 'text-sm'}`}>
            {props.description}
          </p>
        </div>
        {props.button && (
          <div className="mt-6">
            <CustomButton buttonText="Haz una cita" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Banner