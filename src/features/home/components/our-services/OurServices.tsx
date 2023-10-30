import Title from "../../../../components/titles/Title"
import ServicesSwiper from "../services-swiper/ServicesSwiper"

const OurServices = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center sm:container sm:m-auto py-4">

        <div className="my-6">
          <Title titleText={"Nuestros Servicios"} />
        </div>
        <ServicesSwiper />
      </div>
    </>
  )
}

export default OurServices