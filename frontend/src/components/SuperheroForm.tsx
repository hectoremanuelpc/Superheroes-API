import React, { useState } from "react";
import { SuperheroType, Superpower } from "../enum";
import { useCreateSuperhero } from "../hooks";
import { capitalizeWords } from "../utils/utils";
import { Link, useNavigate } from "react-router";

export const SuperheroForm = () => {
    const navigate = useNavigate();
    const { createSuperhero, loading: creating, error: createError } = useCreateSuperhero();

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [superpower, setSuperpower] = useState("");
    const [humilityScore, setHumilityScore] = useState<number | undefined>(undefined);

    const handleAddSuperhero = async (e: React.FormEvent) => {
        e.preventDefault();
        const newSuperhero = {
            name,
            type: type as SuperheroType,
            superpower: superpower as Superpower,
            ...(type === SuperheroType.HUMBLE.toLowerCase() && { humilityScore }),
        };
        try {
            await createSuperhero(newSuperhero);
            navigate("/");
        } catch (error) {
            console.error("Error adding superhero:", error);
        }
    };

    return (
        <div className="form-container">
            <Link to="/" className="arrow-back">
                <span className="material-symbols-outlined">arrow_left_alt</span>
            </Link>
            <form onSubmit={handleAddSuperhero}>
                <h2>Add a New Superhero</h2>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <select value={type} onChange={(e) => setType(e.target.value)} required>
                    <option value="">Select Type</option>
                    {Object.values(SuperheroType).map((type) => (
                        <option key={type} value={type}>
                            {capitalizeWords(type)}
                        </option>
                    ))}
                </select>
                <select value={superpower} onChange={(e) => setSuperpower(e.target.value)} required>
                    <option value="">Select Superpower</option>
                    {Object.values(Superpower).map((type) => (
                        <option key={type} value={type}>
                            {capitalizeWords(type)}
                        </option>
                    ))}
                </select>
                {type.toLowerCase() === SuperheroType.HUMBLE.toLowerCase() && (
                    <input
                        type="number"
                        placeholder="Humility Score"
                        value={humilityScore !== undefined ? humilityScore : ""}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value === "") {
                                setHumilityScore(undefined);
                            } else {
                                const numberValue = Number(value);
                                if (numberValue >= 1 && numberValue <= 10) {
                                    setHumilityScore(numberValue);
                                }
                            }
                        }}
                        min="1"
                        max="10"
                        required
                    />
                )}
                <button
                    type="submit"
                    disabled={creating}
                    className="submit-btn"
                    style={{ cursor: creating ? "not-allowed" : "pointer" }}
                >
                    Add Superhero
                </button>
                {createError && <p className="error">{createError}</p>}
            </form>
        </div>
    );
};
