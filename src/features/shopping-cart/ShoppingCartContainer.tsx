import { XMarkIcon } from "@heroicons/react/20/solid";
import Counter from "../../components/counter/Counter";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../../models/product";
import { fetchProductById } from "../../services/product-service";
import EmptyCartState from "../store/empty-state/EmptyCartState";
import Breadcrumb from "../../components/breadcrumbs/Breadcrumb";

const ShoppingCartContainer = () => {

    const { category, id } = useParams();

    const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(undefined)

    useEffect(() => {
        fetchProductById(id, category, setSelectedProduct)
    }, [category, id])

  return (
    <div className="w-full">
      <div className="flex flex-col px-4 container m-auto w-full">
        {selectedProduct ?
         (
          <>
          <div className="hidden md:block my-2">
            <Breadcrumb />
          </div>
          <div className="font-semibold text-xl">Carrito</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <div className="overflow-auto h-52 space-y-3">
              <div className="flex flex-col md:flex-row justify-between md:items-center border border-slate-300 py-4 px-2 rounded-md w-full">
                <div className="flex gap-6 items-center">
                  <img
                    className="w-36"
                    src={selectedProduct?.image}
                    alt="product-image"
                  />
                  <div className="flex flex-col gap-2 text-xs sm:text-base">
                    <p>{selectedProduct?.title}</p>
                    <p className="text-teal-600 font-semibold">{`RD$ ${selectedProduct?.price}`}</p>
                  </div>
                </div>
                <div className="flex gap-8 mt-6 md:mt-0">
                  <Counter customHeight="h-12" />
                  <XMarkIcon className="w-10 h-10 fill-red-500" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex border border-slate-300 py-4 px-4 rounded-md w-full">
                <div className="flex gap-4 flex-col w-full">
                  <div className="text-lg md:text-2xl">Total del carrito</div>
                  <div className="grid grid-cols-2 text-sm md:text-base">
                    <div className="font-medium space-y-2">
                      <div>Subtotal</div>
                      <div>Envio</div>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>{`RD$ ${selectedProduct?.price}`}</div>
                      <div>Distrito Nacional: <span className="font-medium">RD$200</span></div>
                      <span>Las opciones de envio se actualizaran durante el pago.</span>
                    </div>
                  </div>
                  <div className="flex justify-between font-medium mt-8">
                    <div>Total del pedido:</div>
                    <div>RD$ 1350</div>
                  </div>
                </div>
              </div>
              <Link
                to={`/store/${category}/product-preview/${selectedProduct.id}/shopping-cart/checkout`}
                className=""
              >
                <div className="w-full text-center p-4 bg-teal-600 text-white font-semibold rounded-lg cursor-pointer">
                  Proceder al pago
                </div>
              </Link>
            </div>
          </div>
          </>
         )
         :
         <EmptyCartState />
        }
      </div>
    </div>
  );
};

export default ShoppingCartContainer;
