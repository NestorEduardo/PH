import { giftCardData } from "../fakedb/gift-cards/giftCardData";
import { OnlineConsultingData } from "../fakedb/online-consulting/onlineConsultingData";
import { OnSiteConsultingData } from "../fakedb/onsite-consulting/onSiteConsultingData";
import { ProductsData } from "../fakedb/products/products";
import { Product } from "../models/product";
import { StoreRoutes } from "../routes/routes";

export const fetchProductById = (
    id: string | undefined,
    category: string | undefined,
    setSelectedProduct: React.Dispatch<React.SetStateAction<Product | undefined>>
) => {
    switch (category) {
        case StoreRoutes.CONSULTAS_ONLINE:
            setSelectedProduct(OnlineConsultingData.find(product => product.id === id))
            break;
        case StoreRoutes.CONSULTAS_PRESENCIALES:
            setSelectedProduct(OnSiteConsultingData.find(product => product.id === id))
            break;
        case StoreRoutes.PRODUCTS:
            setSelectedProduct(ProductsData.find(product => product.id === id))
            break;
        case StoreRoutes.GIFT_CARDS:
            setSelectedProduct(giftCardData.find(product => product.id === id))
            break
    }
}

export const fetchProducts = (
    category: string | undefined,
    setArray: React.Dispatch<React.SetStateAction<Product[] | null>>,
    setPageTitle?: React.Dispatch<React.SetStateAction<string | undefined> | undefined>
) => {
    switch (category) {
        case StoreRoutes.CONSULTAS_ONLINE:
            setArray(OnlineConsultingData);
            (setPageTitle && (
                setPageTitle("Consultas Online")
            ))
            break;
        case StoreRoutes.CONSULTAS_PRESENCIALES:
            setArray(OnSiteConsultingData);
            (setPageTitle && (
                setPageTitle("Consultas y Procedimientos Presenciales")
            ))
            break;
        case StoreRoutes.PRODUCTS:
            setArray(ProductsData);
            (setPageTitle && (
                setPageTitle("Productos")
            ))
            break;
        case StoreRoutes.GIFT_CARDS:
            setArray(giftCardData);
            (setPageTitle && (
                setPageTitle("E-Gift Cards")
            ))
            break;
        default:
            setArray(null);
            (setPageTitle && (
                setPageTitle("")
            ))
            break;
    }
}