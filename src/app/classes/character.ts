export interface CustomCharacter {
    id: number;
    name: string;
    status: StatusEnum;
    species: SpeciesEnum;
    type?: string;
    gender: GenderEnum;
    origin?: {name: string, url: string};
    location: {name: string, url: string};
    image?: string;
    episode: string[];
    url?: string;
    created: Date;
}

export enum StatusEnum {
    Alive = 'Alive',
    Dead = 'Dead',
    Unknown = 'unknown'
}

export enum SpeciesEnum {
    Alien = 'Alien',
    Human = 'Human'
}

export enum GenderEnum {
    Female = 'Female',
    Male = 'Male',
    Unknown = 'unknown'
}