import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore from "swiper"
import "swiper/css"

import { articlesData } from "../../fakedb/articles/articlesData"
import Card from "../../components/cards/Card"
import { useRef } from "react"
import SwiperPrevButton from "../../components/swiper-buttons/SwiperPrevButton"
import SwiperNextButton from "../../components/swiper-buttons/SwiperNextButton"


const BlogArticleSwiper = () => {

  const swiperRef = useRef<SwiperCore>();

  const sliderSettings = {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <>
        <Swiper
            slidesPerView={1}
            breakpoints={sliderSettings}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper
            }}
            className="w-full pb-6 sm:pb-0"
        >
            {articlesData.map((article, i) => {
                return (
                    <SwiperSlide key={i}>
                        <div className="flex justify-center">
                            <Card width="w-72" heigth="h-80" title={article.title} image={article.image} />
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
        <div className="hidden sm:flex w-full justify-center py-10">
          <div className="flex gap-4 self-center">
            <SwiperPrevButton prev prevHandler={() => swiperRef.current?.slidePrev()} />
            <SwiperNextButton next nextHandler={() => swiperRef.current?.slideNext()} />
          </div>
        </div>
    </>
  )
}

export default BlogArticleSwiper