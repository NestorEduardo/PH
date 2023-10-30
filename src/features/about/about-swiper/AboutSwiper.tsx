import { Swiper, SwiperSlide } from "swiper/react"
import AboutCard from "../about-card/AboutCard"
import { mision, values, vision } from "../../../constants/about-constants"

import "swiper/css"
import { useEffect, useState } from "react"

const AboutSwiper = () => {

    const [slidesPerView, setSlidesPerView] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1);
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
          spaceBetween={5}
          className="text-center "
        >
            <SwiperSlide className="">
              <div className="flex">
                <AboutCard icon="mision" title="Mision" description={mision} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <AboutCard icon="vision" title="Vision" description={vision} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <AboutCard icon="values" title="Valores" description={values} />
              </div>
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default AboutSwiper