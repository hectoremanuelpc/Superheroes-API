import { SuperheroForm } from "../components";
import "./styles/createSuperhero.css";

export const CreateSuperheroPage = () => {
    return (
        <div className="container">
            <header>
                <h1>Superheroes Creator</h1>
            </header>
            <SuperheroForm />
        </div>
    );
};
