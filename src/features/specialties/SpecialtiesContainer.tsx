import { useParams } from "react-router-dom";
import { Specialties } from "../../models/specialties";
import SpecialtieBanner from "./components/SpecialtieBanner"
import SpecialtieServicesList from "./components/SpecialtieServicesList"
import { useEffect, useState } from "react";
import { consultasMedicas, cosmiatria, dermatologia, masajes, medicinaEstetica } from "../../fakedb/specialties/specialties";
import OtherSpecialties from "./components/OtherSpecialties";

const SpecialtiesContainer = () => {

  const { option } = useParams();

    const [specialtie, setSpecialtie] = useState<Specialties | null>(null)

    useEffect(() => {
        switch (option) {
            case 'dermatologia':
                setSpecialtie(dermatologia);
                break;
            case 'cosmiatria':
                setSpecialtie(cosmiatria);
                break;
            case 'consultas-medicas':
                setSpecialtie(consultasMedicas);
                break;
            case 'masajes':
                setSpecialtie(masajes);
                break;
            case 'medicina-estetica':
                setSpecialtie(medicinaEstetica);
                break;
        }
    }, [option])

  return (
    <div className="">
        <SpecialtieBanner specialtie={specialtie} />
        <SpecialtieServicesList services={specialtie?.services} />
        {specialtie &&
            <OtherSpecialties
                currentSpecialty={specialtie}
            />}
    </div>
  )
}

export default SpecialtiesContainer