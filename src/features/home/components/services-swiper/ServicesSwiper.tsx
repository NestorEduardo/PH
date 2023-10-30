import { Pagination } from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

//import "./servicesSwiper.styles.css"

import { phServicesData } from "../../../../fakedb/ph-services/phServicesData"
import { useEffect, useState } from "react"

const ServicesSwiper = () => {

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 720) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(2);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="w-full h-full"
      >
        {phServicesData.map((service, i) => {
          return (
            <SwiperSlide key={i} className=" text-center text-lg bg-slate-300">
              <div className="relative">
                <img className="w-full h-full block object-cover filter brightness-50" src={service.coverImage} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-white text-xs sm:text-base md:text-xl font-bold">{service.title}</div>
                </div>
              </div>

            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default ServicesSwiper