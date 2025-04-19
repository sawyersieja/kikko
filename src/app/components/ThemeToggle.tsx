"use client"

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const ThemeToggle = () => {
    
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {

        const savedTheme = Cookies.get("theme");
        const prefersDark = !savedTheme || savedTheme === "dark";

        setIsDark(prefersDark);
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(prefersDark ? "dark" : "light");
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);
        Cookies.set("theme", newTheme, { expires: 365 });

        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(newTheme);
    }
    
    return (
        <button onClick={toggleTheme}>
            {isDark ? "☀️" : "🌙"}
        </button>
    );
};

export default ThemeToggle;