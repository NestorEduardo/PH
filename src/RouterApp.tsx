import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import AboutPage from "./pages/about/AboutPage"
import BlogPage from "./pages/blog/BlogPage"
import { PublicRoutes } from "./routes/routes"
import BlogArticlePage from "./pages/blog-article/BlogArticlePage"
import ContactPage from "./pages/contact/ContactPage"
import SpecialtiePage from "./pages/specialties/SpecialtiePage"
import StorePage from "./pages/store/StorePage"
import StoreProductListPage from "./pages/store-product-list/StoreProductListPage"
import ProductPreview from "./pages/product-preview/ProductPreview"
import ShoppingCartPage from "./pages/shopping-cart/ShoppingCartPage"
import CheckOutPage from "./pages/checkout/CheckOutPage"
import NotFoundPage from "./pages/404/404"
import ScrollToTop from "./components/scroll-to-top/ScrollToTop"

const RouterApp = () => {
  return (
    <>
      <ScrollToTop>
        <Routes>
            <Route path={"*"} element={<NotFoundPage />} />
            <Route path={PublicRoutes.HOME} element={<HomePage />} />
            <Route path={PublicRoutes.ABOUT} element={<AboutPage />} />
            <Route path={PublicRoutes.SPECIALTIES} element={<SpecialtiePage />} />
            <Route path={PublicRoutes.BLOG} element={<BlogPage />} />
            <Route path={PublicRoutes.READ_BLOG_ARTICLE} element={<BlogArticlePage />} />

            <Route path={PublicRoutes.STORE} element={<StorePage />} />
            <Route path={PublicRoutes.STORE_PRODUCT} element={<StoreProductListPage />} />
            <Route path={PublicRoutes.CONTACT} element={<ContactPage />} />
            <Route path={PublicRoutes.PRODUCT_PREVIEW} element={<ProductPreview />} />
            <Route path={PublicRoutes.SHOPPING_CART} element={<ShoppingCartPage />} />
            <Route path={PublicRoutes.CHECKOUT} element={<CheckOutPage />} />
        </Routes>
      </ScrollToTop>
    </>
  )
}

export default RouterApp