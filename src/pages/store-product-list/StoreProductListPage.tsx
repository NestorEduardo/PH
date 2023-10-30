import { useParams } from "react-router-dom"
import ProductList from "../../features/store/product-list/ProductList";


const StoreProductListPage = () => {

    const { category } = useParams();

    return (
      <ProductList category={category} />
    )
}

export default StoreProductListPage