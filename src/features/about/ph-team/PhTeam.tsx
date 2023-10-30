import Card from "../../../components/cards/Card"
import Title from "../../../components/titles/Title"
import { doctorsData } from "../../../fakedb/doctors/doctorsData"

const PhTeam = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="my-6">
        <Title titleText="Conoce nuestro equipo" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 m-auto md:gap-8">
        {doctorsData.map((dr, i) => {
          return (
            <Card
              key={i}
              id={dr.id}
              title={dr.name}
              description={dr.role}
              image={dr.image}
              cover={true}
              width="w-36 sm:w-44 md:w-64"
            />
          )
        })}
      </div>
    </div>
  )
}

export default PhTeam