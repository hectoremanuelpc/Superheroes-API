import axios from "axios";

export const superheroesAPI = axios.create({
    baseURL: "http://localhost:3000/superheroes",
});
