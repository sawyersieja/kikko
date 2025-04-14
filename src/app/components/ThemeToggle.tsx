"use client"

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const ThemeToggle = () => {
    
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {

        const savedTheme = Cookies.get("theme");
        const prefersDark = !savedTheme || savedTheme === "dark";

        setIsDark(prefersDark);
        document.documentElement.classList.toggle("dark", prefersDark);
        document.documentElement.classList.toggle("light", !prefersDark);
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);
        Cookies.set("theme", newTheme, { expires: 365 });

        document.documentElement.classList.toggle("dark", newTheme === "dark");
        document.documentElement.classList.toggle("light", newTheme === "light");
    }
    
    return (
        <button onClick={toggleTheme}>
            {isDark ? "☀️" : "🌙"}
        </button>
    );
};

export default ThemeToggle;