import { FunctionComponent, useEffect, useState } from "react";
import { Product } from "../../../../models/product";
import { fetchProducts } from "../../../../services/product-service";
import { Link, useParams } from "react-router-dom";
import Card from "../../../../components/cards/Card";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
    currentProduct: Product | undefined
}

const RelatedProducts:FunctionComponent<Props> = (props) => {

    const { category } = useParams()

    const [productArray, setArray] = useState<Product[] | null>(null);
    const [slidesPerView, setSlidesPerView] = useState(3);

    const filteredProducts = productArray?.filter(product => product.id !== props.currentProduct?.id)

    useEffect(() => {
        fetchProducts(category, setArray)
    }, [category])

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
  return (
    <>
        <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={0}
            pagination={{
                clickable: true,
            }}
            className="w-full"
        >
            {filteredProducts?.map((product, i) => (
                <SwiperSlide>
                    <Link key={i} to={`/store/${category}/product-preview/${product.id}`}>
                        <Card
                            key={i}
                            width="w-44"
                            image={product.image}
                            title={`${product.title}`}
                            description={product.price}
                            hasPrice={true}
                        />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
  )
}

export default RelatedProducts