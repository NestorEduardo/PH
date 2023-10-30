import FormLabel from "../../../components/form/form-label/FormLabel"
import CustomInput from "../../../components/form/input/CustomInput"
import CustomSelect from "../../../components/form/select/CustomSelect"
import { countriesData } from "../../../fakedb/locations/countries"
import { provincesData } from "../../../fakedb/locations/provinces"

const CheckOutForm = () => {
  return (
    <div className="w-full flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <FormLabel title="Nombre" mustBeFilled={true} />
                <CustomInput type="text" name="nombre" />
            </div>
            <div className="space-y-2">
                <FormLabel title="Apellido" mustBeFilled={true} />
                <CustomInput type="text" name="apellido" />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <FormLabel title="Nombre de la empresa (opcional)" mustBeFilled={false} />
                <CustomInput type="text" name="empresa" />
            </div>
            <div className="space-y-2">
                <FormLabel title="Pais / Region" mustBeFilled={true} />
                <CustomSelect name={"pais"} items={countriesData} required />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <FormLabel title="Direccion de la calle" mustBeFilled={true} />
                <CustomInput type="text" name="direccion" placeholder="Numero de la casa y nombre de la calle" />
            </div>
            <div className="space-y-2">
                <FormLabel title="Direccion 2" mustBeFilled={false} />
                <CustomInput type="text" name="direccion-2" placeholder="Departamento, piso, unidad, edificio (opcional)" />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <FormLabel title="Region / Provincia" mustBeFilled={true} />
                <CustomSelect name={"provincia"} items={provincesData} required />
            </div>
            <div className="space-y-2">
                <FormLabel title="Codigo postal" mustBeFilled={true} />
                <CustomInput type="text" name="codigo-postal" />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <FormLabel title="Telefono" mustBeFilled={true} />
                <CustomInput type="text" name="telefono" />
            </div>
            <div className="space-y-2">
                <FormLabel title="Direccion de correo electronico" mustBeFilled={true} />
                <CustomInput type="email" name="email" />
            </div>
        </div>
    </div>
  )
}

export default CheckOutForm