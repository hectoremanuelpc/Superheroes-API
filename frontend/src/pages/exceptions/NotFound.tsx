import React from "react";
import { Link } from "react-router";

type Props = {};

export const NotFoundPage: React.FC<Props> = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" style={styles.link}>
                Go back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: "20px",
    },
    title: {
        fontSize: "8rem",
        fontWeight: "bold",
        color: "#1a1a1a",
        marginBottom: "20px",
    },
    message: {
        fontSize: "1.5rem",
        color: "#666",
        marginBottom: "30px",
    },
    link: {
        textDecoration: "none",
        color: "#0066cc",
        fontSize: "1.2rem",
        transition: "text-decoration 0.3s ease",
    },
    linkHover: {
        textDecoration: "underline",
    },
} as const;
