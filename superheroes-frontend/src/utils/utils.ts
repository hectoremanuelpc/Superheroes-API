/**
 * Capitalizes the first letter of each word in a string
 * @param text - The string to be formatted
 * @returns The formatted string with capitalized first letters
 */
export const capitalizeWords = (text: string): string => {
    if (!text) return "";

    return text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
};
