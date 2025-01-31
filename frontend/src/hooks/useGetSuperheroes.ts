import { useState, useEffect } from "react";
import { Superhero } from "../types/superhero.type";
import { SuperheroType } from "../enum";
import { superheroesAPI } from "../api/superheroes";

type Props = {
    type?: SuperheroType;
};

export const useGetSuperheroes = ({ type }: Props) => {
    const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchSuperheroes(type);
    }, [type]);

    const fetchSuperheroes = async (type?: SuperheroType) => {
        try {
            const response = await superheroesAPI.get("", { params: { type } });
            let filteredSuperheroes: Superhero[] = response.data;

            setSuperheroes(filteredSuperheroes);
            setLoading(false);
        } catch (error) {
            setError("Error fetching superheroes");
            setLoading(false);
        }
    };

    return { superheroes, loading, error };
};
