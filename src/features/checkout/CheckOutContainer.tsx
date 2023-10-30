import { Disclosure } from "@headlessui/react"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import CheckOutForm from "./checkout-form/CheckOutForm"
import PaymentMethod from "./payment-method/PaymentMethod"

const CheckOutContainer = () => {
  return (
    <>
        <div className="flex flex-col container m-auto gap-y-4">
            <div className="self-start font-semibold text-lg">Checkout</div>

            <Disclosure as="div" className="bg-slate-200 rounded-lg border border-slate-300">
            {({ open }) => (
                <>
                <Disclosure.Button className="flex w-full gap-4 rounded-lg border bg-white p-4 text-left text-sm font-medium">
                    <ChevronRightIcon
                    className={`${
                        open ? 'rotate-90 transform' : ''
                    } h-5 w-5`}
                    />
                    <span className="font-semibold">Direccion de Envio</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 py-4 text-sm">
                    <CheckOutForm />
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>

            <Disclosure as="div" className="bg-slate-200 rounded-lg border border-slate-300">
            {({ open }) => (
                <>
                <Disclosure.Button className="flex w-full gap-4 rounded-lg border bg-white p-4 text-left text-sm font-medium">
                    <ChevronRightIcon
                    className={`${
                        open ? 'rotate-90 transform' : ''
                    } h-5 w-5`}
                    />
                    <span className="font-semibold">Direccion de Envio</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                    <PaymentMethod />
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>

            <div className="flex justify-between mb-16 mt-4">
                <div className="flex flex-col gap-3">
                    <div className="self-start font-semibold text-lg">Productos</div>
                    <div className="">
                        <span className="font-semibold">x1</span>
                        <span> A Oxitive Serum</span>
                    </div>
                </div>
                <div className="w-72 grid grid-cols-1 space-y-4">
                    <div className="flex flex-col w-full border border-slate-300 rounded-lg">
                        <div className="flex justify-between border-b border-slate-300 w-full py-2">
                            <div className="w-full pl-2 font-semibold">Subtotal</div>
                            <div className="w-full">RD$ 1,150</div>
                        </div>
                        <div className="flex justify-between border-b border-slate-300 w-full py-2">
                            <div className="w-full pl-2 font-semibold">Envio</div>
                            <div className="w-full">Azua <span className="font-semibold">RD$530</span></div>
                        </div>
                        <div className="flex justify-between border-b border-slate-300 w-full py-2">
                            <div className="w-full pl-2 font-semibold">Total:</div>
                            <div className="w-full font-semibold">RD$ 1,150</div>
                        </div>
                    </div>
                    <div className="w-full text-center p-2 bg-slate-500 text-white font-semibold rounded-lg cursor-pointer">
                        Realizar pedido
                    </div>
                </div>
            </div>


        </div>
    </>
  )
}

export default CheckOutContainer