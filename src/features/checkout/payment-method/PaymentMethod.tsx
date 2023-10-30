import Counter from "../../../components/counter/Counter"
import FormLabel from "../../../components/form/form-label/FormLabel"
import CustomInput from "../../../components/form/input/CustomInput"

const PaymentMethod = () => {
  return (
    <div className="flex flex-col gap-2">
        <p className="text-xs">Por favor ingresa las informaciones de la tarjeta sin guíones y sin espacios:</p>
        <div className="text-xs">Tarjetas aceptadas:</div>

        <div className="flex gap-x-6 items-center">
            <div className="flex flex-col">
                <FormLabel title="Numero de tarjeta" />
                <CustomInput type="text" placeholder="0000-0000-0000-0000" />
            </div>
            <div className="flex flex-col">
                <FormLabel title="Fecha de vencimiento" />
                <div className="flex gap-4">
                    <Counter bgColor="bg-white" customHeight="h-10" />
                    <Counter bgColor="bg-white" customHeight="h-10" />
                </div>
            </div>
            <div className="flex flex-col">
                <FormLabel title="CVV" />
                <div className="w-24">
                    <CustomInput type="text" placeholder="123" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentMethod