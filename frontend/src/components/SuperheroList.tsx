import React, { useState } from "react";
import { Superhero } from "../types/superhero.type";
import { SuperheroType } from "../enum";
import { Link } from "react-router";
import { FilterSuperheroesModal } from "./FilterSuperheroesModal";
import { capitalizeWords } from "../utils/utils";

type Props = {
    superheroes: Superhero[];
};

export const SuperheroList: React.FC<Props> = ({ superheroes: initialSuperheroes }) => {
    const [superheroes, setSuperheroes] = useState<Superhero[]>(initialSuperheroes);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [appliedFilters, setAppliedFilters] = useState<SuperheroType[]>([]);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = (filteredSuperheroes: Superhero[], selectedType: SuperheroType | undefined) => {
        setIsModalOpen(false);
        if (filteredSuperheroes.length > 0) {
            setSuperheroes(filteredSuperheroes);
            if (selectedType && !appliedFilters.includes(selectedType)) {
                setAppliedFilters([...appliedFilters, selectedType]);
            }
        }
    };

    const handleRemoveFilter = (filter: SuperheroType) => {
        setAppliedFilters(appliedFilters.filter((f) => f !== filter));
        setSuperheroes(initialSuperheroes);
    };

    return (
        <div className="superhero-list-container">
            <div className="superhero-list-header">
                <h2 className="my-3">Superheroes List</h2>
                <Link to="/create" className="btn btn-primary">
                    Add a Superhero
                </Link>
            </div>
            <hr />
            <div className="filter-container">
                <button onClick={handleOpenModal} className="btn btn-primary">
                    Filter Superheroes
                </button>
                <div className="filter-chips">
                    {appliedFilters.map((filter) => (
                        <div key={filter} className="chip">
                            Type: {capitalizeWords(filter)}
                            <button className="chip-close" onClick={() => handleRemoveFilter(filter)}>
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <ul className="superhero-list">
                {superheroes.map((superhero) => (
                    <li key={superhero.id} className="superhero-item">
                        <h3>{superhero.name}</h3>
                        <p>Type: {capitalizeWords(superhero.type)}</p>
                        <p>Superpower: {superhero.superpower}</p>
                        {superhero.type === SuperheroType.HUMBLE && <p>Humility Score: {superhero.humilityScore}</p>}
                    </li>
                ))}
            </ul>
            <FilterSuperheroesModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};
