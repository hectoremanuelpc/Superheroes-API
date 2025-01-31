import { SuperheroType, Superpower } from "../enum";

export type Superhero = {
    id: number;
    name: string;
    type: SuperheroType;
    superpower: Superpower;
    humilityScore?: number;
};
