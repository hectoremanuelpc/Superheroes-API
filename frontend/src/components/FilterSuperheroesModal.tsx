import React, { useState } from "react";
import { SuperheroType } from "../enum";
import { useGetSuperheroes } from "../hooks/useGetSuperheroes";
import "./styles/filter-superheroes-modal.css";
import { Superhero } from "../types/superhero.type";

type Props = {
    isOpen: boolean;
    onClose: (filteredSuperheroes: Superhero[], selectedType: SuperheroType | undefined) => void;
};

export const FilterSuperheroesModal: React.FC<Props> = ({ isOpen, onClose }) => {
    const [selectedType, setSelectedType] = useState<SuperheroType | undefined>(undefined);
    const { superheroes, loading, error } = useGetSuperheroes({ type: selectedType });

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as SuperheroType;
        setSelectedType(value);
    };

    const handleApplyFilter = () => {
        onClose(superheroes, selectedType);
        setSelectedType(undefined);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={() => onClose([], undefined)}>
                    &times;
                </button>
                <h2>Filter Superheroes</h2>
                <select value={selectedType} onChange={handleTypeChange}>
                    <option value="">All Types</option>
                    <option value={SuperheroType.HUMBLE}>Humble</option>
                    {/* Add more superhero types here */}
                </select>
                <button className="btn btn-primary" onClick={handleApplyFilter} disabled={loading}>
                    {loading ? "Loading..." : "Apply Filter"}
                </button>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
};
