import { Link } from "react-router";
import { SuperheroList } from "../components";
import { useGetSuperheroes } from "../hooks";
import "./styles/home.css";

export const HomePage = () => {
    const { superheroes, loading, error } = useGetSuperheroes({});

    return (
        <div className="container">
            <header>
                <h1>Superheroes App</h1>
            </header>
            {loading ? (
                <p>Loading superheroes...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : superheroes.length === 0 ? (
                <div className="empty-state">
                    <h2>No Superheroes Found</h2>
                    <p>Looks like our heroes are taking a break! Try adding some new ones.</p>
                    <Link to="/create" className="btn">
                        Create a Superhero
                    </Link>
                </div>
            ) : (
                <SuperheroList superheroes={superheroes} />
            )}
        </div>
    );
};
