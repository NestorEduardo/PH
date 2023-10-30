export interface Specialties {
    title: string,
    description: string,
    image: string,
    services: SpecialtieServices[]
}

export interface SpecialtieServices {
    id: string,
    title: string
}