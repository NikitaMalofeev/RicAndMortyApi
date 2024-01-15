export type Character = {
    id: number;
    name: string;
    status: string;
    gender: string;
    type: string;
    species: string;
    image: string;
    location?: { name: string };
};
