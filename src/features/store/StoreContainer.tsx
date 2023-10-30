import { Link } from "react-router-dom"
import Banner from "../../components/banner/Banner"
import Card from "../../components/cards/Card"
import { StoreRoutes } from "../../routes/routes"
import SearchBar from "../../components/search-bar/SearchBar"

const StoreContainer = () => {
  return (
    <>
        <Banner
            title="Tienda"
            description="Cuidado facial y corporal: encuentra lo que necesitas aqui"
            image="/images/store/store-banner.png"
            upperCaseTitle
            upperCaseDescription
            fontBoldDescription
        />
        <div className="w-full flex justify-center py-8 px-2 md:px-0 border-b-2 border-slate-300">
            <div className="flex flex-col gap-3">
                <div className="text-xl font-extrabold">Encuentra el producto que buscas</div>
                <SearchBar />
            </div>
        </div>
        <div className="flex justify-center w-full py-8">
            <div className="grid grid-cols-2 gap-x-4">
                <Link to={`${StoreRoutes.CONSULTAS_PRESENCIALES}`}>
                    <Card
                        image="/images/store/consultas-procedimientos.png"
                        title="Consultas y Procedimientos Presenciales"
                        width="w-36 sm:w-44 md:w-96"
                        fontSize
                    />
                </Link>
                <Link to={`${StoreRoutes.CONSULTAS_ONLINE}`}>
                    <Card
                        image="/images/store/consultas-online.png"
                        title="Consultas Online"
                        width="w-36 sm:w-44 md:w-96"
                        fontSize
                    />
                </Link>
                <Link to={`${StoreRoutes.PRODUCTS}`}>
                    <Card
                        image="/images/store/products.png"
                        title="Productos"
                        width="w-36 sm:w-44 md:w-96"
                        fontSize
                    />
                </Link>
                <Link to={`${StoreRoutes.GIFT_CARDS}`}>
                    <Card
                        image="/images/store/gift-cards.png"
                        title="E-Gift Cards"
                        width="w-36 sm:w-44 md:w-96"
                        fontSize
                    />
                </Link>
            </div>
        </div>
    </>
  )
}

export default StoreContainer