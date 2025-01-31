import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { BrowserRouter } from "react-router";
import { SuperheroesApp } from "./SuperheroesApp";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <SuperheroesApp />
        </BrowserRouter>
    </StrictMode>
);
