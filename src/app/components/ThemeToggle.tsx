"use client"

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const ThemeToggle = () => {
    
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {

        const root = document.documentElement;
        const savedTheme = Cookies.get("theme");
        const prefersDark = savedTheme ? savedTheme === "dark" : root.classList.contains("dark");

        setIsDark(prefersDark);
        root.classList.remove("dark", "light");
        root.classList.add(prefersDark ? "dark" : "light");
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);
        Cookies.set("theme", newTheme, { expires: 365 });

        const root = document.documentElement;
        root.classList.remove("dark", "light");
        root.classList.add(newTheme);
    }
    
    return (
        <button onClick={toggleTheme}>
            {isDark ? "☀️" : "🌙"}
        </button>
    );
};

export default ThemeToggle;