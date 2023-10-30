import { lorem } from "../../constants/lorem";
import { Product } from "../../models/product";

export const ProductsData: Product[] = [
    {
        id: "1",
        title: "A Oxitive Serum",
        description: lorem,
        price: "1150",
        image: "/images/store/products/avene.png",
        brand: "Avene",
        quantity: "4"
    },
    {
        id: "2",
        title: "Locion Hidrante",
        description: lorem,
        price: "1150",
        image: "/images/store/products/eucerin.png",
        brand: "Eucerin",
        quantity: "2"
    },
    {
        id: "3",
        title: "Depiwhite",
        description: lorem,
        price: "1150",
        image: "/images/store/products/acm.png",
        brand: "ACM",
        quantity: "18"
    },
]