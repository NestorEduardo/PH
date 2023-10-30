import { accreditionData } from "../../../../fakedb/accreditions/accreditionsData"

const Accreditations = () => {
  return (
    <>
        <div className="flex flex-wrap gap-3 justify-center">
            {accreditionData.map((accredition, i) => {
                return (
                    <img
                        key={i}
                        className=" w-40"
                        src={accredition.image}
                        alt="badge"
                    />
                )
            })}
        </div>
    </>
  )
}

export default Accreditations