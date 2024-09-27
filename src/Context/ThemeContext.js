import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    return React.useContext(ThemeContext);
};

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(getSystemTheme());

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        // Function to update the theme and refresh the page
        const handleThemeChange = (event) => {
            const newTheme = event.matches ? "dark" : "light";
            setTheme(newTheme);
            window.location.reload(); // Refresh the page to apply the new theme
        };

        // Set the initial theme
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        // Add event listener for theme changes
        mediaQuery.addEventListener("change", handleThemeChange);

        // Clean up the event listener on component unmount
        return () => {
            mediaQuery.removeEventListener("change", handleThemeChange);
        };
    }, [theme]);

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
}

// Function to get the current system theme
function getSystemTheme() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
}
