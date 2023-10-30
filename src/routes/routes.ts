export const PublicRoutes = {
    HOME: '/',
    ABOUT: '/about',
    SPECIALTIES: '/specialties/:option',
    BLOG: '/blog',
    READ_BLOG_ARTICLE: '/blog/article/:id',
    STORE: '/store',
    STORE_PRODUCT: '/store/:category',
    CONTACT: '/contact',
    PRODUCT_PREVIEW: '/store/:category/product-preview/:id',
    SHOPPING_CART: '/store/:category/product-preview/:id/shopping-cart/',
    CHECKOUT: '/store/:category/product-preview/:id/shopping-cart/checkout'
}

export const StoreRoutes = {
    PRODUCTS: 'productos',
    CONSULTAS_ONLINE: 'consultas-online',
    CONSULTAS_PRESENCIALES: 'consultas-presenciales',
    GIFT_CARDS: 'gift-cards',
}