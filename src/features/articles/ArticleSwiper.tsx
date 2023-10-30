import { articlesData } from '../../fakedb/articles/articlesData';
import { FunctionComponent, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Card from '../../components/cards/Card';
import NavigationButton from '../../components/navigation-button/NavigationButton';
import { PublicRoutes } from '../../routes/routes';

type Props = {
    limit?: number
}

const ArticleSwiper:FunctionComponent<Props> = (props) => {

    const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 720) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(1);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    const articlesToShow = props.limit ? articlesData.slice(0, props.limit) : articlesData
  return (
    <>
      <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          className="w-full"
      >
        {articlesToShow.map((article, i) => {
          return (
            <SwiperSlide key={i} className='text-xs sm:text-sm'>
              <div className='flex justify-center'>
                <Card
                  id={article.id}
                  image={article.image}
                  title={article.title}
                  description={article.introduction}
                  hasRoutePath={true}
                  width='w-72'
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      {props.limit && (
            <div className="mb-8 text-center">
            <NavigationButton routePath={PublicRoutes.BLOG} buttonText="Ver otros articulos" />
            </div>
        )}
    </>
  );
}

export default ArticleSwiper