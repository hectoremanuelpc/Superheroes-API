import { Route, Routes } from "react-router";
import { CreateSuperheroPage, HomePage, NotFoundPage } from "../pages";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="create" element={<CreateSuperheroPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};
