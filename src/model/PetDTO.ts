export interface PetDTO {
    pet_name: string,
    pet_age: number,
    pet_species: string,
    pet_breed: string,
    pet_description: string,
    pet_type: string,
    pet_image: string | ArrayBuffer | null
}

export interface Pet {
    pet_id: number,
    pet_name: string,
    pet_age: number,
    pet_species: string,
    pet_breed: string,
    pet_description: string,
    pet_list_date: number,
    pet_status: { pet_status_id: number, pet_status: string },
    pet_type: { pet_type_id: number, pet_type: string },
    pet_image: File | null
}