export interface VirtualPet {
    id: number,
    type: { pet_type_id: number, pet_type: string },
    status: { pet_status_id: number, pet_status: string },
    species: string,
    name: string,
    age: number,
    breed: string,
    description: string,
    sprite: string
    
}