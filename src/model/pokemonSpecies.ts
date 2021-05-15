export interface PokemonSpecies {
    // id: number,
    egg_groups: { name: string, url: string },
    flavour_text_entries: {
        [index: number]: { flavour_text: string }
    }
    
    // species: { name: string, url: string },
    // breed: string,
    // name: string,
    // order: number,
    // age: number,
    // description: string
    // sprites: { front_default: string }
}