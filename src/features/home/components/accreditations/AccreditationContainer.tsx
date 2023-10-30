import Title from "../../../../components/titles/Title"
import Accreditations from "./Accreditations"

const AccreditationContainer = () => {
  return (
    <div className="flex flex-col py-24 gap-6 sm:container sm:m-auto">
        <div className="mb-6 hidden sm:block">
            <Title titleText="Acreditaciones" />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <Accreditations />
        </div>
    </div>
  )
}

export default AccreditationContainer