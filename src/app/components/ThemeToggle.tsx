"use client"

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const ThemeToggle = () => {
    
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = Cookies.get("theme") ?? "light";
        setIsDark(savedTheme === "dark");
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);
        Cookies.set("theme", newTheme, { expires: 365 });
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    }
    
    return (
        <button onClick={toggleTheme}>
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
};

export default ThemeToggle;