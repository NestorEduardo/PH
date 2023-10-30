import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Specialties } from '../../../models/specialties';
import { consultasMedicas, cosmiatria, dermatologia, masajes, medicinaEstetica } from '../../../fakedb/specialties/specialties';
import Card from '../../../components/cards/Card';

type Props = {
  currentSpecialty: Specialties
}

const OtherSpecialties:FunctionComponent<Props> = (props) => {

  const specialtiesArray = [dermatologia, cosmiatria, consultasMedicas, masajes, medicinaEstetica]

  const filteredSpecialties = specialtiesArray.filter(specialty => specialty.title !== props.currentSpecialty.title);

  return (
    <>
      <h3 className='hidden sm:block font-bold text-center mt-10 mb-4'>Otras especialidades</h3>
      <div className='flex justify-center mt-14 sm:mt-0'>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {filteredSpecialties.map((specialty, i) => (
            <Link to={`/specialties/${specialty.title.toLowerCase()}`} key={specialty.title} className="text-center">
              <Card
                key={i}
                image={specialty.image}
                title={specialty.title}
                description={specialty.description}
                width='w-64'
                imageRounded
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default OtherSpecialties;
