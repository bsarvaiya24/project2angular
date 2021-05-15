export interface Pokemon {
    id: number,
    // type: { pet_type_id: number, pet_type: string },
    // status: { pet_status_id: number, pet_status: string },
    species: { name: string, url: string },
    // breed: string,
    name: string,
    order: number,
    // age: number,
    // description: string
    sprites: { front_default: string }
}