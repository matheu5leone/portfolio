import style from "@/components/navbar/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Eclipse } from "lucide-react";

export default function Navbar() {

    const [theme, setTheme] = useState("light");

    // Carregar o tema salvo no localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.body.classList.toggle("dark-theme", savedTheme === "dark");
        }
    }, []);

    // Função para alternar o tema
    const changeTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme); // Atualiza o estado
        document.body.classList.toggle("dark-theme", newTheme === "dark");
        localStorage.setItem("theme", newTheme); // Salva no localStorage
    };

    return (
        <main className={style.navbar}>
            <button className={style.btnTheme} onClick={changeTheme}><Eclipse /></button>
        </main>
    );
}
