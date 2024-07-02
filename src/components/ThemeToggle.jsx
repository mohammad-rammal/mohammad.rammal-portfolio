// ThemeToggle.js
import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
    const [theme, setTheme] = React.useState(null);

    const toggleTheme = () => {
        const currentTheme = theme === "dark" ? "light" : "dark";
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", currentTheme);
        setTheme(currentTheme);
    };

    React.useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
        setTheme(savedTheme);
    }, []);

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 transition duration-500 ease-in-out bg-gray-200 rounded-full shadow-lg dark:bg-gray-800 focus:outline-none"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <SunIcon className="w-6 h-6 text-purple-200" />
            ) : (
                <MoonIcon className="w-6 h-6 text-gray-900" />
            )}
        </button>
    );
};

export default ThemeToggle;
