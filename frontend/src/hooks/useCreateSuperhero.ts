import { useState } from "react";
import { Superhero } from "../types/superhero.type";
import { superheroesAPI } from "../api/superheroes";

export const useCreateSuperhero = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const createSuperhero = async (superhero: Omit<Superhero, "id">) => {
        setLoading(true);
        setError(null);
        try {
            const response = await superheroesAPI.post("", superhero);
            setLoading(false);
            return response.data as Superhero;
        } catch (error) {
            setError("Error adding superhero");
            setLoading(false);
            throw error;
        }
    };

    return { createSuperhero, loading, error };
};
