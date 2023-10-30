import { useEffect, useState } from "react";
import Card from "../../../components/cards/Card";
import { Product } from "../../../models/product";
import { StoreRoutes } from "../../../routes/routes";
import { Link } from "react-router-dom";
import SideBar from "../../../components/sidebar/SideBar";
import { productBrandData } from "../../../fakedb/product-brands/productBrandData";
import { ProductBrand } from "../../../models/product-brands";
import { fetchProducts } from "../../../services/product-service";
import Pagination from "../../../components/pagination/Pagination";
import Breadcrumb from "../../../components/breadcrumbs/Breadcrumb";
import MobileSideBar from "../../../components/sidebar/MobileSideBar";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

type Props = {
    category: string | undefined;
}

const ProductList: React.FC<Props> = (props) => {
    const [productArray, setArray] = useState<Product[] | null>(null);
    const [pageTitle, setPageTitle] = useState<string | undefined>("");
    const [activeItem, setActiveItem] = useState<ProductBrand | null>(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        fetchProducts(props.category, setArray, setPageTitle)
    }, [props.category]);

    const filterItems = (item: ProductBrand | null) => {
        setActiveItem(item);
    };

    const filteredItems = productArray?.filter(product => !activeItem || 
        (activeItem.title === "Consultas" && product.service === "Consultas") ||
        (activeItem.title === "Procedimientos" && product.service === "Procedimientos") ||
        (product.brand === activeItem.title)
    );

    const [currentPage, setCurrentPage] = useState(1);
	
    let currentPosts = []
    let accumulatdPosts = 0
    const postsPerPage = 5
    const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
    if( productArray) {
        currentPosts = productArray.slice(firstPostIndex, lastPostIndex)
        accumulatdPosts = firstPostIndex + currentPosts.length;
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="w-full flex justify-center">
            <div className="mx-6 mt-2 w-full">
                <div className="hidden md:block">
                    <Breadcrumb />
                </div>
                <div className="hidden sm:block text-xl font-semibold mb-8 mt-2">{pageTitle}</div>
                <div className="flex gap-2 sm:hidden">
                    <div className="flex items-center font-semibold cursor-pointer" onClick={toggleMenu}>
                        <p className="text-sm">Categorias</p>
                        <span>
                            {isMenuOpen ?
                                <ChevronDownIcon className="w-4 h-4" />
                                :
                                <ChevronRightIcon className="w-4 h-4" />
                            }
                        </span>
                    </div>
                    <div className="text-xl font-semibold">Productos</div>
                </div>
                <div className="flex w-full gap-4 relative">
                    {(props.category === StoreRoutes.PRODUCTS || props.category === StoreRoutes.CONSULTAS_PRESENCIALES) && (
                        <>
                            <div className="hidden sm:block">
                                <SideBar
                                    items={props.category === StoreRoutes.PRODUCTS ? productBrandData : [{ title: "Consultas" }, { title: "Procedimientos" }]} 
                                    onItemSelect={filterItems}
                                    activeItem={activeItem}
                                />
                            </div>
                            {isMenuOpen && (
                                <div className="block sm:hidden absolute z-20 w-full">
                                    <MobileSideBar
                                        items={props.category === StoreRoutes.PRODUCTS ? productBrandData : [{ title: "Consultas" }, { title: "Procedimientos" }]} 
                                        onItemSelect={filterItems}
                                        activeItem={activeItem}
                                        onCloseMenu={() => setIsMenuOpen(false)}
                                    />
                                </div>
                            )}
                        </>
                    )}
                    <div className="flex flex-col">
                        <div className="hidden sm:block self-end">
                            <p className="text-sm text-gray-700">
                                <span className="font-medium">{firstPostIndex + 1}</span> - <span className="font-medium">{accumulatdPosts}</span> of {' '}
                                <span className="font-medium">{productArray?.length}</span> results
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 text-xs">
                            {filteredItems && filteredItems.length > 0 ? (
                                filteredItems.map((product, i) => (
                                    <Link key={i} to={`/store/${props.category}/product-preview/${product.id}`}>
                                        <Card
                                            key={i}
                                            width="w-64 sm:w-36"
                                            image={product.image}
                                            title={`${product.title}`}
                                            description={product.price}
                                            hasPrice={true}
                                            imageRounded
                                            horizontal
                                            biggerFont
                                        />
                                    </Link>
                                ))
                            ) : (
                                <div className="text-red-500">No hay productos de esta marca/disponible</div>
                            )}
                        </div>
                        <div className="self-end">
                            <Pagination
                                    totalPosts={productArray ? productArray.length : 0}
                                    postsPerPage={postsPerPage}
                                    setCurrentPage={setCurrentPage}
                                    currentPage={currentPage}
                                    firstPostIndex={firstPostIndex + 1}
                                    currentPosts={currentPosts.length}
                                    accumulatdPosts={accumulatdPosts}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList;
