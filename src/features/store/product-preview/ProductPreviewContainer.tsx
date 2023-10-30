import { useParams } from "react-router-dom"
import Counter from "../../../components/counter/Counter";
import { StoreRoutes } from "../../../routes/routes";
import { Product } from "../../../models/product";
import { useEffect, useState } from "react";
import Agreement from "../agreement/Agreement";
import Notification from "../../../components/notification/Notification";
import { fetchProductById } from "../../../services/product-service";
import RelatedProducts from "./related-products/RelatedProducts";
import CustomDatePicker from "../../../components/form/date-picker/CustomDatePicker";
import Breadcrumb from "../../../components/breadcrumbs/Breadcrumb";

const ProductPreviewContainer = () => {
    const { category, id } = useParams();

    const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(undefined)
    const [disableCartButton, setCartButton] = useState(category === StoreRoutes.CONSULTAS_ONLINE ? false : true)

    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        fetchProductById(id, category, setSelectedProduct)
    }, [category, id])

    const handleAgreement = () => {
        setCartButton(!disableCartButton)
    }

    const handleNotification = () => {
        setVisible(!isVisible)
    }

  return (
    <div className="w-full">
        <div className="flex flex-col items-center px-4 container m-auto w-full">
            <div className="hidden md:block self-start my-4">
                <Breadcrumb />
            </div>
            <div className={`w-full ${isVisible ? 'opacity-100 py-6' : 'opacity-0 py-0 h-0'} transition-opacity duration-200 delay-200 ease-in-out`}>
                <Notification
                    isVisible={isVisible}
                    item={selectedProduct}
                    routePath={`/store/${category}/product-preview/${selectedProduct?.id}/shopping-cart`}
                />
            </div>
            <div className="flex flex-col sm:flex-row w-full gap-8 mb-6">
                <div className="flex justify-center w-full bg-slate-300">
                    <img className="w-64" src={selectedProduct?.image} alt='product-image' />
                </div>
                <div className="flex flex-col w-full gap-4 sm:gap-14 justify-between py-1 px-8 sm:px-0">
                    <div className="flex flex-col gap-1">
                        <div className="capitalize font-bold text-lg">{selectedProduct?.title}</div>
                        <div className="text-teal-600 font-semibold text-lg">{`RD$ ${selectedProduct?.price}`}</div>
                    </div>
                    {(category === StoreRoutes.CONSULTAS_ONLINE || category === StoreRoutes.CONSULTAS_PRESENCIALES) && (
                        <div className="flex gap-3 items-center">
                            <label>Fecha: </label>
                            <CustomDatePicker />
                        </div>
                    )}
                    <div className={`flex ${category === StoreRoutes.PRODUCTS && 'flex-col'} gap-4`}>
                        <div className="flex gap-4 items-center">
                            {category !== StoreRoutes.CONSULTAS_ONLINE && (
                                <Counter customHeight="h-12" />
                            )}
                            {category === StoreRoutes.PRODUCTS && (
                                <span className="text-red-500">{`${selectedProduct?.quantity} disponible`}</span>
                            )}
                        </div>
                        <button
                            className={`w-64 md:w-72 py-3 ${disableCartButton ? 'bg-teal-600 cursor-pointer' : 'bg-slate-600 cursor-default'} rounded-md text-white font-bold text-xs md:text-base`}
                            disabled={false}
                            onClick={handleNotification}
                        >
                            Anadir al carrito
                        </button>
                    </div>
                </div>
            </div>
            <div className="self-start w-full">
                {category === StoreRoutes.PRODUCTS && (
                    <div className="flex flex-col gap-4 mb-6">
                        <div className="font-semibold text-lg">Descripcion</div>
                        <div className="text-xs sm:text-sm md:text-base">{selectedProduct?.description}</div>
                    </div>
                )}
                {category === StoreRoutes.CONSULTAS_ONLINE && (
                    <Agreement doctor={selectedProduct?.doctor} handleAgreement={handleAgreement} />
                )}
                <div className="flex flex-col gap-4 my-6">
                    <div className="font-semibold text-lg">Productos relacionados</div>
                    <RelatedProducts currentProduct={selectedProduct} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductPreviewContainer